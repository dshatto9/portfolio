import "./about.scss";
import profilePic from "../../assets/profile2.png";
import Skills from "../../components/Skills/Skills";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="about"
    >
      <div className="title">
        <h1>02.About Me</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="textContainer"
      >
        <h1 className="greet">Hello, I&apos;m</h1>
        <span>David Shatto</span>
        <p className="desc">
          I got started with development after an injury at my automotive job. I
          had nothing else to do, so I started with the basics of HTML, CSS, and
          JavaScript. I primarily work with React now. I love problem solving
          and creating a pleasant user experience. I've enjoyed every minute of
          my journey. When I'm not working on projects, I enjoy making music,
          playing video games, painting, and hanging out with friends. Thanks
          for stopping by!
        </p>
      </motion.div>
      <div className="skills">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ ease: "easeInOut", duration: 1.0 }}
          className="skills_title"
        >
          <h2>Technologies I frequently use</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ ease: "easeInOut", duration: 1.0 }}
          className="skills-container"
        >
          <Skills />
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="imgContainer-2"
      >
        <img src={profilePic} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default About;
