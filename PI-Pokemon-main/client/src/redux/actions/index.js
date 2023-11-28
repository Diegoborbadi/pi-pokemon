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

export function getDetailPromise(id) {
  return function (dispatch) {
      axios.get(`http://localhost:3001/pokemons/${id}`)
      .then(res => res.data)
      .then(res => dispatch({
          type: GET_DETAILS,
          payload: res
      }))
      .catch(err => console.log(err))
  }
}

export const cleanDetail = (dispatch) => {
  return dispatch({
      type: CLEAN_DETAIL,
      payload: []
  })
};

export const cleanPokemons = (dispatch) => {
  return dispatch({
      type: CLEAN_POKEMONS,
      payload: []
  })
};