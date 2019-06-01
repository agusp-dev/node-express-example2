var express = require('express');
var bodyParser = require('body-parser');
var percentageController = require('./controllers/percentageController');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var port = '8080';

app.listen(port, function() {
    console.log("Listening in port " + port);
});

app.get('/percentage', percentageController.calculatePercentage);