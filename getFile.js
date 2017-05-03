const fs = require('fs');
const path = require('path');

module.exports = function (file, callback) {
  fs.readFile(file, function (error, data) {
    if(error) {
      callback(error);
    }else {
      callback(null, data);
    }
  })
}
