import "./projects.scss";
import Card from "../../components/Card/Card";
import { motion } from "framer-motion";
import shiver from "../../assets/shivproject.webp";
import glitter from "../../assets/banner3.jpg";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="projects"
    >
      <div className="title">
        <h1>03.Projects</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="project"
      >
        <Card
          imgSrc={glitter}
          title="Glitterdoom | E-commerce"
          deploy="https://glitterdoom.vercel.app/"
          github="https://github.com/dshatto9/glitterdoom"
          stack1="React"
          stack2="Tailwind"
          stack3="Sanity"
        />
        <Card
          imgSrc={shiver}
          title="Shiver | Horror Streaming"
          deploy="https://shiver-rho.vercel.app/"
          github="https://github.com/dshatto9/shiver"
          stack1="React"
          stack2="Tailwind"
          stack3="Framer"
        />
        <Card
          imgSrc="https://files.tecnoblog.net/wp-content/uploads/2021/12/melhor-streaming-2021-netflix-1.jpg"
          title="Netflix Clone"
          deploy="https://stalwart-faun-50562d.netlify.app/"
          github="https://github.com/dshatto9/netflix-clone"
          stack1="React"
          stack2="CSS"
          stack3="Firebase"
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
