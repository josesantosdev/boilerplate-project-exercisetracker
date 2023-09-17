const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    userName: String;
});

const User = mongoose.model('User', userShema);