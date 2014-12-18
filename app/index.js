const fs = require('fs');
const yaml = require('js-yaml');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/topics/:topic', function(req, res){
  try {
    var topic_doc = fs.readFileSync('app/data/' + req.params.topic + '.yml', 'utf8');
    var topic_data = yaml.safeLoad(topic_doc);
    console.log(topic_data);
  } catch(e) {
    console.log(e);
  }
  res.render('topic', topic_data);
});

app.get('/', function(req, res){
  res.render('index');
});

module.exports = app;
