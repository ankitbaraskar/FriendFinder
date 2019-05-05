var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
var apiRouter = require('./app/routing/apiRoutes');
app.use('/api',apiRouter);

var htmlRouter = require('./app/routing/htmlRoutes');
app.use('/',htmlRouter);


// listen on port defined above
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });