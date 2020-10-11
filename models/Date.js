import mongoose from 'mongoose';
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
  name: String,
  activity: String,
  location: String,
  createdAt: { type: Date, default: Date.now },
  time: Date 
});
module.exports = date = mongoose.model('date', DateSchema)