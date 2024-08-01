import { motion,useScroll,useTransform } from 'framer-motion';
import './parallax.scss'
import { useRef } from 'react';

export default function Parallax({ type }) {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    });
    const yBg = useTransform(scrollYProgress,[0,1],["0%","100%"]);
    const yText = useTransform(scrollYProgress,[0,1],["0%","500%"]);



  return (
    <motion.div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "Services"
            ? "liner-gradient(180deg, #111132,#0c0c1d)"
            : "liner-gradient(180deg, #111132,#505064)",
      }}
    >
      <motion.h1 style={{y:yText}}>{type=="Services"?"What we do?":"What we did?"}</motion.h1>
      <motion.div  className="mountains"></motion.div>
      <motion.div style={{y:yBg,backgroundImage:`url(${type=="Services"?"planets.png":"sun.png"})`}} className="planets"></motion.div>
      <motion.div style={{x:yBg}} className="stars"></motion.div>
    </motion.div>
  );
}
