const express = require('express');
router = express.Router();

router.post('/api/users', function(req, res) {
    res.status(200);
});


module.exports = router;