const mongoose = require('mongoose');
const user = mongoose.model('User');

module.exports = {
    async Create(req,res){
        try{
            const payload = await user.create(req.body);
            return res.json(payload);
        }catch(err){
            console.log(err)
        }
    },
    async login(req,res){
        try{
            const {email, senha} = req.body 
            const result = await user.findOne({email, senha});
            
            if(result)
                return res.status(200).json({'token': '#bemvindo#'});
            else
                return res.status(204).json({'msg': '#dddddd#'});
        }catch(err){
            console.log('Error - ' + err)
        }
    }
}