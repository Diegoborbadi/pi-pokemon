import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ pokemon }) => {
  const { name, id, img } = pokemon;

  return (
    <div className="Card-container">
      <Link to={`home/${id}`}>
        {img && (
            <img src={img} alt={`${name} dream world`} />
            )}
            <div className="name-card">
            <h2>Name: {name}</h2>
            </div>
      </Link>
    </div>
  );
};

export default Card;
