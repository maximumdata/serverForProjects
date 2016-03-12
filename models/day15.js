var mongoose = require('../config/database');

var day15schema = mongoose.Schema({
  author: String,
  comment: String,
  date: Date
});

module.exports.Day15 = mongoose.model('day15', day15schema);
