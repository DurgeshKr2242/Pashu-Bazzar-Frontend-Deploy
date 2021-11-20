import React from "react";
import "../static/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ styling1, styling2, styling3, noLogin, noSignup }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const LinkList = [
    { id: 1, link: "/", head: "Home", styling: styling1 },
    { id: 3, link: "/sell", head: "Sell", styling: styling2 },
    { id: 4, link: "/buy", head: "Buy", styling: styling3 },
  ];
  const sidebarShower = () => {
    setShowSidebar(true);
  };
  const sidebarHider = () => {
    setShowSidebar(false);
  };

  return (
    <main className="nav">
      <section className="navbarContainer">
        <nav className="navbar">
          <div className="navbarHead">
            <h1 className="brandName">PASHU BAZAR</h1>
            {showSidebar ? (
              <div className="navbarIcon" onClick={sidebarHider}>
                <CloseIcon />
              </div>
            ) : (
              <div className="navbarIcon" onClick={sidebarShower}>
                <MenuIcon />
              </div>
            )}
          </div>
          <div className={showSidebar ? "navbarList" : "hideNavbarList"}>
            {LinkList.map((item) => {
              const { id, link, head, styling } = item;
              return (
                <Link
                  to={link}
                  key={id}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <p
                    className={`navbarListItem ${styling}`}
                    onClick={sidebarHider}
                  >
                    {head}
                  </p>
                </Link>
              );
            })}

            <div className="buttonContainer">
              {noLogin ? (
                ""
              ) : (
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <button onClick={sidebarHider} className="navbarLogin">
                    Login
                  </button>
                </Link>
              )}
              {noSignup ? (
                ""
              ) : (
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <button onClick={sidebarHider} className="navbarSignup">
                    Signup
                  </button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </section>
    </main>
  );
};

export default Navbar;
