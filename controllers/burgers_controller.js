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

    res.render('index',{burger_data});
  });
});

router.put('/burgers/update', function(req,res){
  burger.update(req.body.burger_id, function(result){
    console.log(result);

    res.redirect('/')
  });
});

// Export routes for server.js to use.
module.exports = router;