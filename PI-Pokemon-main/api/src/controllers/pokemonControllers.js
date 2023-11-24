const {Pokemon} = require('../db')

const createPokemonDB =  async (name,hp,attack,defense,speed,height,weight) =>{
    return await Pokemon.create({name,hp,attack,defense,speed,height,weight})
}

module.exports = {createPokemonDB}