const express = require('express')
const router = express.Router()

// GET A DATE
router.get('/', (req, res) => {
  res.send('date')  
})

module.exports = router