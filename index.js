const telegraf = require('telegraf');
const cd = require('./cdHomeFunction.js');
const ls = require('./lsFunction.js');

const TOKEN = process.env.TOKEN;
const bot = new telegraf(TOKEN);
let situation = ' ';

bot.on('text', function (ctx) {

  const instruction = ctx.update.message.text;
  console.log(ctx.update.message.text);

  if(ctx.update.message.text == 'ls') {
    if(situation == ' ') {
      situation = '/home'
    }else {
      console.log(situation);
    }
  }else if(ctx.update.message.text == 'cd') {
    situation = '/home';
  }else {
    situation = ctx.update.message.text;
  }

  switch(instruction) {
    case 'cd':
      cd(function (error, data){
        if(error){
          console.error('error', error);
        }

        data.forEach(function (file){
          ctx.reply(file);
        });
      });

    break;

    case 'ls':
      ls(situation, function (error, data){
        if(error){
          console.error('error', error);
        }

        data.forEach(function (file){
          ctx.reply(file);
        })
      });
    break;

    default:
      ls(ctx.update.message.text, function (error, data) {
        if(error){
          console.error('error', error);
        }

        data.forEach(function (file){
          ctx.reply(file);
        });
      });

    break;
  }
})

bot.startPolling();
