import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemonIds } from '../../redux/actions'; 

const Detail = ({ id }) => {
  const dispatch = useDispatch();
  const pokeDetail = useSelector((state) => state.pokeDetail);

  useEffect(() => {
    dispatch(getAllPokemonIds(id));
  }, [dispatch, id]);
  
    return (
      <div className="detail-container">
        <h2>{pokeDetail.name}</h2>
        <img className="poke-image" src={pokeDetail.img} alt={pokeDetail.name} />
        <p><strong>HP:</strong> {pokeDetail.hp}</p>
        <p><strong>Attack:</strong> {pokeDetail.attack}</p>
        <p><strong>Defense:</strong> {pokeDetail.defense}</p>
      </div>
    );
  };
  
  export default Detail;
  
