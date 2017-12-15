
//setup express
var express = require('express');
var app = express();

//setup bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//setup path
var path = require('path');

app.use(express.static(path.join(__dirname, './angular-app/dist')));

//start database
require('./server/config/mongoose.js');

//setup routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

//start port
app.listen(8000,function(){
    console.log('listening port 8000');
});