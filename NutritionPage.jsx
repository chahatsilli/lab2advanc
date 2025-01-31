import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function NutritionPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming logged in for this example
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    activityLevel: "",
  });
  const [result, setResult] = useState(null); // To display result after form submission
  const [dietRecommendation, setDietRecommendation] = useState(""); // To store diet recommendation
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic (e.g., clearing session or token)
    setIsLoggedIn(false);
    navigate("/login"); // Navigate back to the login page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple formula to estimate daily calorie needs based on Mifflin-St Jeor Equation (BMR)
    const { age, weight, height, activityLevel } = formData;
    if (!age || !weight || !height || !activityLevel) {
      setResult("Please fill in all the fields.");
      return;
    }

    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Male BMR calculation
    let calorieNeeds;
    if (activityLevel === "sedentary") {
      calorieNeeds = bmr * 1.2;
    } else if (activityLevel === "light") {
      calorieNeeds = bmr * 1.375;
    } else if (activityLevel === "moderate") {
      calorieNeeds = bmr * 1.55;
    } else if (activityLevel === "active") {
      calorieNeeds = bmr * 1.725;
    } else if (activityLevel === "very active") {
      calorieNeeds = bmr * 1.9;
    }

    // Setting calorie needs result
    setResult(`Your estimated daily calorie needs: ${Math.round(calorieNeeds)} calories.`);

    // Setting diet recommendation based on calorie needs
    if (calorieNeeds < 1800) {
      setDietRecommendation("You may want to focus on a balanced diet with more fruits and vegetables, lean proteins, and whole grains.");
    } else if (calorieNeeds >= 1800 && calorieNeeds <= 2500) {
      setDietRecommendation("Consider a well-balanced diet that includes lean proteins, healthy fats, and plenty of fiber-rich vegetables.");
    } else if (calorieNeeds > 2500) {
      setDietRecommendation("You may benefit from a high-protein, nutrient-dense diet with more complex carbohydrates and healthy fats.");
    }
  };

  return (
    <section
      id="nutrition"
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: "url('public/NU.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "yellow",
      }}
    >
      {isLoggedIn ? (
        <div className="card p-4 bg-light shadow-lg" style={{ width: "600px" }}>
          <h3 className="text-dark mb-3">Nutrition Tips</h3>
          <p>Welcome to the Nutrition Page! Here's how you can improve your diet:</p>

          <section>
            <h4>Nutrition Tips</h4>
            <ul className="list-unstyled">
              <li>Eat a balanced diet with a variety of food groups.</li>
              <li>Include plenty of fruits and vegetables in your meals.</li>
              <li>Stay hydrated by drinking plenty of water throughout the day.</li>
              <li>Avoid processed foods and try to eat whole, natural foods.</li>
              <li>Eat in moderation, and listen to your body's hunger cues.</li>
            </ul>
          </section>

          <section>
            <h4>Fill Out the Form to Calculate Your Daily Calorie Needs</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Age (years):</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Weight (kg):</label>
                <input
                  type="number"
                  className="form-control"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Height (cm):</label>
                <input
                  type="number"
                  className="form-control"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Activity Level:</label>
                <select
                  className="form-select"
                  name="activityLevel"
                  value={formData.activityLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select activity level</option>
                  <option value="sedentary">Sedentary (little to no exercise)</option>
                  <option value="light">Lightly active (light exercise/sports 1-3 days/week)</option>
                  <option value="moderate">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                  <option value="active">Very active (hard exercise/sports 6-7 days a week)</option>
                  <option value="very active">Very active (very hard exercise or physical job)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Calculate
              </button>
            </form>

            {result && <p className="mt-3">{result}</p>}
            {dietRecommendation && <p className="mt-3"><strong>Diet Recommendation:</strong> {dietRecommendation}</p>}
          </section>

          <button onClick={handleLogout} className="btn btn-danger w-100 mt-4">
            Logout
          </button>
        </div>
      ) : (
        <h2>You are logged out. Please <a href="/login">log in</a> to access the Nutrition page.</h2>
      )}
    </section>
  );
}
