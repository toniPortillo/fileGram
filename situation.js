module.exports = function (command, situation) {
  if(command == 'ls') {
    if(situation == ' ') {
      return situation = '/home'
    }else {
      return situation;
    }
  }else if(command == 'cd') {
    return situation = '/home';
  }else {
    return situation = command;
  }
}
