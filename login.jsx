import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
       const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const navigate=useNavigate()

        const handleLogin = (e) => {
            e.preventDefault();
        
            // Dummy authentication (Replace this with a real authentication system)
            if (email === "admin@example.com" && password === "password123") {

                navigate("/")
              setIsLoggedIn(true);
              setError("");
            } else {
              setError("Invalid email or password");
            }
          };
  return (
    <section
    id="hero"
    className="d-flex align-items-center justify-content-center text-center"
    style={{
      backgroundImage: "url('public/NU.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      color: "yellow",
    }}
  >
    {!isLoggedIn ? (
      <div className="card p-4 bg-light shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-dark mb-3">Login</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    ) : (
      <h2>Welcome, {email}! You are now logged in.</h2>
    )}
  </section>
  );
}
