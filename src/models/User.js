const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    senha : {
        type : String,
        required :true
    },
});

mongoose.model('User',UserSchema);