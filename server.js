const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(express.json());
app.use(cors());

//MongooseDB
try{
    mongoose.set('useFindAndModify', false);
    mongoose.connect('mongodb://localhost:27017/dbapi',{ useNewUrlParser : true, useUnifiedTopology : true});
    console.log('mongoose connection was stabilished.')
}catch(err){
    console.log('Error - ' + err)
}

//Models
requireDir('./src/models');

//Routes
app.use('/api',require('./src/routes'));

app.listen(3001);

console.log('server is running on port 3001');
