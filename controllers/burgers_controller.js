// all router
const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//  ..
router.get('/', function(req,res){
  // refer to bugers in models
  // then call the all
  // pass burger data into function to be passes to index
  burger.all(function(burger_data){
    console.log(burger_data);

    res.render('index');
  })
});

// Export routes for server.js to use.
module.exports = router;