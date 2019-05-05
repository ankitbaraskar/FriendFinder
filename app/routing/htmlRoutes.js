var express = require('express');
var path = require('path');

var htmlRouter = express.Router();

htmlRouter.get('/survey',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/survey.html'));
});

htmlRouter.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/home.html'));
});

module.exports = htmlRouter;