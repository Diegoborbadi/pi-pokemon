const getPokemonHandler = (req,res) =>{
    res.status(200).send("todos los pokemones")
}

const getPokemonDetailHandler = (req,res) =>{
    res.status(200).send("datos especificos de cada pokemon")
}

const createPokemonHandler = (req,res)=>{
    res.status(200).send("nuevo poke")
}

module.exports = {
    getPokemonHandler,
    getPokemonDetailHandler,
    createPokemonHandler
}