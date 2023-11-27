//58.29
const axios = require("axios")
const {Pokemon} = require('../db')

const createPokemonDB =  async (name,hp,attack,defense,speed,height,weight) =>{
    return await Pokemon.create({name,hp,attack,defense,speed,height,weight})
}

const getPokemonById = async (id, source) => {
    try {
      let response;
      if (source === 'database') {
        // Pokemon de la base de datos
        response = await Pokemon.findByPk(id);
      } else if (source === 'api') {
        // Pokémon de la API externa
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      } else {
        throw new Error('Invalid source');
      }
  
      if (!response) {
        throw new Error('Pokémon not found');
      }
  
      if (source === 'database') {
        return response; // Retorna el Pokémon de la base de datos directamente
      
    } else {
        const pokemonDetails = response.data;
        return {
          name: pokemonDetails.name,
          hp: pokemonDetails.stats.find((stat) => stat.stat.name === 'hp').base_stat,
          attack: pokemonDetails.stats.find((stat) => stat.stat.name === 'attack').base_stat,
          defense: pokemonDetails.stats.find((stat) => stat.stat.name === 'defense').base_stat,
          speed: pokemonDetails.stats.find((stat) => stat.stat.name === 'speed').base_stat,
          height: pokemonDetails.height,
          weight: pokemonDetails.weight,
          created: false
        };
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  

const getAllPokemon = async () => {
    try {
      const allPokemon = await Pokemon.findAll();
  
      const axiosPokemonData = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
          return response.data;
        } catch (error) {
          throw new Error(error.message);
        }
      };
  
      const apiInfoPokemon = await axiosPokemonData();
  
      const cleanApiPokemon = await Promise.all(
        apiInfoPokemon.results.map(async (pokemon) => {
          try {
            const pokemonDetails = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              hp: pokemonDetails.data.stats.find((stats) => stats.stat.name === 'hp').base_stat,
              attack: pokemonDetails.data.stats.find((stats) => stats.stat.name === 'attack').base_stat,
              defense: pokemonDetails.data.stats.find((stats) => stats.stat.name === 'defense').base_stat,
              speed: pokemonDetails.data.stats.find((stats) => stats.stat.name === 'speed').base_stat,
              height: pokemonDetails.data.height,
              weight: pokemonDetails.data.weight,
              created: false
            };
          } catch (error) {
            throw new Error(error.message);
          }
        })
      );
  
      return [...allPokemon, ...cleanApiPokemon];
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
module.exports = {createPokemonDB,getPokemonById,getAllPokemon,}