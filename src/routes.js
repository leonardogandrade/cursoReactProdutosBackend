const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');

//ListAll products
routes.get('/products',ProductController.listAll);
//Create a product
routes.post('/products',ProductController.Create);
//Get one product by ID
routes.get('/products/:id',ProductController.getOne);
//Update product
routes.put('/products/:id', ProductController.Update);
//Remove product by ID
routes.delete('/products/:id',ProductController.Remove);

routes.get('/produtos_nome/:nomeProduto',ProductController.listarProdutoPeloNome);

routes.post('/login', UserController.login);
routes.post('/signout', UserController.Create);

module.exports = routes