var telegramApi = require('node-telegram-bot-api');
var token = '';
var ls = require('./lsFunction.js');
var cd = require('./cdHomeFunction.js');

var bot = new telegramApi(token, {polling: true});
bot.on('text', function (msg) {
  console.log(msg.text);
  var chatId = msg.chat.id;
  console.log(chatId);
  var instruction = msg.text;

  switch(instruction) {
    case 'cd':
      cd(function(error, data) {
        if(error) {
          console.error('error', error);
        }

        data.forEach(function(file) {
          bot.sendMessage(chatId, file);
        })
      })
    default:
      ls(msg.campito, function(error, data) {
        if(error) {
          console.error('error', error);
        }

        data.forEach(function(file) {
          bot.sendMessage(chatId, file);
        })
      })
  }
})
