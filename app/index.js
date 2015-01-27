const fs = require('fs');
const markdown = require('markdown').markdown;
const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/topics/:topic', function(req, res){
  try {
    var topic_doc = fs.readFileSync('./app/data/' + req.params.topic + '.md', 'utf8');
    var topic_data = markdown.toHTML(topic_doc);
  } catch(e) {
    console.log(e);
  }
  res.render('topic', { topic_data: topic_data });
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/', function(req, res){
  var image_map = fs.readFileSync('app/views/map.html');
  var topics_data = fs.readdirSync('app/data/');
  var topics_names = [];
  for(var i=0; i<topics_data.length; i++){
    topics_names.push(topics_data[i].substr(0, topics_data[i].lastIndexOf('.')) || topics_data[i]);
  }
  res.render('index', { topics: topics_names, image_map: image_map });
});

module.exports = app;
