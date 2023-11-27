// actions.js

import axios from 'axios';
export const GET_POKEMON = 'GET_POKEMON';

export const getPokemon = () => {
  return async function(dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/pokemon');
      dispatch({
        type: GET_POKEMON,
        payload: response.data 
      });
    } catch (error) {
      console.error('Error al obtener los datos del backend:', error);
    }
  };
};
