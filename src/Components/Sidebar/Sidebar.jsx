import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import "./sidebar.scss";
import ToggleButton from "./ToggleButton";

export default function Sidebar() {
  const [open,setopen] = useState(false);

  const varients={
    open : {
      clipPath : "circle(1200px at 50px 50px)",
      transition:{
        type : "spring",
        stiffness : 18, 
      }
    },
    closed:{
      clipPath : "circle(30px at 50px 50px)",
      transition:{
        delay : 0.5,
        type : "spring",
        stiffness : 400,
        // damping : 400
      }
    }
  }
  return (
    <motion.div className="sidebar" animate={open?"open":"closed"}>
      <motion.div className="bg" variants={varients}>
        <Links />
      </motion.div>
      <ToggleButton setopen={setopen} />
    </motion.div>
  );
}
