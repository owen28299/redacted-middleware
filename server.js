var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var redaction = require('./redaction.js');
var replacement = require('./codes.js');

app.use(bodyParser.urlencoded({extended: true}));

app.post('/message', redaction(replacement), function(req,res){
    res.json({"message" : req.body.message});
  });

var server = app.listen(8003, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Redacted server listening at http://%s%s", host, port);
});