module.exports = function (command, situation) {
  if(command === 'cd') {
    return situation = '/home';
  }else if(command ==='cd ..') {
    if(situation == ' ' || situation == '/home') {
      return situation = '/home';
    }else {
      let count =  situation.split('/');
      let tam = situation.split('/').length;
      let format = '';
      for(let i = 0; i < tam-2; i++) {
        format += '/' + count[i+1];
      }
      return format;
    }
  }else if(command === 'ls'){
    if(situation == ' '){
      return situation = '/home'
    }else {
      return situation;
    }
  }else {
    return situation = command;
  }
}
