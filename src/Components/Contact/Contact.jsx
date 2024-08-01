import { motion } from "framer-motion";
import "./contact.scss";

function Contact() {
    const variants ={
        initial:{
            y:500,
            opacity :0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren : 0.1
            }
        }
    }
  return (
    <motion.div className="contact" variants={variants} initial="initial" animate="animate">
      <motion.div className="textContainer">
        <h1>Let's work toghether</h1>
        <motion.div className="iteamContainer">
          <motion.div className="iteam">
            <h2>Mail</h2>
            <span>suman.cse23@gmail.com</span>
          </motion.div>
          <motion.div className="iteam">
            <h2>Address</h2>
            <span>Noida, N.C.R.</span>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form action="" className="formContainer">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea
            rows={8}
            cols={18}
            placeholder="Type your message......."
          />
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
