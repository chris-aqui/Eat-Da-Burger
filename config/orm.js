// Import MySQL connection.
const connection = require("../config/connection.js");

//  orm. all get all data
let orm = {
  all: function(tableInput, cb){
    // create a selection quwey that selects everything from what every the tableinput is
    connection.query('SELECT * FROM '+tableInput+';', function(err,result){
      // uses a callbac to pass the result to  the model
      if(err) throw err;
      cb(result);
    })
  },
  update: function(tableinput, condition, cb){
    // create a selection quwey that updates
    //  set the devuor boolean to true where the id is the same
    connection.query('UPDATE '+tableinput+' SET devoured=true WHERE id='+condition+';', function(err,result){
      if(err) throw err;
      cb(result);
    })
  }
}


//  orm. create to make new data
//  orm. update will updated data in


//  ..

// Export the orm object for the model (burger.js).
module.exports = orm;