var express = require('express'),
    path = require('path'),
    http = require('http'),
    app = express(),
    day8 = require('./routes/day8'),
    day15 = require('./routes/day15');

app.set('port', 7080);

app.use('/day8/', day8);
app.use('/day15/', day15);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var server = http.createServer(app);
server.listen(7080);
