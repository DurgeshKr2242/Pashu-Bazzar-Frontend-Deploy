import React from "react";
import "./chats.css";
import chats from "../data";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { Link } from "react-router-dom";
const Chats = () => {
  return (
    <>
      <main className="profile">
        {chats.map((item) => {
          const { id, msg, img, name, time } = item;
          return (
            <Link
              to={`/${id}`}
              key={id}
              style={{ color: "black", textDecoration: "none" }}
            >
              <section key={id} className="profileCard">
                <div className="img">
                  <img src={img} alt="" />
                </div>
                <article className="person">
                  <div className="nameAndTime">
                    <h3 className="name">{name}</h3>
                    <h4 className="time">{time}</h4>
                  </div>
                  <p className="msg">{msg}</p>
                </article>
              </section>
            </Link>
          );
        })}
      </main>
      <div className="msgbox">
        <ChatBubbleIcon className="msgIcon" />
      </div>
    </>
  );
};
export default Chats;
