var wechat = require('wechat');
var http = require("http");
var express = require('express');

var app = express();

var config = {
  token: 'liqupan',
  appid: 'wxe77949eb2145b578',
  encodingAESKey: 'Vpza16RZnG7g4cCc3mtFcYIpX5ObfwYl7nDC9NRvIEJ'
};

app.use(express.query());
app.use('/wechat', wechat(config, function (req, res, next) {
  var message = req.weixin;
  if (message.FromUserName === '你好') {
    res.reply('我不好');
  } else {res.reply('不想理你')
  }
}));


app.get('/', function (req, res) {
  res.send('我不喜欢你');
});

app.get('/test', function (req, res) {
  res.send('test ok');
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("app running");
});