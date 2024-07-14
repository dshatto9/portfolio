import "./home.scss";
import heroImg from "../../assets/home.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="home"
    >
      <div className="textContainer">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ ease: "easeInOut", duration: 1.0 }}
          className="wrapper"
        >
          <h1 className="title">chateau.dev</h1>
          <p>Front End Developer</p>
          <a href="/projects">
            <button className="work">View Work</button>
          </a>
          <a href="/resume">
            <button className="cont">Resume</button>
          </a>
        </motion.div>
      </div>
      <div className="imgContainer">
        <img src={heroImg} alt="heroimg" />
      </div>
    </motion.section>
  );
};

export default Home;
