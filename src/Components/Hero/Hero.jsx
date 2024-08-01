import { motion, stagger } from "framer-motion";
import { Link, useState } from "react";
import "./Hero.scss";
import Resume from "../Models/Resume";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 0.6,
      },
    },
  };

  const SlidingTextVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-400%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="hero">
      <Resume open={open} setOpen={setOpen}/>
      <div className="heroimg">
        <img src="/sam.png" />
      </div>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SUMAN GUPTA</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack developer & DevOps Engineer
          </motion.h1>
          <motion.div variants={textVariants} className="button-s">
            <motion.a
              variants={textVariants}
              href="https://bit.ly/3QlcJxk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "orange",
                border: "none",
                color: "black",
                borderRadius: "5px",
                fontSize: "15px",
                cursor: "pointer",
              }}
              onClick={()=>{setOpen(true)}}
            >
              <div className="text">
              <span>Download CV</span>
              <FiArrowUpRight  size={23}/>
              </div>
            </motion.a>
            {/* <motion.button className="mobi" variants={textVariants}>Download CV</motion.button> */}
            <motion.button variants={textVariants}><span>Contact Me</span></motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingContent"
        variants={SlidingTextVariants}
        initial="initial"
        animate="animate"
      >
        Web ● Android ● AWS
      </motion.div>
      {/* <div className="heroimg">
        <img src="/sam.png" />
      </div> */}
    </div>
  );
}
