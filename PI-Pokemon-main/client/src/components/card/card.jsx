import {Link} from "react-router-dom"
import "./card.css";
const Card = ({pokemon}) => {
    const {name,hp,attack,defense,speed,height,weight,id} = pokemon
    return(
        <div className="Card-container">
         <Link to={`home/${id}`}>
            <h2>Name: {name}</h2>
            <p>hp: {hp}</p>
            <p>attack: {attack}</p>
            <p>defense: {defense}</p>
            <p>speed: {speed}</p>
            <p>height: {height}</p>
            <p>weight: {weight}</p>
         </Link>
        </div>
    )
}

export default Card; 