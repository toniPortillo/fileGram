const fs =  require('fs');
const path = require('path');

module.exports = function (dir, callback) {

  fs.readdir(dir, function (error, data) {
    if(error) {
      callback(error);
    }else {
      callback(null, data);
    }
  });

}
