const express = require('express');
const router = express.Router();
const Date = require('../models/Date');

// GET A DATES
router.get('/', async (req, res) => {
  try {
    const dates = await Date.find({});
    if (dates.length === 0) {
      res.json({ msg: 'there are no dates' });
    } else {
      res.json(dates);
    }
  } catch (error) {
    console.error({ msg: 'no dates' });
  }
});
// GET A SINGLE DATE
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const singleDate = await Date.findById(id);
    res.json(singleDate);
  } catch (error) {
    console.error({ msg: 'no dates' });
  }
});

// CREATE A NEW DATE
router.post('/', async (req, res) => {
  const { name, partnerName, activity, location, time, meta } = req.body;
  try {
    const newDate = await new Date({
      name,
      partnerName,
      activity,
      location,
      time,
      meta,
    });
    newDate.save();
    res.json({ msg: 'Created A New Date' });
  } catch (error) {
    console.error({ msg: 'could not create' });
  }
});

// EDIT DATE
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, partnerName, activity, location, time, meta } = req.body;
  const updates = {
    name,
    partnerName,
    activity,
    location,
    time,
    meta,
  };
  try {
    const singleDate = await Date.findByIdAndUpdate(id, updates);
    res.json(singleDate);
  } catch (error) {
    console.error({ msg: 'no dates' });
  }
});
// DELETE ONE DATE
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Date.findByIdAndDelete(id);
    res.json({ msg: 'Deleted Dated' });
  } catch (error) {
    console.error({ msg: 'could not delete' });
  }
});

// ADMIN PURPOSES
// DELETE ALL DATES
router.delete('/delete', async (req, res) => {
  try {
    await Date.deleteMany({});
    res.send('deleted all');
  } catch (error) {
    console.error({ msg: 'could not delete' });
  }
});

module.exports = router;
