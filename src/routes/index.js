const express = require('express');
const router = express.Router();

router.get('/views/', (req, res) => {
    res.render('/signin');
});

module.exports = router;