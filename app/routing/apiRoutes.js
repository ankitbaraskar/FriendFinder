// /api routing
var express = require('express');
var apiRouter = express.Router();

// data
var friendsArray = require('../data/friends');

// var scoreArray = friendsArray

// routes
apiRouter.get('/friends', (req,res)=>{
    res.json(friendsArray);
    
});

apiRouter.post('/friends',(req,res)=>{
    friendsArray.push(req.body);
    loopThroughAllFriends(friendsArray);

});

function sumOfDifferenceBetweenTwoArrays(arrayFromUser,arrayAlreadyExists){
    var sum=0;
    for(let i=0;i<arrayFromUser.length;i++){
        sum += Math.abs(parseInt(arrayFromUser[i])-parseInt(arrayAlreadyExists[i]));
    }
    return sum;
}

function loopThroughAllFriends(arrayOfAllFriends){
    var placeHolderArray =[];
    var indexOfLastElement = arrayOfAllFriends.length - 1;
    for(let j = 0;j<indexOfLastElement;j++){
        var object = {
            name:arrayOfAllFriends[j].name,
            photo:arrayOfAllFriends[j].photo,
            score: sumOfDifferenceBetweenTwoArrays(arrayOfAllFriends[indexOfLastElement].scores,arrayOfAllFriends[j].scores)
        };
        placeHolderArray.push(object);
    }

    var resultFriendObject = placeHolderArray.hasMin('score');
    console.log(resultFriendObject);
}

Array.prototype.hasMin = function(attrib) {
    return this.reduce(function(prev, curr){ 
        return prev[attrib] < curr[attrib] ? prev : curr; 
    });
 }

 

// export the router
module.exports = apiRouter;