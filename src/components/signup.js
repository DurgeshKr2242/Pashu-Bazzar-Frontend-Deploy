import React from "react";
import "../static/signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <section className="signupFormContainer">
        <div className="signupImg">
          <img
            src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <div className="upperFilmSignup">
            <h1>WELCOME</h1>
            <p>
              If you are new to Pashu Bazar , to get connected with us please
              fill up this form and create an account.
            </p>
            <p style={{ marginTop: "3rem" }}>Already have an account?</p>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <button className="loginLink">Login</button>
            </Link>
          </div>
        </div>
        <form className="signupForm">
          <h1
            style={{ textAlign: "center", margin: "0.2rem", color: "orange" }}
          >
            Registration
          </h1>
          <p style={{ textAlign: "center", margin: "0.2rem" }}>
            Fill the form To Join Pashu Bazar
          </p>
          <div className="signupName">
            <p className="name">Name</p>
            <input
              type="text"
              name="signupName"
              className="nameInput"
              placeholder="Full name"
              required
            />
          </div>
          <div className="signupEmail">
            <p className="name">Email</p>
            <input
              type="signupEmail"
              name="email"
              className="emailInput"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="signupDOB">
            <p className="name">DOB</p>
            <input
              type="date"
              name="signupDob"
              className="DOBInput"
              placeholder="Date of birth"
              required
            />
          </div>
          <div className="signupGender">
            <p className="name">Gender</p>
            <input
              type="radio"
              name="signupGender"
              className="genderInput"
              placeholder="Your Gender"
              id="male"
              required
            />
            <label for="male">male</label>
            <input
              type="radio"
              name="signupGender"
              className="genderInput"
              placeholder="Your Gender"
              id="female"
              required
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="signupGender"
              className="genderInput"
              placeholder="Your Gender"
              id="others"
              required
            />
            <label for="others">Others</label>
          </div>
          <div className="signupCity">
            <p className="name">City</p>
            <input
              type="text"
              name="signupCity"
              className="cityInput"
              placeholder="Your City"
              required
            />
          </div>
          <div className="signupPassword">
            <p className="name">Password</p>
            <input
              type="password"
              name="signupPassword"
              className="passwordInput"
              placeholder="Choose a Password"
              required
            />
          </div>

          <button type="submit" className="signupSubmit">
            SIGN UP
          </button>
        </form>
      </section>
    </>
  );
};

export default Signup;
