var mongoose = require('../config/database');

var day8Schema = mongoose.Schema({
  _id: Number,
  size: Number,
  date: Date
});

module.exports.day8 = mongoose.model('day8', day8Schema);
