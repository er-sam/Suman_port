import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./portfolio.scss";

const iteam = [
  {
    id: 1,
    title: "Sambook",
    img: "/sambook.png",
    desc: "A multi-user full stack online application functions as a social media network where users may register, send and receive friend requests, upload photos, and create accounts.Technology Mongo-DB, ExpressJS, React JS, Node JS, Authentication, APIs",
    demo : "http://sambook.netlify.app",
    repo : "https://github.com/er-sam/sambook"
  },
  {
    id: 2,
    title: "Cryptix",
    img: "/criptix.png",
    desc: "An open-source, research-focused cryptocurrency tracker using graphs, nodejs, reactjs, and an open source API to monitor the price of digital currencies. Technology: NPM, Graphs-Package, ReactJS, NodeJS",
    demo : "https://cryptixweb.netlify.app/",
    repo : "https://github.com/er-sam/cryptix"
  },
  // {
  //   id: 3,
  //   title: "React Portfolio",
  //   img: "/port.png",
  //   desc: "It is my personal portfolio website design & developed by myself. The purpose of this website is to showcase my skill and projects to world so that i can fetched opportunities.",
  // },
  {
    id: 4,
    title: "short-X-URL-shortener",
    img: "/node.png",
    desc: "Long URLs are made shorter and more clickable with the help of a backend URL shortening API that was developed with Node.js and Express.js. Additionally, it was planned to implement a rate limiter and API caching later on. Technology: JavaScript, MongoDB, Express Js, Node.js",
    demo : "",
    repo : "https://github.com/er-sam/short-X-URL-shortener"
  },
  {
    id: 5,
    title: "Message-X",
    img: "/message.png",
    desc: "An instant messaging app Developed with React-Native Expo, it encompassed functionalities like sharing pictures and emoji notifications while effectively using other libraries and React-Native Expo to improve user experience. Technology: Emoji, WebSockets, JavaScript, Node.js, React-Native",
     demo : "",
    repo : "https://github.com/er-sam/message-X"
  },
  {
    id: 6,
    title: "JobHunt",
    img: "/jobhunt.png",
    desc: "Developed a job search platform using React-Native for Android, allowing users to register and find job postings, while companies can post job openings. Technology: Android, React-Native, Tailwind, JavaScript",
     demo : "",
    repo : "https://github.com/er-sam/jobHunt"
  },

];

const Single = ({ iteam }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset:["start start","end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-600%"]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer">
            <img src={iteam.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{y}} >
            <h2>{iteam.title}</h2>
            <p>{iteam.desc}</p>
            <div className="button">
            <button>
              <a href={iteam.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </button>
            <button>
              <a href={iteam.repo} target="_blank" rel="noopener noreferrer">Repo</a>
            </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}>
          {" "}
        </motion.div>
      </div>
      {iteam.map((iteam) => (
        <Single iteam={iteam} key={iteam.id} />
      ))}
    </div>
  );
}
