'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
    res.render('index');
  });

app.get('/about', function(req, res){
      res.render('about');
    });

app.get('/music', function(req, res){
    res.render('music');
  });

  app.get('/tours', function(req, res){
      res.render('tours');
    });

    app.listen(4001, function(){
        console.log('Express.js is listening!');
      });

