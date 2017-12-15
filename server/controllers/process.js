
var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    show: function(req, res){
        Note.find({}, function (err, notes){
            if (err){
                console.log(err)
            }else{
                console.log("notes from process.js", notes);
                res.json(notes);
            }
        })
    },
    add: function(req, res) {
        console.log(req.params.message);
        var note = new Note({message: req.params.message});
        note.save(function(err){
            if (err){
                console.log(err);
            } else {
                console.log('Note added');
                res.redirect('/');
            }
        })
    }
}