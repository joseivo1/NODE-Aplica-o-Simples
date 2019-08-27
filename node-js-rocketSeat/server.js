const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json());

//iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);
requireDir('./src/models');//this require no get local where are file


//Primeira Rota
app.use('/api', require("./src/routes"));//recebe todas types de requisição
app.listen(3001);