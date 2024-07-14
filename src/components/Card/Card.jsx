import "./card.scss";

export const Card = ({
  imgSrc,
  title,
  stack1,
  stack2,
  stack3,
  deploy,
  github,
}) => {
  return (
    <div className="card-container">
      <div className="card">
        <img className="imgProject" src={imgSrc} alt="card img" />
        <div className="title-container">
          <h2 className="titleCard">{title}</h2>
        </div>
        <a href={deploy} target="_blank">
          <button className="btn_demo">Demo</button>
        </a>
        <a href={github} target="_blank">
          <button className="btn_code">Code</button>
        </a>
        <div className="stacks">
          <p className="stack1">{stack1}</p>
          <p className="stack2">{stack2}</p>
          <p className="stack3">{stack3}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
