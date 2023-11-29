// rootReducer.js

import { 
  GET_POKEMON,
  CLEAN_DETAIL,
  CLEAN_POKEMONS,
  GET_ALL_POKEMON_IDS 
} from "../actions";

const initialState = { 
  allPokemons: [],
  pokemonsCopy:[], 
  posts: [],
  pokeDetail: [] 
};




const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        allPokemons: action.payload,
        pokemonsCopy: action.payload
      };
    case GET_ALL_POKEMON_IDS:
      return {
        ...state,
        pokeDetail: action.payload
      };
    case CLEAN_DETAIL:
      return {
          ...state,
          pokeDetail: action.payload
      };
    case CLEAN_POKEMONS:
       return {
           ...state,
           pokemons: action.payload
     };
    default:
      return {...state};
  }
};

export default rootReducer;
