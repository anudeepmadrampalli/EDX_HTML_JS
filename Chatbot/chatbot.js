var builder = require('botbuilder');

var connector = new builder.ConsoleConnector.listen();
var bot = new builder.UniversalBot.ConsoleConnector(connector,function(session){

    session.send("you said %s",session.message.text());

});

