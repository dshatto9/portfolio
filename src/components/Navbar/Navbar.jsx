import "./navbar.scss";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
import linkImg from "../../assets/link2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="" />
        </a>
        <a href="/" className="mHome">
          <img src={linkImg}></img>Home
        </a>
        <a href="/about" className="mAbout">
          <img src={linkImg}></img>About Me
        </a>
        <a href="/projects" className="mProjects">
          <img src={linkImg} alt=""></img>Projects
        </a>
        <a href="/contact" className="mContact">
          <img src={linkImg} alt=""></img>Contact
        </a>
      </div>
      <div className="right">
        <IconContext.Provider value={{ size: "25px" }}>
          <a
            href="https://www.linkedin.com/in/david-shatto-ab025b51/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "25px" }}>
          <a href="https://github.com/dshatto9" target="_blank">
            <FaGithubSquare />
          </a>
        </IconContext.Provider>
        <div className="hamburger">
          <div className="menuIcon">
            <img src={menu} alt="" onClick={() => setOpen((prev) => !prev)} />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
