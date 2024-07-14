import "./contact.scss";
import miPic from "../../assets/michigan.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="contact"
    >
      <div className="title">
        <h1>04.Contact</h1>
      </div>
      <div className="form">
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ ease: "easeInOut", duration: 1.0 }}
        >
          <input
            className="nameField"
            type="name"
            placeholder="Enter name"
            required
          ></input>
          <input
            className="emailField"
            type="email"
            placeholder="Enter your email"
            required
          ></input>

          <textarea
            className="textField"
            type="text"
            placeholder="Message..."
            required
          ></textarea>
          <input type="submit" className="buttonsub"></input>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ ease: "easeInOut", duration: 1.0 }}
          className="header"
        >
          <h2>Get in Touch</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ ease: "easeInOut", duration: 1.0 }}
          className="details"
        >
          <p>+1 517 442 1387</p>
          <p className="based">Based in</p>
          <img src={miPic} alt="Michigan" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
