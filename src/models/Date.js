const mongoose = require('mongoose');
const { Schema } = mongoose;

const DateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  activity: String,
  location: String,
  createdAt: { type: Date, default: Date.now },
  time: String,
  partnerName: String,
  meta: {
    comments: String,
  },
});
module.exports = date = mongoose.model('date', DateSchema);
