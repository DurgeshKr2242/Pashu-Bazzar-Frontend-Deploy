import React from "react";
import { Link } from "react-router-dom";
import "../static/sell.css";
const Sell = () => {
  return (
    <section className="sellFormContainer">
      <div className="sellImg">
        <img
          src="https://images.unsplash.com/photo-1598715685267-0f45367d8071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
          alt=""
        />
        <div className="upperFilmSell">
          <h1>HELLO</h1>
          <p>
            We are happy to see you back. Hope that you are doing well,Sell your
            cattles here.
          </p>
          <p style={{ marginTop: "3rem" }}>Want to buy a cattle?</p>
          <Link
            to="/buy"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <button className="buyLink">Buy</button>
          </Link>
        </div>
      </div>
      <form className="sellForm">
        <h1 style={{ textAlign: "center", margin: "0.2rem", color: "orange" }}>
          Sell your cattles
        </h1>
        <p style={{ textAlign: "center", margin: "0.2rem" }}>
          Provide the information about your cattle
        </p>

        <div className="sellName">
          <p className="name">Name</p>
          <input
            type="text"
            name="sellCattleName"
            className="nameInput"
            placeholder="Name of cattle"
            required
          />
        </div>

        <div className="sellPrice">
          <p className="name">Price</p>
          <input
            type="text"
            name="sellPrice"
            className="priceInput"
            placeholder="Price"
            required
          />
        </div>

        <div className="sellLocation">
          <p className="name">City</p>
          <input
            type="text"
            name="sellOwnerCity"
            className="locationInput"
            placeholder="Location of Owner"
            required
          />
        </div>
        <div className="sellPhone">
          <p className="name">Phone</p>
          <input
            type="text"
            name="sellPhone"
            className="phoneInput"
            placeholder="Phone number"
            required
          />
        </div>
        <div className="sellImage">
          <p className="name">Images</p>
          <input
            type="file"
            name="sellCattleImage"
            className="imageInput"
            required
          />
        </div>
        <div className="sellDesc">
          <p className="name">Description</p>
          <textarea
            id="message"
            class="form-field"
            placeholder="Your Message"
            rows="6"
            name="cattleDesc"
            required
          ></textarea>
        </div>

        <button type="submit" className="sellSubmit">
          POST
        </button>
      </form>
    </section>
  );
};

export default Sell;
