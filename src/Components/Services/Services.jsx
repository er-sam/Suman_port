import { animate, motion } from "framer-motion";
import BrandList from "../Utils/BrandList";
import "./services.scss";

function Services() {
    const variants={
        initial:{
            x:-500,
            y:100,
            opacity : 0
        },
        animate:{
            x:0,
            y:0,
            opacity:1,
            transition:{
                duration: 2,
                staggerChildren :0.5
            }
        }
    }
  return (
    <motion.div className="services" 
    variants={variants} 
    initial="initial" 
    animate="animate"
    // whileInView="animate"
    >
      <motion.div className="textContainer">
        <motion.p>
          I focus on helping your brand grow <br />
          and move forward
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <motion.div className="title">
          <motion.img src="/people.webp" alt="" />
          <motion.h1>
            <b style={{color:"orange"}}>Unique</b> skills{" "}
          </motion.h1>
        </motion.div>
        <motion.div className="title">
          <motion.h1>
            <b>For Your</b> Business{" "}
          </motion.h1>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer">
        <BrandList/>
      </motion.div>
    </motion.div>
  );
}

export default Services;
