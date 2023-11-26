const {createPokemonDB,getPokemonById,getAllPokemon} = require('../controllers/pokemonControllers')



const getPokemonHandler = async (req,res) =>{
    try {
        const response = await getAllPokemon()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getPokemonDetailHandler = async (req,res) =>{
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api"
    try {
        const response = await getPokemonById(id,source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createPokemonHandler = async (req,res)=>{
    const {name,hp,attack,defense,speed,height,weight} = req.body
    try {
        const response = await createPokemonDB(name,hp,attack,defense,speed,height,weight)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};
module.exports = {
    getPokemonHandler,
    getPokemonDetailHandler,
    createPokemonHandler
}