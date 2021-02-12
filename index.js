const express = require('express');
const bodyParser = require('body-parser');
let path = require('path');
let cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const adress = require('./Router/AdressRouter');
const contact = require('./Router/ContactRouter');
const rating = require('./Router/RatingRouter');
const dayshour = require('./Router/DaysHoursRouter');
const dayofweek = require('./Router/DaysOfWeekRouter');
const provider = require('./Router/ProviderRouter');
//Swagger Configuration
const swaggerJsonDoc = require('swagger-jsdoc')	
const swaggerUI = require('swagger-ui-express')

const swaggerOptions = {	
  	swaggerDefinition: {		
      	info: {			
            title: "PROVIDER CRUD",		
            description: "A provider is a person who can repair some things roadside or domestic",		
            servers: ["http://localhost:3000"],
            version: '1.0.0'
            }            
    },
    
            apis:['./Router/*.js']   
  }  
  
const swaggerDocs = swaggerJsonDoc(swaggerOptions)	
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))


app.use('/providers',provider);
/*app.use('/adresses/',adress);
app.use('/contacts/',contact);
app.use('/ratings/',rating);
app.use('/dayofweeks/',dayofweek);
app.use('/dayshours/',dayshour);*/

app.use(cors((x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader())));
app.use(express.static(path.join(__dirname, 'dist/frontend')));
app.use('/', express.static(path.join(__dirname, 'dist/frontend')));

// Set listen port
let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
});

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nihed:mongodb@cluster0.7qcvw.mongodb.net/produitdb?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

