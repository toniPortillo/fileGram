var telegramApi = require('node-telegram-bot-api');
var token = '330561933:AAGEzmwp1fh44Z6rPn2ZTtlOJeuaablAB2E';
var ls = require('./modulo.js');

var bot = new telegramApi(token, {polling: true});
bot.on('text', function (msg) {
  console.log(msg.text);
  var chatId = msg.chat.id;
  console.log(chatId);
  if(msg.text === 'cd'){
    msg.text = '/home';
  }
  ls(msg.text, function(error, data) {
    if(error) {
        console.error('error', error);
    }

    data.forEach(function(file) {
      bot.sendMessage(chatId, file);
    })
  })
})
