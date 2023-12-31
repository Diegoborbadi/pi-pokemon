const { Router } = require('express');
const pokemonRouter = require("./pokemonRoutes")
const typeRouter = require("./typesRoutes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/pokemon',pokemonRouter)
router.use('/type',typeRouter)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
