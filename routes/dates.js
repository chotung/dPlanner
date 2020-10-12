const express = require('express')
const router = express.Router()
const Date = require('../models/Date')

// GET A DATE
router.get('/', async (req, res) => {
  try {
    const dates = await Date.find({})
    console.log(dates.length)
    if(dates.length === 0) {
      res.json({msg: 'there are no dates'})
    } else {
      res.json(dates)
    }
  } catch (error) {
    console.error({ msg: 'no dates'})
  }
})

// CREATE A NEW DATE?
router.post('/', async (req, res) => {
  const { name, activity, location, time, meta } = req.body
  try {
    const newDate = await new Date({
      name,
      activity,
      location,
      time,
      meta
    })
    newDate.save()
    res.json({msg: 'Created A New Date'})
  } catch (error) {
    console.error({ msg: 'could not create' })
  }
})
// ADMIN PURPOSES
// DELETE ALL DATES
router.delete('/delete', async (req, res) => {
  try {
    await Date.deleteMany({})
    res.send('deleted all')
  } catch (error) {
    console.error({msg: 'could not delete'})
  }
})


module.exports = router