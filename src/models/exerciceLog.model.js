const mongoose = require('mongoose');
const Exercice = require('./exercice.model')

const exerciseLogSchema = new mongoose.Schema({
    username: String,
    count: Number,
    _id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('ExerciseLog', exerciseLogSchema);