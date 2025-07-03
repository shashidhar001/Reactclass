import React from "react";
import backgroundImg from "./assets/bg-cars.jpg";
import orangeCarImg from "./assets/orange-car.jpg";
import "./App.css"; // make sure this line is here

function App() {
  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="login-card">
        <div className="left-panel">
          <img src={orangeCarImg} alt="Orange Car" className="car-image" />
        </div>
        <div className="right-panel">
          <h1 className="brand">
            <span className="blue">Car</span><span className="red">space</span>
          </h1>
          <div className="login-form">
            <div className="button-group">
              <button className="login-btn active">Login</button>
              <button className="signup-btn">Sign up</button>
            </div>
            <label htmlFor="mobile">Enter your Mobile Number</label>
            <div className="mobile-input">
              <span>+91</span>
              <input type="text" id="mobile" placeholder="Enter number" />
            </div>
            <button className="continue-btn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
