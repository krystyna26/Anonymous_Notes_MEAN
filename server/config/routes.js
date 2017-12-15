
var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var path = require('path');

var process = require('../controllers/process.js');

module.exports = function(app){
    app.get('/show', function(req,res){
        process.show(req, res);
    })

    app.post('/add/:message', function(req, res){
        process.add(req, res);
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}
