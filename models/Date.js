const mongoose = require('mongoose')
const { Schema } = mongoose;

const DateSchema = new Schema({
  // title: String, // String is shorthand for {type: String}
  // author: String,
  // body: String,
  // comments: [{ body: String, date: Date }],
  // date: { type: Date, default: Date.now },
  // hidden: Boolean,
  // meta: {
  //   votes: Number,
  //   favs: Number
  // },
  name: {
    type: String,
    required: true
  },
  activity: String,
  location: String,
  createdAt: { type: Date, default: Date.now },
  time: Date,
  meta: {
    comments: String
  } 
});
module.exports = date = mongoose.model('date', DateSchema)