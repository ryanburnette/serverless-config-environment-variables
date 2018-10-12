'use strict';

module.exports.hello = function (event,context,callback) {
  var response = {
    statusCode: 200,
    body: JSON.stringify({
      env: process.env,
      input: event
    })
  };

  callback(null,response);
};
