//Necessaria Instalação de Ambos os Diretorios através do npm
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json());//app.use serve para permitir o uso na aplicação
app.use(cors);

//iniciando o DB
mongoose.connect(//conneção com o mongo (ver como instalar-lo e inicia-lo - usado: ROBOT3T Ver visualmente)
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
);
requireDir('./src/models');//this require no get local where are file - não precisa referência o local explicitamente


//Primeira Rota
app.use('/api', require("./src/routes"));//recebe todas types de requisição - só permite acesso através do ...../api/example
app.listen(3001);//aplicação sendo ouvida na porta localhost:3001