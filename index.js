const telegraf = require('telegraf');
const cd = require('./cdHomeFunction.js');
const ls = require('./lsFunction.js');
const cdR = require('./cdReturnBack.js');
const situation = require('./situation.js');

const TOKEN = process.env.TOKEN;
const bot = new telegraf(TOKEN);

let situationsValue = ' ';
let aux = ' ';

bot.on('text', function (ctx) {

  const instruction = ctx.update.message.text;
  console.log(ctx.update.message.text);

  situationsValue = situation(ctx.update.message.text, aux);
  aux = situationsValue;

  switch(instruction) {
    case 'cd':
      cd(function (error, data){
        if(error){
          console.error('error', error);
        }else {
          data.forEach(function (file){
            ctx.reply(file);
          });
        }
      });

    break;

    case 'cd ..':
      cdR(situationsValue, function(error, data) {
        if(error) {
          console.error('error', error);
        }else {
          data.forEach(function (file) {
            ctx.reply(file);
          });
        }
      });

    break;

    case 'ls':
      ls(situationsValue, function (error, data) {
        if(error){
          console.error('error', error);
          ctx.reply('Path:' + situationsValue + ' incorrecto, introduzca cd u otra ruta para seguir');
        }else {
          data.forEach(function (file) {
            ctx.reply(file);
          });
        }
      });
    break;

    default:
      ls(ctx.update.message.text, function (error, data) {
        if(error){
          console.error('error', error);
          ctx.reply('Path:' + ctx.update.message.text + ' no existe');
        }else{
          data.forEach(function (file){
          ctx.reply(file);
          });
        }
      });

    break;
  }
})

bot.startPolling();
