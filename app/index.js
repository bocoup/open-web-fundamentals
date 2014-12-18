const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('Welcome to Open Web Fundamentals');
});

module.exports = app;
