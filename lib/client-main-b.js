// Created by li.shengze on 2016/3/8.
// 客户端通信主程序, 用于创建子进程， 通过子进程与后台通信，并接受子进程传递的回调数据，再emit 出去。
var EventEmitter = require ('events').EventEmitter;
var fork         = require ('child_process').fork;
var path         = require ('path');
var childprocess = [];

var ClientMain = function () {
   this.emitter = new EventEmitter;
   this.childFilePath = path.join( __dirname, 'client-child-complete.js');
   this.childProcess = fork (this.childFilePath, ['Hello client-child!']);
   childprocess[this.childProcess.pid] = this.childProcess;

   this.RestartFunc = (function(_this){
     return function() {
       _this.childProcess = fork (_this.childFilePath, ['Hello client-child!']);
       delete childprocess[_this.childProcess.pid];
       childprocess[_this.childProcess.pid] = _this.childProcess;
     };
   }(this));

   this.childProcess.on ('message', (function(_this) {
     return function(data) {
       if (data.message === "Test Front!" || data.message === "RspQrySysUserLoginTopic CallbackData") {
         console.log (data);
       }
      _this.emitter.emit(data.message, data.callbackData);
    };
   })(this));

   this.childProcess.on('exit',  (function(_this) {
     return function() {
       _this.emitter.emit('childprocess exit', {});
     };
   })(this));

   this.emitter.on(EVENTS.SocketIONewUserCome,  (function(_this) {
     return function(reqData) {
       var data={};
       data.event = EVENTS.SocketIONewUserCome;
       data.reqField = reqData;
       console.log (data)
       _this.childProcess.send(data);
     };
   })(this));

};

var ExitFunc = function() {
  for (var pid in childprocess) {
    childprocess[pid].kill();
  }
};

process.on('uncaughtException', function(){
  ExitFunc();
});

process.on('exit', function(){
  ExitFunc();
});

module.exports = new ClientMain();
