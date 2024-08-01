import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./portfolio.scss";

const iteam = [
  {
    id: 1,
    title: "React E-commerse",
    img: "/sam.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat ut.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Mountains",
    img: "/hero.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat ut.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "React Portfolio",
    img: "/mountains.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat ut.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    title: "React SM",
    img: "/node.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat ut.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
            <button>See Demo</button>
            <button>Git Repo</button>
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
