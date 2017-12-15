var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    message: String
}, { Timestamp: true });

var Note = mongoose.model('Note', NoteSchema);