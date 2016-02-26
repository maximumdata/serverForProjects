var mongoose = require('mongoose');

//connection
mongoose.connect('mongodb://localhost/projects');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected ok to mongodb://localhost/projects!');
});

module.exports = mongoose;
