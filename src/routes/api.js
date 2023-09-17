const express = require('express');
const { createUser, addExercise } = require('../controllers/user.controller');
const { getUserExerciseLog } = require('../controllers/exerciceLog.controller');
const router = express.Router();

router.post('/api/users', createUser);
router.post('/api/users/:_id/exercises', addExercise);
router.get('/api/users/:_id/logs', getUserExerciseLog);

module.exports = router;
