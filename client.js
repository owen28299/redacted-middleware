'use strict';

var request = require('request');

request.post(
  {
    uri: "http://localhost:8003/message",
    form: {
      message: "I took a selfie with my bae next to a tardis. yolo!"
    }
  },
  function(error, response, body){
    console.log('response', response.body);
  }
);
