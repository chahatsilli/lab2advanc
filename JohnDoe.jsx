import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";



export default function JohnDoe() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: "url('public/istockphoto.jpg')", // Replace with a real background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <div className="card bg-dark text-light shadow-lg p-4" style={{ maxWidth: "500px" }}>
        <img
          src="https://via.placeholder.com/150" // Replace with a real trainer image
          alt="John Doe"
          className="rounded-circle mx-auto d-block mb-3"
          style={{ width: "150px", height: "150px" }}
        />
        <h2>John Doe</h2>
        <p className="text-muted">Certified Fitness Trainer & Nutritionist</p>
        <p>
          With over 10 years of experience in strength training, weight loss, and nutrition guidance,
          John Doe has helped countless clients achieve their fitness goals.
          Whether you're looking to build muscle, lose weight, or improve overall health, 
          he is here to guide you.
        </p>
        <button className="btn btn-primary w-100 mt-3" onClick={() => alert("Appointment Booked!")}>
          Make an Appointment
        </button>
      </div>
    </section>
  );
}
