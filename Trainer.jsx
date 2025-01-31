import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Trainer() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const trainers = [
    { name: "John Doe", website: "http://localhost:5179/JohnDoe" },
    { name: "Jane Smith", website: "https://janesmithtraining.com" },
    { name: "Alex Johnson", website: "https://alexjohnsonwellness.com" },
    { name: "Emily Brown", website: "https://emilybrownnutrition.com" },
  ];

  return (
    <section
      id="trainers"
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: "url('public/trainer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "yellow",
      }}
    >
      <div className="card p-4 bg-light shadow-lg" style={{ width: "600px" }}>
        <h3 className="text-dark mb-3">Meet Our Expert Trainers</h3>
        <p>Find the best trainers to guide you on your fitness and nutrition journey.</p>

        <ul className="list-group">
          {trainers.map((trainer, index) => (
            <li key={index} className="list-group-item">
              <a href={trainer.website} target="_blank" rel="noopener noreferrer">
                {trainer.name}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={handleLogout} className="btn btn-danger w-100 mt-4">
          Logout
        </button>
      </div>
    </section>
  );
}
