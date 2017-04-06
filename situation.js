const fs = require('fs');

module.exports = function (command, situation) {
  switch (command) {
    case 'cd':
      return situation = '/home';
    break;

    case 'cd ..':
      if(situation == ' ' || situation == '/home') {
        return situation = '/home';
      }else {
        let count = situation.split('/');
        let tam = situation.split('/').length;
        let format = '';
        for(let i = 0; i < tam - 2; i++) {
          format += '/' + count[i + 1];
        }
        return format;
      }
    break;

    case 'ls':
      if(situation == ' '){
        return situation = '/home';
      }else {
        return situation;
      }
    break;

    default:
      let count = command.split('get ');
      let tam = command.split('get ').length;
      let aux = '';
      let format;
      if(count[0] === ''){
        return aux =  situation + '/' + count[1];
      }else {
        format = situation.indexOf(command)
        for(let i = 0; i < 4 ; i++) {
          aux = aux + command[i];
        }
        if(aux === 'home') {
          count = command.split('home');
          return situation = '/home' + count[1];
        }else if(format != -1) {
          return situation;
        }else {
            return situation = situation + '/' + command;            
        }
      }
    break;
  }
}
