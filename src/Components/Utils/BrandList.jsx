import { motion, stagger } from "framer-motion";
import React from "react";

function BrandList() {
  const list = [
    {
      id: 1,
      img: "/node.png",
      title: "MERN Stack",
      disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit earum,repudiandae consectetur"
    },
    {
      id: 2,
      img: "/android-logo.png",
      title: "Mobile App",
      disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit earum,repudiandae consectetur"
    },
    {
      id: 3,
      img: "/devops.png",
      title: "DevOps",
      disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit earum,repudiandae consectetur"
    },
    {
      id: 4,
      img: "/aws.png",
      title: "AWS",
      disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit Reprehenderit earum,repudiandae consectetur"
    },
  ];

  // const variants={
  //     initial:{
  //         x:-500,
  //         // y:100,
  //         opacity : 0
  //     },
  //     animate:{
  //         x:0,
  //         // y:0,
  //         opacity:1,
  //         transition:{
  //             duration: 1,
  //             staggerChildren :0.5
  //         }
  //     }
  // }
  return (
    <>
      {list.map((iteam) => (
        <motion.div
          key={iteam.id}
          className="box"
          whileHover={{
            background: "lightgray",
            color: "black",
            cursor: "pointer",
          }}
        >
          <motion.img src={iteam.img} alt="" />
          <p>
            {iteam.disc}
          </p>
          <motion.div className="button">
            <motion.h3>{iteam.title}</motion.h3>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}

export default BrandList;
