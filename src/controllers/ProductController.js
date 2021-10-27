const mongoose = require('mongoose');
const product = mongoose.model('Product');

module.exports = {
    async Create(req,res){
        try{
            const payload = await product.create(req.body);
            return res.json(payload);
        }catch(err){
            console.log(err)
        }
    },

    async Remove(req,res){
        await product.findByIdAndRemove(req.params.id);
        return res.send();
    },

    async Update(req,res){
        try{
            const payload = await product.findByIdAndUpdate(req.params.id,req.body, { new : true });
            return res.json(payload);
        }catch(err){
            console.log('Error - ' + err)
        }
    },

    async getOne(req,res){
        try{
            const result = await product.findById(req.params.id);
            return res.json(result);
        }catch(err){
            console.log('Error - ' + err)
        }
    },
    
    async listAll(req,res){
        try{
            const {page} = req.query;
            const result = await product.paginate({},{page, limit : 2});
            return res.json(result);
        }catch(err){
            console.log('Error - ' + err)
        }
    },
    async listarProdutoPeloNome(req,res){
        const nomeProduto = req.params.nomeProduto;
        const response = await produto.findOne({"descricao" : nomeProduto});
        res.json(response);
    }
}