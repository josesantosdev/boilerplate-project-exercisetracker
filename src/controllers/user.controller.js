const User = require('../models/user.model');
const Exercice = require('../models/exercice.model');

module.exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({
            message: 'User created successfully',
            user
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

module.exports.addExercise = async (req, res) => {
    try {
        const exercice = new Exercice(req.body);
        await exercice.save();
        res.status(201).json({
            message: 'Exercice created successfully',
            exercice
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};