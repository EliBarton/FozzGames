import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc, query, orderBy, limit, getDocs, updateDoc, doc, increment, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../../firebaseConfig';
import './colorpalette.css';

const ColorPaletteGenerator = () => {
  const [palette, setPalette] = useState([]);
  const [paletteName, setPaletteName] = useState('');
  const [harmonyType, setHarmonyType] = useState('complementary');
  const [savedPalettes, setSavedPalettes] = useState([]);
  const [userPalettes, setUserPalettes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');
  const [activeTab, setActiveTab] = useState('generate');
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const auth = getAuth();

  useEffect(() => {
    if (activeTab === 'browse') {
      fetchCommunityPalettes();
    } else if (activeTab === 'my-palettes') {
      fetchUserPalettes();
    }
  }, [activeTab]);

  // Generate a random color in HSL
  const randomHSL = () => {
    return {
      h: Math.floor(Math.random() * 360),
      s: Math.floor(Math.random() * 40) + 60, // 60-100%
      l: Math.floor(Math.random() * 30) + 40  // 40-70%
    };
  };

  // Convert HSL to Hex
  const hslToHex = (h, s, l) => {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }

    const toHex = (n) => {
      const hex = Math.round((n + m) * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // Generate palette based on color harmony
  const generatePalette = (type = harmonyType) => {
    const baseColor = randomHSL();
    let colors = [];

    switch (type) {
      case 'complementary':
        colors = [
          hslToHex(baseColor.h, baseColor.s, baseColor.l),
          hslToHex((baseColor.h + 180) % 360, baseColor.s, baseColor.l),
          hslToHex(baseColor.h, baseColor.s, Math.max(20, baseColor.l - 20)),
          hslToHex((baseColor.h + 180) % 360, baseColor.s, Math.max(20, baseColor.l - 20)),
          hslToHex(baseColor.h, Math.max(20, baseColor.s - 30), Math.min(80, baseColor.l + 20))
        ];
        break;
      case 'analogous':
        colors = [
          hslToHex(baseColor.h, baseColor.s, baseColor.l),
          hslToHex((baseColor.h + 30) % 360, baseColor.s, baseColor.l),
          hslToHex((baseColor.h - 30 + 360) % 360, baseColor.s, baseColor.l),
          hslToHex((baseColor.h + 60) % 360, baseColor.s, Math.max(20, baseColor.l - 15)),
          hslToHex((baseColor.h - 60 + 360) % 360, baseColor.s, Math.min(80, baseColor.l + 15))
        ];
        break;
      case 'triadic':
        colors = [
          hslToHex(baseColor.h, baseColor.s, baseColor.l),
          hslToHex((baseColor.h + 120) % 360, baseColor.s, baseColor.l),
          hslToHex((baseColor.h + 240) % 360, baseColor.s, baseColor.l),
          hslToHex(baseColor.h, Math.max(20, baseColor.s - 30), Math.max(20, baseColor.l - 20)),
          hslToHex((baseColor.h + 120) % 360, Math.max(20, baseColor.s - 30), Math.min(80, baseColor.l + 20))
        ];
        break;
      case 'monochromatic':
        colors = [
          hslToHex(baseColor.h, baseColor.s, 20),
          hslToHex(baseColor.h, baseColor.s, 35),
          hslToHex(baseColor.h, baseColor.s, 50),
          hslToHex(baseColor.h, baseColor.s, 65),
          hslToHex(baseColor.h, baseColor.s, 80)
        ];
        break;
      case 'tetradic':
        colors = [
          hslToHex(baseColor.h, baseColor.s, baseColor.l),
          hslToHex((baseColor.h + 90) % 360, baseColor.s, baseColor.l),
          hslToHex((baseColor.h + 180) % 360, baseColor.s, baseColor.l),
          hslToHex((baseColor.h + 270) % 360, baseColor.s, baseColor.l),
          hslToHex(baseColor.h, Math.max(20, baseColor.s - 30), Math.min(80, baseColor.l + 20))
        ];
        break;
      default:
        colors = Array(5).fill(null).map(() => {
          const c = randomHSL();
          return hslToHex(c.h, c.s, c.l);
        });
    }

    setPalette(colors);
    showNotification('Palette generated!');
  };

  // Extract colors from uploaded image
  const extractFromImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        const colorMap = {};

        // Sample pixels and count occurrences
        for (let i = 0; i < pixels.length; i += 4 * 100) { // Sample every 100th pixel
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
          colorMap[hex] = (colorMap[hex] || 0) + 1;
        }

        // Get top 5 colors
        const sortedColors = Object.entries(colorMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(entry => entry[0]);

        setPalette(sortedColors);
        showNotification('Colors extracted from image!');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  // Save palette to Firestore
  const savePalette = async () => {
    if (!auth.currentUser) {
      showNotification('Please log in to save palettes');
      return;
    }

    if (palette.length === 0) {
      showNotification('Generate a palette first');
      return;
    }

    const username = localStorage.getItem("userName");
    if (!username) {
      showNotification('Username not found');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'palettes'), {
        name: paletteName || 'Untitled Palette',
        colors: palette,
        userId: auth.currentUser.uid,
        username: username,
        likes: 0,
        timestamp: new Date(),
        harmonyType: harmonyType
      });
      showNotification('Palette saved!');
      setPaletteName('');
      if (activeTab === 'my-palettes') {
        fetchUserPalettes();
      }
    } catch (error) {
      console.error('Error saving palette:', error);
      showNotification('Failed to save palette');
    } finally {
      setLoading(false);
    }
  };

  // Fetch community palettes
  const fetchCommunityPalettes = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'palettes'),
        orderBy('likes', 'desc'),
        orderBy('timestamp', 'desc'),
        limit(20)
      );
      const querySnapshot = await getDocs(q);
      const palettes = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSavedPalettes(palettes);
    } catch (error) {
      console.error('Error fetching palettes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user's palettes
  const fetchUserPalettes = async () => {
    if (!auth.currentUser) {
      setUserPalettes([]);
      return;
    }

    setLoading(true);
    try {
      const q = query(
        collection(db, 'palettes'),
        where('userId', '==', auth.currentUser.uid),
        orderBy('timestamp', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const palettes = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUserPalettes(palettes);
    } catch (error) {
      console.error('Error fetching user palettes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Like a palette
  const likePalette = async (paletteId) => {
    if (!auth.currentUser) {
      showNotification('Please log in to like palettes');
      return;
    }

    try {
      const paletteRef = doc(db, 'palettes', paletteId);
      await updateDoc(paletteRef, {
        likes: increment(1)
      });
      fetchCommunityPalettes();
      showNotification('Liked!');
    } catch (error) {
      console.error('Error liking palette:', error);
    }
  };

  // Load a palette
  const loadPalette = (colors) => {
    setPalette(colors);
    setActiveTab('generate');
    showNotification('Palette loaded!');
  };

  // Export functions
  const exportAsCSS = () => {
    const css = palette.map((color, i) => `--color-${i + 1}: ${color};`).join('\n');
    copyToClipboard(`:root {\n  ${css}\n}`);
    showNotification('CSS copied to clipboard!');
  };

  const exportAsJSON = () => {
    const json = JSON.stringify(palette, null, 2);
    copyToClipboard(json);
    showNotification('JSON copied to clipboard!');
  };

  const exportAsArray = () => {
    const array = `[${palette.map(c => `"${c}"`).join(', ')}]`;
    copyToClipboard(array);
    showNotification('Array copied to clipboard!');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="color-palette-container">
      <h1>Color Palette Generator</h1>
      
      {notification && <div className="notification">{notification}</div>}

      <div className="tabs">
        <button 
          className={activeTab === 'generate' ? 'active' : ''} 
          onClick={() => setActiveTab('generate')}
        >
          Generate
        </button>
        <button 
          className={activeTab === 'browse' ? 'active' : ''} 
          onClick={() => setActiveTab('browse')}
        >
          Community Palettes
        </button>
        <button 
          className={activeTab === 'my-palettes' ? 'active' : ''} 
          onClick={() => setActiveTab('my-palettes')}
        >
          My Palettes
        </button>
      </div>

      {activeTab === 'generate' && (
        <div className="generate-section">
          <div className="palette-display">
            {palette.length > 0 ? (
              palette.map((color, index) => (
                <div key={index} className="color-box" style={{ backgroundColor: color }}>
                  <span className="color-hex">{color}</span>
                </div>
              ))
            ) : (
              <div className="empty-palette">Generate or extract a palette to get started</div>
            )}
          </div>

          <div className="controls">
            <div className="control-group">
              <label>Color Harmony:</label>
              <select value={harmonyType} onChange={(e) => setHarmonyType(e.target.value)}>
                <option value="complementary">Complementary</option>
                <option value="analogous">Analogous</option>
                <option value="triadic">Triadic</option>
                <option value="tetradic">Tetradic</option>
                <option value="monochromatic">Monochromatic</option>
                <option value="random">Random</option>
              </select>
            </div>

            <button onClick={() => generatePalette()} className="btn-primary">
              Generate Palette
            </button>

            <div className="control-group">
              <label>Extract from Image:</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={extractFromImage}
                ref={fileInputRef}
              />
            </div>
          </div>

          {palette.length > 0 && (
            <div className="export-section">
              <h3>Export</h3>
              <div className="export-buttons">
                <button onClick={exportAsCSS}>Copy as CSS</button>
                <button onClick={exportAsJSON}>Copy as JSON</button>
                <button onClick={exportAsArray}>Copy as Array</button>
              </div>

              <div className="save-section">
                <input 
                  type="text" 
                  placeholder="Palette name (optional)"
                  value={paletteName}
                  onChange={(e) => setPaletteName(e.target.value)}
                />
                <button onClick={savePalette} disabled={loading}>
                  {loading ? 'Saving...' : 'Save to Library'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'browse' && (
        <div className="browse-section">
          <h2>Community Palettes</h2>
          {loading ? (
            <div className="loading">Loading...</div>
          ) : savedPalettes.length > 0 ? (
            <div className="palettes-grid">
              {savedPalettes.map((p) => (
                <div key={p.id} className="palette-card">
                  <div className="palette-preview">
                    {p.colors.map((color, i) => (
                      <div key={i} style={{ backgroundColor: color, flex: 1, height: '60px' }} />
                    ))}
                  </div>
                  <div className="palette-info">
                    <h4>{p.name}</h4>
                    <p>by {p.username}</p>
                    <p className="harmony-type">{p.harmonyType}</p>
                    <div className="palette-actions">
                      <button onClick={() => loadPalette(p.colors)}>Load</button>
                      <button onClick={() => likePalette(p.id)}>
                        ❤️ {p.likes || 0}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No palettes found. Be the first to save one!</p>
          )}
        </div>
      )}

      {activeTab === 'my-palettes' && (
        <div className="my-palettes-section">
          <h2>My Palettes</h2>
          {!auth.currentUser ? (
            <p>Please log in to view your saved palettes</p>
          ) : loading ? (
            <div className="loading">Loading...</div>
          ) : userPalettes.length > 0 ? (
            <div className="palettes-grid">
              {userPalettes.map((p) => (
                <div key={p.id} className="palette-card">
                  <div className="palette-preview">
                    {p.colors.map((color, i) => (
                      <div key={i} style={{ backgroundColor: color, flex: 1, height: '60px' }} />
                    ))}
                  </div>
                  <div className="palette-info">
                    <h4>{p.name}</h4>
                    <p className="harmony-type">{p.harmonyType}</p>
                    <div className="palette-actions">
                      <button onClick={() => loadPalette(p.colors)}>Load</button>
                      <span>❤️ {p.likes || 0}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>You haven't saved any palettes yet. Generate and save one to get started!</p>
          )}
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default ColorPaletteGenerator;
