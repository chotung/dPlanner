const express = require('express')
const router = express.Router()
const Date = require('../models/Date')

// GET A DATE
router.get('/', (req, res) => {
  const date = new Date()
  console.log(date)
  res.send('date')  
})

module.exports = router