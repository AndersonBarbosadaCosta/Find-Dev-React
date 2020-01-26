const {Router} = require('express')
const routes = Router()
const DevController = require('../src/controllers/DevController')
const SearchController = require('../src/controllers/SearchController')
/**
 * Tipos de parametros
 * Query Params: req.query (Filtros, ordenação,paginação,...)
 * Router Params: req.params (identificar um recurso na alteração ou exclusão)
 * Body: req.body (dados para criação ou alteração de um registro)
 */
// routes.get('/',(req, res) =>{
//     res.json({"message":"ola"})
// })
routes.get('/devs',DevController.index)
routes.post('/devs',DevController.store)
routes.get('/search',SearchController.index)

module.exports = routes