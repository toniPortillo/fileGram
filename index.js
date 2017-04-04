const telegraf = require('telegraf');
const fs = require('fs');
const cd = require('./cdHomeFunction.js');
const ls = require('./lsFunction.js');
const cdReturnBack = require('./cdReturnBack.js');
const cdRute = require('./cdRute.js');
const getFile = require('./getFile');
const situation = require('./situation.js');

const TOKEN = process.env.TOKEN;
const bot = new telegraf(TOKEN);

let situationsValue = ' ';
let aux = ' ';
let cd_aux;
let count;
let countGet;

bot.on('text', function (ctx) {
  const instruction = ctx.update.message.text;
  count = instruction.split('cd /');
  countGet = instruction.split('get ');

  if(count[0] === '') {
    cd_aux = count[1];
    console.log(cd_aux);
  }else if(countGet[0] === '') {
    cd_aux = 'get';
    console.log(cd_aux);
  }else {
    cd_aux = instruction;
  }
  console.log(ctx.update.message.text);
  console.log(cd_aux);

  if(countGet[0] === '') {
    situationsValue = situation(ctx.update.message.text, aux);
  }else {
    situationsValue = situation(cd_aux, aux);
  }
  aux = situationsValue;
  console.log(aux);

  switch(cd_aux) {
    case 'cd':
      ctx.reply(situationsValue);
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
      ctx.reply(situationsValue);
      cdReturnBack(situationsValue, function(error, data) {
        if(error) {
          console.error('error', error);
        }else {
          data.forEach(function (file) {
            ctx.reply(file);
          });
        }
      });
    break;

    case 'get':
      ctx.reply(situationsValue);
      bot.telegram.sendDocument('11150012', {
        source: getFile(situationsValue)
      });

    break;

    case 'ls':
      ctx.reply(situationsValue);
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
      ctx.reply(situationsValue);
      cdRute(situationsValue, function (error, data) {
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
