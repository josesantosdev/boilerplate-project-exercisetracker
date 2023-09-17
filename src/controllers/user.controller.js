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
        const userId = req.params._id;
        const user = await User.findById(userId);
        const { description, duration, date } = req.body;

        const exercice = new Exercice({
            username: user.username,
            description,
            duration,
            date,
            _id: user._id,

        });

        await exercice.save();

        res.status(201).json({
            message: 'Exercise added successfully',
            exercice
        });

    } catch (err) {
        res.status(500).json({ message: 'Error adding exercise', error: err.message });

    }
};