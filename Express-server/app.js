var cors = require('cors');
var express = require('express');
var indexRouter = require('./routes/index');
var app = express();

app.use(cors());
app.use(express.json());
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// error handler
app.listen(8082,()=>{console.log("Server is ON")});
//postgres connection
module.exports = app;

