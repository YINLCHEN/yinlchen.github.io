const express = require('express');
const path = require('path');
const app = express();
var mongoose = require('mongoose');

app.use(express.static('build'));

app.get('/', function (req, res) {
    res.sendFile(path.join('index.html'));
});

//DB Server
//Schema
//Portfolio
var Schema = mongoose.Schema;
var portfolioSchema = new Schema({
    author: String,
    image: String,
    title:  String,
    body:   String,
    link: String,
    date: { type: Date, default: Date.now },
    hidden: Boolean,
});

//Resume
var WorkNestedSchema = new Schema({
    WorkTime: String,
    Company: String,
    Describe: String
});
var ProjectNestedSchema = new Schema({
    Title: String,
    Describe: String
});
var SkillNestedSchema = new Schema({
    Title: String,
    Image: String,
    Describe: String
});
var resumeSchema = new Schema({
    Author: String,
    About: String,
    WorkExperience:  [WorkNestedSchema],
    ProjectExperience:  [ProjectNestedSchema],
    Skill: [SkillNestedSchema],
    Date: { type: Date, default: Date.now }
});

//Config
var configSchema = new Schema({
    Author: String,
    Background: Number,
    WelcomeMessage: [String]
});

//Model
var Portfolio = mongoose.model('Portfolio', portfolioSchema);
var Resume = mongoose.model('Resume', resumeSchema);
var Config = mongoose.model('Config', configSchema);

//ODM
var portfolio = new Portfolio({
    author: 'YINLCHEN',
    image: '',
    title: 'titleTest',
    body: 'bodyTest',
    link: '',
    hidden: false
})

var resume = new Resume({
    Author: 'YINLCHEN',
    About: 'about',
    WorkExperience:  [{
        WorkTime: '2016',
        Company: 'ooo',
        Describe: 'xxx',
        Image: ''}
    ],
    ProjectExperience:  [{
        Title: 'hey',
        Describe: 'work'
    }],
    Skill: [{
        Title: 'front',
        Image: 'name',
        Describe: 'href'
    }]
})

var config = new Config({
    Author: 'YINLCHEN',
    Background: 1,
    WelcomeMessage: ['Hej!', 'こんにちは!', 'Bonjour!', '三碗豬腳']
})

/*
//Save
portfolio.save(function (err) {
    if (err){
        console.log ('Error on save!')
    }
    else{
        console.log ('Save Success!')
    }
});
config.save(function (err) {
    if (err){
        console.log ('Error on save!')
    }
    else{
        console.log ('Save Success!')
    }
});
*/

app.get('/index', function(req, res) {
    Config.find({}).exec(function(err, config) {
        var map = {};
    
        config.forEach(function(config) {
            map[config._id] = config;
        });
  
        if(err){
            res.send(err);
            }
        res.json(map);
    });
});

app.get('/portfolio', function(req, res) {
    Portfolio.find({}).sort({"date":1}).exec(function(err, portfolios) {
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

app.get('/resume', function(req, res) {
    Resume.find({}).sort({"date":1}).exec(function(err, resume) {
        var map = {};
    
        resume.forEach(function(resume) {
            map[resume._id] = resume;
        });
  
        if(err){
            res.send(err);
            }
        res.json(map);
    });
});

var uri = process.env.MONGOLAB_URI;
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