const express = require('express');
const app = express();

//Swagger configurations BEGIN
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Node Swagger API',
            version: '1.0.0',
            description: 'Demonstrating how to describe a RESTful API with Swagger',
          },
          servers: ['localhost:3001'],
          basePath: '/',
    },
    // path to the API docs
    apis: ['server.js'],
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));
//Swagger Configurations END

/**
 * @swagger
 * /students:
 *   get:
 *     tags:
 *       - Students
 *     description: Returns a list of students
 *     produces:
 *       - application/json
 *       - application/xml
 *     parameters:
 *       - name: id
 *         description: Student's ID
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A list of students
 */
app.get('/students', (req,res) =>{
    res.send('results')
})

app.listen(3001);

console.log('server is running on port 3001');
