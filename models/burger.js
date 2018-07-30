// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
  //  ...
  all: function(cb){
    // calling orm all
    // insert burgers as the tableinput
    orm.all('burgers', function (res){
      cb(res);
    });
  }
}


// Export the database functions for the controller (controller.js).
module.exports = burger;
