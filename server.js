var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.post('/message', function(req,res){

});

var server = app.listen(8003, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Redacted server listening at http://%s%s", host, port);
});