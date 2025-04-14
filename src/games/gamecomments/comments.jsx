import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../../firebaseConfig";

const CommentsSection = ({ gameId }) => {
    const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const auth = getAuth();

  useEffect(() => {
    const commentsRef = collection(db, 'comments');
    const q = query(
      commentsRef,
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsArray = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if(data.gameId === gameId){
          commentsArray.push({
            id: doc.id,
            ...data
          });
        }
      });
      setComments(commentsArray);
    });

    return () => unsubscribe();
  }, [gameId]);

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!auth.currentUser || newComment.trim() === '') return;

    const username = localStorage.getItem("userName");
    if(!username){
      console.error("no username");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, 'comments'), {
        gameId: gameId,
        userId: auth.currentUser.uid,
        userName: username,
        text: newComment,
        timestamp: serverTimestamp()
      });
      setNewComment('');
      console.log('Comment added with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  return (
        <div className="comments-section container comment-container">
            <h3 className="mb-3">Comments</h3>
            {auth.currentUser && (
                <form onSubmit={handleSubmit} className="mb-3">
                    <div className="mb-2">
                        <textarea
                            className="form-control"
                            value={newComment}
                            onChange={handleInputChange}
                            placeholder="Add a comment..."
                            rows="3"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Post</button>
                </form>
            )}
            <ul className="list-unstyled">
                {comments.map(comment => (
                    <li key={comment.id} className="mb-2 p-2 border rounded bg-light"><span className="fw-bold">{comment.userName}: </span> <span className="comment-text">{comment.text}</span></li>
                ))}
            </ul>
        </div>
    );
};
export default CommentsSection;
