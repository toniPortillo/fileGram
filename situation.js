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
        let format;

        if(count[0] === ''){
          return format =  situation + '/' + count[1];
        }else {
          return situation = situation + '/' + command;
        }
    break;
  }
}
