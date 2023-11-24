const {createPokemonDB} = require('../controllers/pokemonControllers')
const getPokemonHandler = (req,res) =>{
    res.status(200).send("todos los pokemones")
}

const getPokemonDetailHandler = (req,res) =>{
    res.status(200).send("datos especificos de cada pokemon")
}

const createPokemonHandler = async (req,res)=>{
    const {name,hp,attack,defense,speed,height,weight} = req.body
    try {
        const response = await createPokemonDB(name,hp,attack,defense,speed,height,weight)
        res.status(200).json(response)
    } catch (error) {
        
    }
}

module.exports = {
    getPokemonHandler,
    getPokemonDetailHandler,
    createPokemonHandler
}