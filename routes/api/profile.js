const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>res.send('profile response'))

module.exports = router;