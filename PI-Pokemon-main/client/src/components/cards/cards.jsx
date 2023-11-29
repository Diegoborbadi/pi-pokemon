import Card from "../card/card"
import "./cards.css";

const Cards = ({ allPokemons }) => {
    const pokemonList = allPokemons;
  
    return (
      <div className="cards-list">
        {pokemonList?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  };
  
  export default Cards;
  