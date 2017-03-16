var Filter = require('./modulo.js');
var dir = process.argv[2];

Filter(dir, function(error, data) {
  if(error) {
      console.error('error', error);
  }

  data.forEach(function(file) {
    console.log(file);
  })

});
