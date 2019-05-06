// /api routing
var express = require('express');
var apiRouter = express.Router();

// data
var friendsArray = require('../data/friends');

// routes
apiRouter.get('/friends', (req,res)=>{
    res.json(friendsArray);
});

apiRouter.post('/friends',(req,res)=>{
    friendsArray.push(req.body);
});


// export the router
module.exports = apiRouter;