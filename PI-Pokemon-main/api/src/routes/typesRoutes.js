const {Router} = require("express")
const {getTypeHandler} = require('../handlers/typeHandler')

const routerTypes = Router()

routerTypes.get('/',getTypeHandler)

module.exports = routerTypes;