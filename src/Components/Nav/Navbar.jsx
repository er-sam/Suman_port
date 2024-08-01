import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import "./nav.scss";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* SIDEBAR  */}
      <Sidebar />
      <div className="wrapper">
        <span className="span" style={{opacity:0.5}}>
          <h1>hello,</h1>
        </span>
        <div className="social">
          <a
            href="https://github.com/er-sam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={23} />
          </a>
          <a
              href="https://facebook.com/sumankumarlive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook  size={23} />
            </a>
          <a
            href="http://x.com/samwa_js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={23} />
          </a>
          <a
            href="http://instagram.com/samwa.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={23} />
          </a>
          {/* <a href="#"><img src="/youtube.png" alt=""/></a>
        <a href="#"><img src="/dribble.png" alt=""/></a> */}
        </div>
      </div>
    </div>
  );
}
