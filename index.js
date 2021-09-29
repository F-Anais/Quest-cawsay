const userInfo = require('./userInformation')

var cowsay = require("cowsay");


console.log(cowsay.say({
    text : `I'm ${userInfo.name} from ${userInfo.campus}`
}));