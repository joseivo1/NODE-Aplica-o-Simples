const mongoose = require("mongoose");

const Product = mongoose.model('Product');

module.exports = {
    //req todos os dados da requisição
    async index(req,res){
        const products = await Product.find();

        return res.json(products);//retorna o json do response
    },

    async store(req, res){
        const product = await Product.create()
    }
}