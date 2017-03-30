var fs = require('fs');
var path = require('path');

module.exports = function (callback) {

  dir = '/home'
  fs.readdir(dir, function (error, data) {
    if(error) {
      callback(error);
    }else {
      callback(null, data);
    }
  });

}
