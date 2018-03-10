const express = require('express');
const path = require('path');
const app = express();
var mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//DB Server
//Schema
var Schema = mongoose.Schema;
var portfolioSchema = new Schema({
    author: String,
    title:  String,
    body:   String,
    date: { type: Date, default: Date.now },
    hidden: Boolean,
});

//Model
var Portfolio = mongoose.model('Portfolio', portfolioSchema);

//ODM
var portfolio = new Portfolio({
    author: 'YINLCHEN',
    title: 'titleTest',
    body: 'bodyTest',
    hidden: false
})

//Save
portfolio.save(function (err) {
    if (err){
        console.log ('Error on save!')
    }
    else{
        console.log ('Save Success!')
    }
});

app.get('/portfolio', function(req, res) {
    Portfolio.find({}, function(err, portfolios) {
        var map = {};
    
        portfolios.forEach(function(portfolio) {
            map[portfolio._id] = portfolio;
        });
  
        if(err){
            res.send(err);
            }
        res.json(map);
    });
});

var uri = 'mongodb://custom:!QAZ2wsx@ds153958.mlab.com:53958/heroku_8n50nr6t'
mongoose.connect(uri, function(err, db){
    if(err){
        console.log('Unable to connect to the mongoDB server.', err);
    }
    else{
        console.log('Connection established!', uri);
    }
});

var port = process.env.PORT || 3001;
app.listen(port, "0.0.0.0");