var Phone = require("./Phone.js");
var Tablet = require("./Tablet.js");
var GameConsole = require("./GameConsole.js");
var WebBrowser = require("./WebBrowser");
var extend = require("./extend.js");

function SmartPhone(phoneNumber){
  Phone.call(this, phoneNumber);
  GameConsole.call(this, "Smart Phone");
}
SmartPhone.prototype = Object.create(Phone.prototype, {
  Constructor: {value : SmartPhone}
});
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);





module.exports = SmartPhone;