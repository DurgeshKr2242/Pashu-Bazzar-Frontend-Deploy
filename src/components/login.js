import React from "react";
import "../static/login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <section className="loginFormContainer">
        <div className="loginImg">
          <img
            src="https://images.unsplash.com/photo-1598715685267-0f45367d8071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
          <div className="upperFilmLogin">
            <h1>WELCOME BACK</h1>
            <p>
              We are happy to see you back. Hope that you are doing well, login
              to catch up!
            </p>
            <p style={{ marginTop: "3rem" }}>Don't have an account?</p>
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <button className="signupLink">Signup</button>
            </Link>
          </div>
        </div>
        <form className="loginForm">
          <h1
            style={{ textAlign: "center", margin: "0.2rem", color: "orange" }}
          >
            Login
          </h1>
          <p style={{ textAlign: "center", margin: "0.2rem" }}>
            Fill the form To log in to your Pashu Bazar account
          </p>

          <div className="loginEmail">
            <p className="name">Email</p>
            <input
              type="email"
              name="loginEmail"
              className="emailInput"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="loginName">
            <p className="name">Name</p>
            <input
              type="text"
              name="LoginName"
              className="nameInput"
              placeholder="Full name"
              required
            />
          </div>

          <div className="loginCity">
            <p className="name">City</p>
            <input
              type="text"
              name="loginCity"
              className="cityInput"
              placeholder="Your City"
              required
            />
          </div>
          <div className="loginPassword">
            <p className="name">Password</p>
            <input
              type="password"
              name="loginPassword"
              className="passwordInput"
              placeholder="Enter  Your Password"
              required
            />
          </div>

          <button type="submit" className="loginSubmit">
            LOGIN
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
