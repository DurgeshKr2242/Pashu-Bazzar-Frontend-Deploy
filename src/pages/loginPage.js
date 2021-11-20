import React from "react";
import Login from "./../components/login";
import Navbar from "../components/navbar";

const LoginPage = () => {
  return (
    <div>
      <Navbar
        styling2="navbarListItemUnactive"
        styling1="navbarListItemUnactive"
        styling3="navbarListItemUnactive"
        noSignup={false}
        noLogin={true}
      />
      <Login />
    </div>
  );
};

export default LoginPage;
