const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    userName: String
});

module.exports = mongoose.model('User', userShema);