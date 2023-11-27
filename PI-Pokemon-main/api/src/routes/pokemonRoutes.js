const {Router} = require("express")
const 
    {
    getPokemonHandler,
    getPokemonDetailHandler,
    createPokemonHandler,
    } = require("../handlers/pokemonHandlers")

const routerPokemon = Router();

routerPokemon.get("/",getPokemonHandler)
routerPokemon.get("/:id",getPokemonDetailHandler)
routerPokemon.post("/",createPokemonHandler)


module.exports = routerPokemon;