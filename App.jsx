import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [showCopyright, setShowCopyright] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Load comments from localStorage when the component mounts
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(storedComments);
  }, []);

  // Function to handle comment posting
  const handlePostComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [
        ...comments,
        { text: newComment, likes: 0, dislikes: 0 },
      ];
      
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments)); // Save to localStorage
      setNewComment(""); // Clear input field
    }
  };

  // Function to handle like and dislike
  const handleReaction = (index, type) => {
    const updatedComments = [...comments];
    if (type === "like") {
      updatedComments[index].likes += 1;
    } else {
      updatedComments[index].dislikes += 1;
    }

    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments)); // Update localStorage
  };

  return (
    <div className="w-full container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Chahat</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#three-column">Three-Column Section</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" onClick={() => setShowCopyright(true)}>
                  Copyright
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Three-Column Section */}
      <section id="three-column" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src="product.jpeg" alt="Column 1" className="img-fluid mb-3" />
              <h3>Nutrition</h3>
              <p>MyFitnessPal helps track food intake, exercise, and weight.</p>
              <button className="btn btn-primary mt-3" onClick={() => navigate("/NutritionPage")}>
                NUTRITION
              </button>
            </div>
            <div className="col-md-4 text-center">
              <img src="job description.jpeg" alt="Column 2" className="img-fluid mb-3" />
              <h3>Summary</h3>
              <p>Discover how MyFitnessPal operates and its features.</p>
              <button className="btn btn-primary mt-3" onClick={() => navigate("/RecipeSharing")}>
                SUMMARY
              </button>
            </div>
            <div className="col-md-4 text-center">
              <img src="Describe.jpeg" alt="Column 3" className="img-fluid mb-3" />
              <h3>Trainer</h3>
              <p>Experts define fitness as the ability to perform daily activities efficiently.</p>
              <button className="btn btn-primary mt-3" onClick={() => navigate("/Trainer")}>
                TRAINER
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Thread Post Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Thread Post & Comments</h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button className="btn btn-primary mt-2" onClick={handlePostComment}>
              Post Comment
            </button>
          </div>

          {/* Display Comments */}
          {comments.length > 0 ? (
            <div className="mt-4">
              <h5>Comments:</h5>
              {comments.map((comment, index) => (
                <div key={index} className="card mb-2 p-2">
                  <p>{comment.text}</p>
                  <button className="btn btn-success btn-sm me-2" onClick={() => handleReaction(index, "like")}>
                    👍 {comment.likes}
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleReaction(index, "dislike")}>
                    👎 {comment.dislikes}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted">No comments yet. Be the first to post!</p>
          )}

          <button className="btn btn-secondary mt-3" onClick={() => navigate("/comments")}>
            View All Comments
          </button>
        </div>
      </section>
    </div>
  );
}
