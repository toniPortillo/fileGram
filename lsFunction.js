var fs =  require('fs');
var path = require('path');

module.exports = function (dir, callback) {

  fs.readdir(dir, back);

  function back(error, data) {

    if(error) {
      callback(error);
    }

    callback(null, data);
  }
}
