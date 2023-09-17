const ExerciseLog = require('../models/exerciceLog.model');
const User = require('../models/user.model');

module.exports.getUserExerciseLog = async (req, res) => {
    try {
        const userId = req.params._id;
        const { from, to, limit } = req.query;

        const user = await User.findById(userId);
        const query = { username: user.userName };

        if (from && to) {
            query.date = { $gte: new Date(from), $lte: new Date(to) };
        } else if (from) {
            query.date = { $gte: new Date(from) };
        } else if (to) {
            query.date = { $lte: new Date(to) };
        }

        let logQuery = ExerciseLog.find(query);

        if (limit) {
            logQuery = logQuery.limit(parseInt(limit));
        }

        const log = await logQuery.exec();

        res.status(200).json(log);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching exercise log', error: err.message });
    }
};
