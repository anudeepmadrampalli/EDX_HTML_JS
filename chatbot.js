var builder = require('botbuilder');
var restify = require('restify');

//Creating the server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
    console.log("Server %s listening at %s",server.name,server.url);
});

var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

server.post('/api/messages',connector.listen());

var bot = new builder.UniversalBot(connector,function(session){
    session.send("you said %s",session.message.text);
});