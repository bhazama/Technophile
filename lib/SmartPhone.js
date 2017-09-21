var Phone = require("./Phone.js");
var Tablet = require("./Tablet.js");
var GameConsole = require("./GameConsole.js");
var extend = require("./extend.js");

function SmartPhone(phoneNumber){
  Phone.call(this, phoneNumber);
  GameConsole.call(this, "Smart Phone");
}




module.exports = SmartPhone;