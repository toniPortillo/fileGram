var fs = require('fs');
var path = require('path');

module.exports = function (callback) {

  dir = '/home'
  fs.readdir(dir, back);

  function back(error, data) {
      if(error) {
        callback(error);
      }

      callback(null, data);
  }
}
