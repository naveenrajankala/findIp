var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var Table = require('cli-table');
var t = require("./lib/findIp");
function main(){
  t('en0',function(err,localIp){
    request.get("http://ip.chinaz.com/?jdfwkey=9t6f31",function(err,res,body){
      $ = cheerio.load(body);
      var ip = $('.info3 strong').eq(0).text();
      var location = $('.info3 strong').eq(1).text();
      //callback($('.info3').text())
      var Table = require('cli-table');

      // instantiate
      var table = new Table({
          head: ['局域网IP','外网IP', '所在地区'] ,
          chars : {'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
           , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
           , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
           , 'right': '' , 'right-mid': '' , 'middle': ''   }
        });

      // table is an Array, so you can `push`, `unshift`, `splice` and friends
      table.push(
          [localIp,ip, location]
      );

      console.log(table.toString());
    })
  })
}
module.exports = main;