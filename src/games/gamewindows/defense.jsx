import { useState, useEffect, useRef } from 'react';
import CommentsSection from '../gamecomments/comments';

export const TowerDefense = () => {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const [money, setMoney] = useState(100);
    const [gameOver, setGameOver] = useState(false);
    const [selectedTower, setSelectedTower] = useState(null);

    const towers = useRef([]);
    const enemies = useRef([]);
    const projectiles = useRef([]);
    const path = [
        { x: 0, y: 300 },
        { x: 200, y: 300 },
        { x: 200, y: 100 },
        { x: 400, y: 100 },
        { x: 400, y: 400 },
        { x: 600, y: 400 },
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let lastTime = 0;
        let enemySpawnTimer = 0;

        const spawnEnemy = () => {
            enemies.current.push({
                x: path[0].x,
                y: path[0].y,
                health: 100,
                speed: 1,
                pathIndex: 0,
            });
        };

        const updateEnemies = () => {
            enemies.current = enemies.current.filter(enemy => enemy.health > 0);
            enemies.current.forEach(enemy => {
                const target = path[enemy.pathIndex + 1];
                if (!target) {
                    setGameOver(true);
                    return;
                }
                const dx = target.x - enemy.x;
                const dy = target.y - enemy.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < enemy.speed) {
                    enemy.x = target.x;
                    enemy.y = target.y;
                    enemy.pathIndex++;
                } else {
                    enemy.x += (dx / distance) * enemy.speed;
                    enemy.y += (dy / distance) * enemy.speed;
                }
            });
        };

        const updateProjectiles = () => {
            projectiles.current = projectiles.current.filter(p => {
                const enemy = enemies.current.find(e => {
                    const dx = e.x - p.x;
                    const dy = e.y - p.y;
                    return Math.sqrt(dx * dx + dy * dy) < 15;
                });
                if (enemy) {
                    enemy.health -= 20;
                    if (enemy.health <= 0) {
                        setScore(s => s + 10);
                        setMoney(m => m + 5);
                    }
                    return false;
                }
                p.x += p.vx;
                p.y += p.vy;
                return p.x >= 0 && p.x <= canvas.width && p.y >= 0 && p.y <= canvas.height;
            });
        };

        const updateTowers = () => {
            towers.current.forEach(tower => {
                tower.cooldown = Math.max(0, tower.cooldown - 1);
                if (tower.cooldown === 0) {
                    const target = enemies.current.find(e => {
                        const dx = e.x - tower.x;
                        const dy = e.y - tower.y;
                        return Math.sqrt(dx * dx + dy * dy) < tower.range;
                    });
                    if (target) {
                        const dx = target.x - tower.x;
                        const dy = target.y - tower.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const speed = 5;
                        projectiles.current.push({
                            x: tower.x,
                            y: tower.y,
                            vx: (dx / distance) * speed,
                            vy: (dy / distance) * speed,
                        });
                        tower.cooldown = 30;
                    }
                }
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw path
            ctx.beginPath();
            ctx.moveTo(path[0].x, path[0].y);
            path.forEach(p => ctx.lineTo(p.x, p.y));
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 20;
            ctx.stroke();
            // Draw enemies
            enemies.current.forEach(enemy => {
                ctx.beginPath();
                ctx.arc(enemy.x, enemy.y, 10, 0, Math.PI * 2);
                ctx.fillStyle = 'red';
                ctx.fill();
            });
            // Draw towers
            towers.current.forEach(tower => {
                ctx.beginPath();
                ctx.rect(tower.x - 15, tower.y - 15, 30, 30);
                ctx.fillStyle = 'blue';
                ctx.fill();
            });
            // Draw projectiles
            projectiles.current.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
                ctx.fillStyle = 'black';
                ctx.fill();
            });
        };

        const gameLoop = (time) => {
            if (gameOver) return;
            const delta = time - lastTime;
            lastTime = time;
            enemySpawnTimer += delta;
            if (enemySpawnTimer > 2000) {
                spawnEnemy();
                enemySpawnTimer = 0;
            }
            updateEnemies();
            updateTowers();
            updateProjectiles();
            draw();
            animationFrameId = requestAnimationFrame(gameLoop);
        };

        animationFrameId = requestAnimationFrame(gameLoop);
        return () => cancelAnimationFrame(animationFrameId);
    }, [gameOver]);

    const handleCanvasClick = (e) => {
        if (!selectedTower || money < 50) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        towers.current.push({ x, y, range: 100, cooldown: 0 });
        setMoney(m => m - 50);
        setSelectedTower(null);
    };

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="mb-4 text-xl">
                    Score: {score} | Money: ${money} | {gameOver ? 'Game Over!' : ''}
                </div>
                <div className="mb-4">
                    <button
                        className={`px-4 py-2 mr-2 rounded ${selectedTower === 'basic' ? 'bg-blue-700' : 'bg-blue-500'} text-white`}
                        onClick={() => money >= 50 && setSelectedTower('basic')}
                        disabled={money < 50}
                    >
                        Place Tower ($50)
                    </button>
                </div>
                <canvas
                    ref={canvasRef}
                    width={600}
                    height={500}
                    className="bg-white shadow-lg border-2 border-black"
                    onClick={handleCanvasClick}
                />
            </div>
            <div>
                <CommentsSection gameId="towerdefense" />
            </div>
        </>
    );
};