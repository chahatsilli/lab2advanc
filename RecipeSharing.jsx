import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function RecipeSharing() {
  const [recipe, setRecipe] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if recipe input is not empty
    if (recipe.trim() === "") {
      setError("Recipe cannot be empty");
    } else {
      setRecipeList([...recipeList, recipe]);
      setRecipe("");
      setError(""); // Clear any error message
    }
  };

  return (
    <section
      id="recipe-sharing"
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{
        backgroundImage: "url('public/recipe-bg.jpg')", // Use a background image for the page
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "yellow",
      }}
    >
      <h3 className="text-dark mb-3">Share Your Recipe</h3>
      <div className="card p-4 bg-light shadow-lg" style={{ width: "80%", maxWidth: "600px" }}>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>} {/* Display error if any */}
          
          <div className="mb-3">
            <label className="form-label">Your Recipe:</label>
            <textarea
              className="form-control"
              rows="4"
              value={recipe}
              onChange={(e) => setRecipe(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100">Submit Recipe</button>
        </form>

        <div className="mt-4">
          <h5>Recipe List</h5>
          <ul className="list-group">
            {recipeList.map((rec, index) => (
              <li key={index} className="list-group-item">
                {rec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
