// /api routing
var express = require('express');
var apiRouter = express.Router();

// data
var friendsArray = require('../data/friends');

// routes
apiRouter.get('/friends', (req,res)=>{
    res.json(friendsArray);
});

// export the router
module.exports = apiRouter;