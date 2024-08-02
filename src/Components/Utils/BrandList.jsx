import { motion, stagger } from "framer-motion";
import React from "react";

function BrandList() {
  const list = [
    {
      id: 1,
      img: "/node.png",
      title: "MERN Stack",
      disc : "A full-stack development toolkit using ReactJS, ExpressJS, NodeJS & MongoDB. I built rebust scalabal and userfriendly web application"
    },
    {
      id: 2,
      img: "/android-logo.png",
      title: "Mobile App",
      disc : "Building seamless mobile experiences with Javascript & React. I create fast intuitive and cross-plateform mobile apps using react-native."
    },
    {
      id: 3,
      img: "/devops.png",
      title: "DevOps",
      disc : "Implementing CI/CD & automating, optimizing and accelerating delivery. From code to production,efficiently. I bridge the gap between code and production."
    },
    {
      id: 4,
      img: "/aws.png",
      title: "AWS",
      disc : "AWS is scalable secure and efficient cloud solutions. From infrastructure to application. I design, deploy and manage cloud infrastructure and application on Amazon Web Services[AWS]."
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
