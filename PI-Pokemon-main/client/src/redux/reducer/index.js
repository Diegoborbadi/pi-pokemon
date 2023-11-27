// rootReducer.js

import { GET_POKEMON } from "../actions";

const initialState = { allPokemons: [], posts: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        allPokemons: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;