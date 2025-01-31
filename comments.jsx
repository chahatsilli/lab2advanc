import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function comments() {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(storedComments);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">All Comments</h2>

      {comments.length > 0 ? (
        <div className="mt-4">
          {comments.map((comment, index) => (
            <div key={index} className="card mb-2 p-2">
              <p>{comment.text}</p>
              <p>
                👍 {comment.likes} | 👎 {comment.dislikes}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted text-center">No comments yet.</p>
      )}

      <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}