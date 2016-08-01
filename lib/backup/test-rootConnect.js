var io       = require('socket.io-client');
var events   = require("../events.js");
var EVENTS   = new events.EVENTS();
var isHttps  = true;
var userSocket;
var userServer;
var userInfo;

var localUrl;
var serverUrl;
var port;
var curUrl;
var rootSocket;

var connectServer = function (reqData) {
  if (true === isHttps) {
  	localUrl   = 'https://localhost';
  	serverUrl  = 'https://172.1.128.169';
  	port       = 8000;
  	curUrl     = serverUrl + ':' + port.toString();
  	rootSocket = io.connect(curUrl,{secure:true});
  } else {
  	localUrl   = 'http://localhost';
    serverUrl  = 'http://172.1.128.169';
    curUrl     = localUrl;
  	rootSocket = io.connect(curUrl);
  }
};

connectServer({});

userInfo                = {};
userInfo.UserID         = "admin"
userInfo.Password       = "admin"
userInfo.VersionID      = "2.0.0.0"
loginReqField1           = {}
loginReqField1.reqObject = userInfo
loginReqField1.RequestId = 1

rootSocket.on('connect', function(errorObj){
  console.log ("rootSocket connect!");
  rootSocket.emit(EVENTS.SocketIONewUserCome, userInfo);
});

rootSocket.on(EVENTS.SocketIONewUserReady, function(data){

    console.log("\nClient: new user " + userInfo.UserID + " ready!");
  	userSocket = io.connect(curUrl + '/' + userInfo.UserID);

    userSocket.on(EVENTS.SocketIONewUserConnectComplete, function(data){
       console.log("Client: " + userInfo.UserID + "  connect completed!");
       userSocket.emit(EVENTS.RegisterFront, {});
	  });

    userSocket.on(EVENTS.FrontConnected, function(callbackData){
       console.log("Client: " + userInfo.UserID + "  FrontConnected!");
  	   userSocket.emit(EVENTS.ReqQrySysUserLoginTopic, loginReqField1);
    });
});

rootSocket.on('error', function(error){
  console.log ('error: ');
  console.log (error);
  console.log ("rootSocket error");
});

rootSocket.on('disconnect', function(){
  console.log ("rootSocket disconnect");
});

rootSocket.on('reconnect', function(Number){
  console.log('rootSocket reconnect, number: ' + Number);
});

rootSocket.on('reconnect_attempt', function(){
  console.log('rootSocket reconnect_attempt!');
});

rootSocket.on('reconnecting', function(Number){
  console.log('rootSocket reconnecting, number: ' + Number);
});

rootSocket.on('reconnect_error', function(Object){
  console.log('Object: ');
  console.log(Object);
  console.log('rootSocket reconnect_error!');
});

rootSocket.on('reconnect_failed', function(){
  console.log('rootSocket reconnect_failed!');
});

// rootSocket.io.on('connect', function(errorObj){
//   console.log ("rootSocket.io connect!");
// });
//
// rootSocket.io.on('connect_error', function(errorObj){
//   console.log ("rootSocket.io connect_error");
// });
//
// rootSocket.io.on('connect_timeout', function(errorObj){
//   console.log ("rootSocket.io connect_timeout");
// });
//
// rootSocket.io.on('reconnect', function(Number){
//   console.log('rootSocket.io reconnect, Number : ' + Number);
// });
//
// rootSocket.io.on('reconnect_attempt', function(){
//   console.log('rootSocket.io reconnect_attempt!');
// });
//
// rootSocket.io.on('reconnecting', function(Number){
//   console.log('rootSocket.io reconnecting, Number : ' + Number);
// });
//
// rootSocket.io.on('reconnect_error', function(Object){
//   console.log('Object: ');
//   console.log(Object);
//   console.log('rootSocket.io reconnect_error!');
// });
//
// rootSocket.io.on('reconnect_failed', function(){
//   console.log('rootSocket.io reconnect_failed!');
// });
