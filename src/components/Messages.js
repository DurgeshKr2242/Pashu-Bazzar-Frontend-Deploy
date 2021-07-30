import React from "react";
import "./messages.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhoneIcon from "@material-ui/icons/Phone";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import MicIcon from "@material-ui/icons/Mic";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import PhotoIcon from "@material-ui/icons/Photo";
import LockIcon from "@material-ui/icons/Lock";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import data from "../data";
import { useEffect } from "react";
const Messages = () => {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setInfo(data.find((item) => item.id == id));
    console.log(info);
  }, [info]);
  return (
    <main>
      <header className="msg__header">
        <section className="msg__info">
          <div className="back">
            <Link to="/" style={{ color: "white" }}>
              <ArrowBackIcon />
            </Link>
          </div>
          <div className="msg__pic">
            <img src={info.img} alt="" className="msg__image" />
          </div>
          <div className="msg__name">
            <h1 className="nameOfPerson">{info.name}</h1>
          </div>
        </section>
        <section className="msg__icons">
          <div className="videoIcon">
            <VideocamIcon />
          </div>
          <div className="phoneIcon">
            <PhoneIcon />
          </div>
          <div className="moreOptions">
            <MoreVertIcon />
          </div>
        </section>
      </header>

      <article className="message">
        <div className="msg__date">
          <h3 className="msg__time">{info.time}</h3>
        </div>
        <section className="instBox">
          <div className="msg__intro">
            <LockIcon />
            <p className="instruction">
              Messages to this chat and calls are secured with end-to-end
              encryption.Tap for more info
            </p>
          </div>
        </section>

        <aside className="msgBox1">
          <h4 className="msg1">Hey how are you</h4>
          <h4 className="msg2">I am alright</h4>
          <h4 className="msg3">let's catch up sometimes</h4>
          <h4 className="msg4">yeah,sure</h4>
          <h4 className="msg5">btw , {info.msg}</h4>
        </aside>
        <footer className="inputArea">
          <div className="inputField">
            <div className="emoji">
              <EmojiEmotionsIcon />
            </div>
            <input type="text" placeholder="Type a message" />
            <div className="gallery">
              <PhotoIcon />
            </div>
            <div className="camera">
              <CameraAltIcon />
            </div>
          </div>
          <div className="mic">
            <MicIcon className="micIcon" />
          </div>
        </footer>
      </article>
    </main>
  );
};

export default Messages;
