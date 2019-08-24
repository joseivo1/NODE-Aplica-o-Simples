//TESTANDO COM O INSOMNNIA - software

const express = require('express');
const routes = express.Router();//rotas da aplicação - acesso

const ProductController = require('./controllers/ProductController');//importa os métodos usados abaixo como .show etc...

//esse .how,.index.store é somente o métodos que estou usando da classes productcontroller
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

//exporta os métodos e acessos acima para a aplicação principal
module.exports = routes;