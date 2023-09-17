const mongoose = require('mongoose');

const exerciceSchema = mongoose.Schema({
    
    username: { type: mongoose.Schema.Types.String, ref:'User'},
    description: String,
    duration: Number,
    date: Date,
    _id: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
})

module.exports = mongoose.model('Exercice', exerciceSchema);