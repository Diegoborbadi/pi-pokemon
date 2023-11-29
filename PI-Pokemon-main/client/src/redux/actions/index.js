import axios from 'axios';

export const GET_POKEMON = 'GET_POKEMON';
export const GET_ALL_POKEMON_IDS = 'GET_ALL_POKEMON_IDS';
export const CLEAN_POKEMONS = 'CLEAN_POKEMONS';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export function getAllPokemonIds(id) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/pokemons/${id}`)
      .then(res => {
        // Suponiendo que la respuesta contiene una matriz de objetos de Pokémon
        const pokemonIds = res.data.map(pokemon => pokemon.id);
        dispatch({
          type: GET_ALL_POKEMON_IDS,
          payload: pokemonIds
        });
      })
      .catch(err => console.log(err));
  };
}



export const getPokemon = () => {
  return async function(dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/pokemon/");
      dispatch({
        type: GET_POKEMON,
        payload: response.data 
      });
    } catch (error) {
      console.error('Error al obtener los datos del backend:', error);
    }
  };
};

export const cleanPokemons = (dispatch) => {
  return dispatch({
      type: CLEAN_POKEMONS,
      payload: []
  })
};


export const cleanDetail = (dispatch) => {
  return dispatch({
      type: CLEAN_DETAIL,
      payload: []
  })
};