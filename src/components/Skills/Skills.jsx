import "./skills.scss";
import html from "../../assets/html.png";
import css from "../../assets/css-3.png";
import js from "../../assets/java-script.png";
import rjs from "../../assets/atom.png";
import njs from "../../assets/node.png";
import py from "../../assets/python.png";
import ts from "../../assets/typescript.png";
import gh from "../../assets/github.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skill">
        <img src={html} alt="" />
        <p className="lang">HTML</p>
      </div>
      <div className="skill">
        <img src={css} alt="" />
        <p className="lang">CSS</p>
      </div>
      <div className="skill">
        <img src={js} alt="" />
        <p className="lang">JavaScript</p>
      </div>
      <div className="skill">
        <img src={rjs} alt="" />
        <p className="lang">React</p>
      </div>
      <div className="skill">
        <img src={ts} alt="" />
        <p className="lang">TypeScript</p>
      </div>
      <div className="skill">
        <img src={gh} alt="" />
        <p className="lang">Git/Github</p>
      </div>
      <div className="skill">
        <img src={njs} alt="" />
        <p className="lang">Node.js</p>
      </div>
      <div className="skill">
        <img src={py} alt="" />
        <p className="lang">Python</p>
      </div>
    </div>
  );
};

export default Skills;
