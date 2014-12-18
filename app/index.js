const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index');
});

module.exports = app;
