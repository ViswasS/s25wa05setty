const express = require('express');
const router = express.Router();

let ratio = 0.75;
let acc = 1000;

router.get('/', (req, res) => {
    acc = acc * ratio; // Multiply acc by ratio
    res.send(`Value is: ${acc}`); // Display the updated acc value
});

module.exports = router;