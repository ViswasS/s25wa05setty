const express = require('express');
const router = express.Router();
let ratio = 0.75;
let acc = 1000;
router.get('/', (req, res) => {
    acc = acc * ratio;
    res.send(`Value is: ${acc}`); 
});

module.exports = router;