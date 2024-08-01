import { motion } from "framer-motion";
import React from "react";

export default function Links() {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const iteamVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const List = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants}>

      {List.map((list) => (
        <motion.a
          href={`#${list}`}
          key={list}
          variants={iteamVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {list}
        </motion.a>
      ))}
      
    </motion.div>
  );
}
