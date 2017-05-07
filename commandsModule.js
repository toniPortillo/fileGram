const fs = require('fs');

let commands = {
  cdHomeFunction: function (callback) {
    dir = '/home';
    fs.readdir(dir, function (error, data) {
      if(error) {
        callback(error);
      }else {
        callback(null, data);
      }
    })
  },
  lsFunction: function (dir, callback) {
    fs.readdir(dir ,function (error, data) {
      if(error) {
        callback(error);
      }else {
        callback(null, data);
      }
    })
  },
  cdRute: function (dir, callback) {
    fs.readdir(dir, function (error, data) {
      if(error) {
        callback(error);
      }else {
        callback(null, data);
      }
    })
  },
  cdReturnBack: function (dir, callback) {
    fs.readdir(dir, function (error, data) {
      if(error) {
        callback(error);
      }else {
        callback(null, data);
      }
    })
  },
  getFile: function (dir, callback) {
    fs.readFile(dir, function (error, data) {
      if(error) {
        callback(error);
      }else {
        callback(null, data);
      }
    })
  }
}

module.exports = commands;
