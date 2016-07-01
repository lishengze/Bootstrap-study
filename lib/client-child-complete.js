// Created by li.shengze on 2016/3/08.
var fs                  = require('fs');
var spi                 = require("./communication.js");
var events              = require("./events.js");
var EVENTS              = new events.EVENTS();
var SysUserApiStruct    = require("./SysUserApiStruct.js");
var io                  = require('socket.io-client');
var path                = require('path');
var myDate              = new Date();
var isHttps             = true;
var connectTimeLimit    = 10000;
var rootSocketStartTime = myDate.getTime();

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

// client-child-complete.txt 用来测试代码;
var fileName = path.join (__dirname, './client-child-complete.txt');
var fileData = "Hello Pid: " + process.pid + '\n';
fileData += "\nEnvironment Params: \n";
process.argv.forEach(function(val, index, array) {
  fileData += index + ': ' + val + '\n';
});

process.on('beforeExit', function(){
  var data = {};
  data.message = EVENTS.ChildProcessBeforeExit;
  data.callbackData = EVENTS.ChildProcessBeforeExit;
  process.send(data);
});

process.on('exit', function(){
  var data = {};
  data.message = EVENTS.ChildProcessExit;
  data.callbackData = EVENTS.ChildProcessExit;
  process.send(data);
});

process.on('uncaughtException', function(){
  var data = {};
  data.message = EVENTS.ChildProcessUncaughtException;
  data.callbackData = EVENTS.ChildProcessUncaughtException;
  process.send(data);
});

rootSocket.on('connect', function(){
  var data = {};
  data.message = EVENTS.RootSocketConnect;
  data.callbackData = EVENTS.RootSocketConnect;
  process.send(data);
});

rootSocket.on('error', function(error){
  var data = {};
  data.message = EVENTS.RootSocketConnectError;
  data.callbackData = error;
  process.send(data);
});

rootSocket.on('disconnect', function(){
  var data = {};
  data.message = EVENTS.RootSocketDisconnect;
  data.callbackData = EVENTS.RootSocketDisconnect;
  process.send(data);
});

rootSocket.on('reconnect', function(Number){
  var data = {};
  data.message = EVENTS.RootSocketReconnect;
  data.callbackData = Number;
  process.send(data);
});

rootSocket.on('reconnect_attempt', function(){
  var data = {};
  data.message = EVENTS.RootSocketReconnectAttempt;
  data.callbackData = EVENTS.RootSocketReconnectAttempt;
  process.send(data);
});

rootSocket.on('reconnecting', function(Number){
  var data = {};
  data.message = EVENTS.RootSocketReconnecting;
  data.callbackData = Number;
  process.send(data);
});

rootSocket.on('reconnect_error', function(Object){
  var data = {};
  data.message = EVENTS.RootSocketReconnectError;
  data.callbackData = Object;
  process.send(data);
});

rootSocket.on('reconnect_failed', function(){
  var data = {};
  data.message = EVENTS.RootSocketReconnectFailed;
  data.callbackData = EVENTS.RootSocketReconnectFailed;
  process.send(data);
});

var addNewUser = function (userinfo) {
    userInfo = userinfo;
    rootSocket.emit(EVENTS.NewUserCome, userinfo);
};

var TestAddNewUser = function () {
    var userinfo = {};
    userinfo           = new SysUserApiStruct.CShfeFtdcReqQrySysUserLoginField();
    userinfo.UserID    = "admin";
    userinfo.Password  = "admin";
    userinfo.VersionID = "2.0.0.0";
    addNewUser(userinfo);
};

var TestAddNewUserID_1 = function () {
    var userinfo = {};
    userinfo           = new SysUserApiStruct.CShfeFtdcReqQrySysUserLoginField();
    userinfo.UserID    = "NewUserID_1";
    userinfo.Password  = "1234567";
    userinfo.VersionID = "2.0.0.0";
    addNewUser(userinfo);
};

rootSocket.on("user reconnected", function(UserID) {
   fileData += "Client: " + UserID + " has already logged!\n";
});

rootSocket.on(EVENTS.NewUserReady, function(data){

    fileData +=  "Client: new user " + userInfo.UserID + " ready!\n";
  	userSocket = io.connect(curUrl + '/' + userInfo.UserID);

    userSocket.on(EVENTS.NewUserConnectComplete, function(data){
       fileData +=  "Client: " + userInfo.UserID + "  connect completed!\n";
       userSocket.emit(EVENTS.RegisterFront, {});
	  });

    userSocket.on("Test Front", function(data){
        var outputStr = "\n+++++++++  Communication FrontConnected! ++++++++\n";
    	  fileData += outputStr + "\n";

        var data = {};
        data.message = 'Test Front!';
        data.callbackData = outputStr;
		    process.send(data);

        fs.writeFile(fileName, fileData, function (err) {
          if (err) throw err;
        });
    });

	userSocket.on(EVENTS.FrontConnected, function(callbackData){
        var reqField = userInfo;
	      userSocket.emit(EVENTS.ReqQrySysUserLoginTopic, reqField);
	});

    userSocket.on(EVENTS.FrontDisConnected, function(callbackData){
        var data = {};
        data.message = EVENTS.FrontDisConnected;
        data.callbackData = callbackData;
		process.send(data);
	});

    userSocket.on(EVENTS.HeartBeatWarning, function(callbackData){
        var data = {};
        data.message = 	EVENTS.HeartBeatWarning;
        data.callbackData = callbackData;
		process.send(data);
	});

    userSocket.on(EVENTS.RspQryTopCpuInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryTopCpuInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnTopCpuInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnTopCpuInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryTopMemInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryTopMemInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnTopMemInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnTopMemInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryTopProcessInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryTopProcessInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnTopProcessInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnTopProcessInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryFileSystemInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryFileSystemInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnFileSystemInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnFileSystemInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetworkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetworkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetworkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetworkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryClientLoginTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryClientLoginTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryMonitorObjectTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryMonitorObjectTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnMonitorObjectTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnMonitorObjectTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryObjectRationalTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryObjectRationalTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnObjectRationalTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnObjectRationalTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySyslogInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySyslogInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnSyslogInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnSyslogInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySubscriberTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySubscriberTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryOidRelationTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryOidRelationTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnOidRelationTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnOidRelationTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryUserInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryUserInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnUserInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnUserInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryOnlineUserInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryOnlineUserInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnOnlineUserInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnOnlineUserInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryWarningEventTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryWarningEventTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnWarningEventTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnWarningEventTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryCPUUsageTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryCPUUsageTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnCPUUsageTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnCPUUsageTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryMemoryUsageTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryMemoryUsageTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnMemoryUsageTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnMemoryUsageTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryDiskUsageTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryDiskUsageTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnDiskUsageTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnDiskUsageTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryObjectAttrTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryObjectAttrTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnObjectAttrTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnObjectAttrTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryInvalidateOrderTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryInvalidateOrderTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnInvalidateOrderTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnInvalidateOrderTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryOrderStatusTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryOrderStatusTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnOrderStatusTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnOrderStatusTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryBargainOrderTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryBargainOrderTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnBargainOrderTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnBargainOrderTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryInstPropertyTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryInstPropertyTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnInstPropertyTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnInstPropertyTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryMarginRateTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryMarginRateTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnMarginRateTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnMarginRateTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryPriceLimitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryPriceLimitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnPriceLimitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnPriceLimitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryPartPosiLimitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryPartPosiLimitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnPartPosiLimitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnPartPosiLimitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryClientPosiLimitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryClientPosiLimitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnClientPosiLimitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnClientPosiLimitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySpecialPosiLimitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySpecialPosiLimitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnSpecialPosiLimitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnSpecialPosiLimitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryTransactionChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryTransactionChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnTransactionChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnTransactionChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryClientChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryClientChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnClientChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnClientChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryPartClientChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryPartClientChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnPartClientChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnPartClientChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryPosiLimitChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryPosiLimitChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnPosiLimitChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnPosiLimitChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryHedgeDetailChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryHedgeDetailChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnHedgeDetailChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnHedgeDetailChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryParticipantChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryParticipantChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnParticipantChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnParticipantChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryMarginRateChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryMarginRateChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnMarginRateChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnMarginRateChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryUserIpChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryUserIpChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnUserIpChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnUserIpChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryClientPosiLimitChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryClientPosiLimitChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnClientPosiLimitChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnClientPosiLimitChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySpecPosiLimitChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySpecPosiLimitChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnSpecPosiLimitChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnSpecPosiLimitChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryHistoryObjectAttrTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryHistoryObjectAttrTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnHistoryObjectAttrTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnHistoryObjectAttrTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryFrontInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryFrontInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnFrontInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnFrontInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySysUserLoginTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySysUserLoginTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySysUserLogoutTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySysUserLogoutTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySysUserPasswordUpdateTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySysUserPasswordUpdateTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySysUserRegisterTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySysUserRegisterTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySysUserDeleteTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySysUserDeleteTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryParticipantInitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryParticipantInitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnParticipantInitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnParticipantInitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryUserInitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryUserInitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnUserInitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnUserInitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryClientInitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryClientInitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnClientInitTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnClientInitTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryTradeLogTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryTradeLogTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnTradeLogTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnTradeLogTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryTradeUserLoginInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryTradeUserLoginInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnTradeUserLoginInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnTradeUserLoginInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryPartTradeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryPartTradeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryTradepeakTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryTradepeakTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnUpdateSysConfigTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnUpdateSysConfigTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnSysUser, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnSysUser;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnPriceLimitChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnPriceLimitChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryHistoryCpuInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryHistoryCpuInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryHistoryMemInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryHistoryMemInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryHistoryNetworkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryHistoryNetworkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryMonitorOnlineUser, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryMonitorOnlineUser;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryFrontStat, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryFrontStat;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnSysTimeSyncTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnSysTimeSyncTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnDataCenterChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnDataCenterChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryHistoryTradePeakTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryHistoryTradePeakTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnHistoryTradePeakTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnHistoryTradePeakTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySyslogEventTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySyslogEventTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnSyslogEventTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnSyslogEventTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryTradeDayChangeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryTradeDayChangeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryWebAppInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryWebAppInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnWebAppInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnWebAppInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryServletInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryServletInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnServletInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnServletInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryFileInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryFileInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnFileInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnFileInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySessionInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySessionInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnSessionInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnSessionInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryJDBCInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryJDBCInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnJDBCInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnJDBCInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryThreadInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryThreadInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnThreadInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnThreadInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryVMInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryVMInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnVMInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnVMInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryPropertyInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryPropertyInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnPropertyInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnPropertyInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryMemPoolInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryMemPoolInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnMemPoolInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnMemPoolInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryFileContentInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryFileContentInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnFileContentInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnFileContentInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryConnectionInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryConnectionInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnConnectionInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnConnectionInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryConnectorInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryConnectorInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnConnectorInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnConnectorInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryDBQueryTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryDBQueryTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnDBQueryTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnDBQueryTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryGeneralFieldTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryGeneralFieldTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnGeneralFieldTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnGeneralFieldTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryGetFileTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryGetFileTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryWarningQueryTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryWarningQueryTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnWarningQueryTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnWarningQueryTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnHostConfig, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnHostConfig;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryGeneralOperateTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryGeneralOperateTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnGeneralOperateTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnGeneralOperateTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetDeviceLinkedTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetDeviceLinkedTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetDeviceLinkedTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetDeviceLinkedTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryTradeUserLoginStatTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryTradeUserLoginStatTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryTradeFrontOrderRttStatTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryTradeFrontOrderRttStatTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnTradeFrontOrderRttStatTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnTradeFrontOrderRttStatTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryParticTradeOrderStatesTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryParticTradeOrderStatesTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnParticTradeOrderStatesTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnParticTradeOrderStatesTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryRouterInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryRouterInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnRouterInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnRouterInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryDiskIOTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryDiskIOTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnDiskIOTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnDiskIOTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryStatInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryStatInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnStatInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnStatInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryTradeOrderRttCutLineTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryTradeOrderRttCutLineTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnTradeOrderRttCutLineTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnTradeOrderRttCutLineTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryClientInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryClientInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnClientInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnClientInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryEventDescriptionTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryEventDescriptionTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnEventDescriptionTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnEventDescriptionTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryFrontUniqueIDTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryFrontUniqueIDTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnFrontUniqueIDTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnFrontUniqueIDTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetPartyLinkAddrChangeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetPartyLinkAddrChangeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetPartyLinkAddrChangeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetPartyLinkAddrChangeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetDelPartyLinkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetDelPartyLinkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetDelPartyLinkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetDelPartyLinkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryPerformanceTopTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryPerformanceTopTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnPerformanceTopTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnPerformanceTopTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryInstrumentStatusTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryInstrumentStatusTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnInstrumentStatusTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnInstrumentStatusTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryCurrTradingSegmentAttrTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryCurrTradingSegmentAttrTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnCurrTradingSegmentAttrTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnCurrTradingSegmentAttrTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetAreaTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetAreaTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetAreaTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetAreaTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetSubAreaTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetSubAreaTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetSubAreaTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetSubAreaTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetSubAreaIPTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetSubAreaIPTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetSubAreaIPTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetSubAreaIPTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetDeviceTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetDeviceTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetDeviceTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetDeviceTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetDeviceDetectTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetDeviceDetectTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetBuildingTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetBuildingTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetBuildingTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetBuildingTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetRoomTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetRoomTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetRoomTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetRoomTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetCabinetsTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetCabinetsTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetCabinetsTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetCabinetsTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetOIDTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetOIDTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetOIDTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetOIDTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetTimePolicyTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetTimePolicyTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetTimePolicyTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetTimePolicyTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetGatherTaskTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetGatherTaskTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetGatherTaskTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetGatherTaskTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetDeviceChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetDeviceChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetDeviceChgTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetDeviceChgTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetDeviceTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetDeviceTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetDeviceTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetDeviceTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetDeviceCategoryTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetDeviceCategoryTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetDeviceCategoryTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetDeviceCategoryTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetManufactoryTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetManufactoryTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetManufactoryTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetManufactoryTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetCommunityTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetCommunityTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetCommunityTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetCommunityTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetPortTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetPortTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetPortTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetPortTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetPartAccessSpotTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetPartAccessSpotTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetPartAccessSpotTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetPartAccessSpotTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetInterfaceTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetInterfaceTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetInterfaceTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetInterfaceTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetGeneralOIDTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetGeneralOIDTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetGeneralOIDTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetGeneralOIDTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorAttrScopeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorAttrScopeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorAttrScopeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorAttrScopeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorAttrTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorAttrTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorAttrTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorAttrTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorObjectAttrTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorObjectAttrTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorObjectAttrTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorObjectAttrTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetFuncAreaTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetFuncAreaTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetFuncAreaTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetFuncAreaTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorCommandTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorCommandTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorCommandTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorCommandTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorActionGroupTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorActionGroupTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorActionGroupTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorActionGroupTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorDeviceGroupTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorDeviceGroupTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorDeviceGroupTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorDeviceGroupTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorTaskInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTaskInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorTaskInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorTaskInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorTaskResultTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTaskResultTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorTaskResultTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorTaskResultTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorTaskObjectSetTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTaskObjectSetTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorTaskObjectSetTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorTaskObjectSetTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetPartyLinkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetPartyLinkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetPartyLinkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetPartyLinkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorActionAttrTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorActionAttrTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorActionAttrTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorActionAttrTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetModuleTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetModuleTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetModuleTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetModuleTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetEventExprTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetEventExprTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetEventExprTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetEventExprTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetEventTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetEventTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetEventTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetEventTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetSubEventTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetSubEventTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetSubEventTypeTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetSubEventTypeTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetEventLevelTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetEventLevelTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetEventLevelTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetEventLevelTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorTaskStatusResultTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTaskStatusResultTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorTaskStatusResultTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorTaskStatusResultTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetCfgFileTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetCfgFileTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetCfgFileTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetCfgFileTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorDeviceTaskTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorDeviceTaskTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorDeviceTaskTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorDeviceTaskTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMonitorTaskInstAttrsTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTaskInstAttrsTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMonitorTaskInstAttrsTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMonitorTaskInstAttrsTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryFileGeneralOperTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryFileGeneralOperTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnFileGeneralOperTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnFileGeneralOperTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetBaseLineTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetBaseLineTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetBaseLineTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetBaseLineTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetBaseLineTaskTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetBaseLineTaskTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetBaseLineTaskTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetBaseLineTaskTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetBaseLineResultTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetBaseLineResultTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetBaseLineResultTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetBaseLineResultTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetPartyLinkStatusInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetPartyLinkStatusInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetPartyLinkStatusInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetPartyLinkStatusInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetMemberSDHLineInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetMemberSDHLineInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetMemberSDHLineInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetMemberSDHLineInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetDDNLinkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetDDNLinkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetDDNLinkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetDDNLinkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetPseudMemberLinkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetPseudMemberLinkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetPseudMemberLinkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetPseudMemberLinkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryOuterDeviceInfTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryOuterDeviceInfTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetOuterDeviceInfTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetOuterDeviceInfTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetLocalPingResultInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetLocalPingResultInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetLocalPingResultInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetLocalPingResultInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetRomotePingResultInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetRomotePingResultInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetRomotePingResultInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetRomotePingResultInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnMonitorTopProcessInfo, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnMonitorTopProcessInfo;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQrySysInternalTopologyTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQrySysInternalTopologyTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnSysInternalTopologyTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnSysInternalTopologyTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryMemberLinkCostTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryMemberLinkCostTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnMemberLinkCostTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnMemberLinkCostTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetPartylinkMonthlyRentTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetPartylinkMonthlyRentTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetPartylinkMonthlyRentTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetPartylinkMonthlyRentTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RspQryNetNonPartyLinkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RspQryNetNonPartyLinkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.RtnNetNonPartyLinkInfoTopic, function(callbackData){
        var data = {};
        data.message = EVENTS.RtnNetNonPartyLinkInfoTopic;
        data.callbackData = callbackData;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryTopMemInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryTopMemInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryTopProcessInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryTopProcessInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryFileSystemInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryFileSystemInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetworkInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetworkInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryMonitorObjectTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryMonitorObjectTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryObjectRationalTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryObjectRationalTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySyslogInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySyslogInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySubscriberTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySubscriberTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryOidRelationTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryOidRelationTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryUserInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryUserInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryOnlineUserInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryOnlineUserInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryWarningEventTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryWarningEventTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryObjectAttrTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryObjectAttrTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryInvalidateOrderTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryInvalidateOrderTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryOrderStatusTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryOrderStatusTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryBargainOrderTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryBargainOrderTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryInstPropertyTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryInstPropertyTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryMarginRateTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryMarginRateTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryPriceLimitTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryPriceLimitTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryPartPosiLimitTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryPartPosiLimitTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryClientPosiLimitTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryClientPosiLimitTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySpecialPosiLimitTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySpecialPosiLimitTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryTransactionChgTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryTransactionChgTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryClientChgTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryClientChgTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryPartClientChgTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryPartClientChgTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryPosiLimitChgTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryPosiLimitChgTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryHedgeDetailChgTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryHedgeDetailChgTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryParticipantChgTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryParticipantChgTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryMarginRateChgTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryMarginRateChgTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryUserIpChgTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryUserIpChgTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryClientPosiLimitChgTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryClientPosiLimitChgTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySpecPosiLimitChgTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySpecPosiLimitChgTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryHistoryObjectAttrTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryHistoryObjectAttrTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryFrontInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryFrontInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySysUserLoginTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySysUserLoginTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySysUserLogoutTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySysUserLogoutTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySysUserPasswordUpdateTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySysUserPasswordUpdateTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySysUserRegisterTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySysUserRegisterTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySysUserDeleteTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySysUserDeleteTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryTradeLogTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryTradeLogTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryWarningEventUpdateTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryWarningEventUpdateTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryTradeUserLoginInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryTradeUserLoginInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryPartTradeTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryPartTradeTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryTradepeakTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryTradepeakTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryParticipantInitTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryParticipantInitTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryUserInitTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryUserInitTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryHistoryCpuInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryHistoryCpuInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryHistoryMemInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryHistoryMemInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryHistoryNetworkInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryHistoryNetworkInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryHistoryTradePeakTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryHistoryTradePeakTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySyslogEventTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySyslogEventTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySyslogEventSubcriberTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySyslogEventSubcriberTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryTomcatInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryTomcatInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryDBQueryTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryDBQueryTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryGetFileTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryGetFileTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQrySyslogEventUpdateTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQrySyslogEventUpdateTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryWarningQueryTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryWarningQueryTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryWebVisitTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryWebVisitTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryGeneralOperateTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryGeneralOperateTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetDeviceLinkedTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetDeviceLinkedTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryTradeUserLoginStatTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryTradeUserLoginStatTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryTradeFrontOrderRttStatTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryTradeFrontOrderRttStatTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryParticTradeOrderStatesTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryParticTradeOrderStatesTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryRouterInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryRouterInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryDiskIOTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryDiskIOTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryStatInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryStatInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryTradeOrderRttCutLineTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryTradeOrderRttCutLineTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryClientInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryClientInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryEventDescriptionTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryEventDescriptionTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryFrontUniqueIDTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryFrontUniqueIDTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetPartyLinkAddrChangeTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetPartyLinkAddrChangeTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetDelPartyLinkInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetDelPartyLinkInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryPerformanceTopTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryPerformanceTopTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryInstrumentStatusTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryInstrumentStatusTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryCurrTradingSegmentAttrTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryCurrTradingSegmentAttrTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryRealTimeNetObjectAttrTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryRealTimeNetObjectAttrTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetAreaTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetAreaTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetSubAreaTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetSubAreaTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetSubAreaIPTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetSubAreaIPTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetDeviceDetectTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetDeviceDetectTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetDeviceRequestTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetDeviceRequestTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetBuildingTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetBuildingTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetRoomTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetRoomTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetCabinetsTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetCabinetsTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetOIDTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetOIDTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetTimePolicyTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetTimePolicyTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetGatherTaskTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetGatherTaskTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetDeviceChgTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetDeviceChgTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetDeviceTypeTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetDeviceTypeTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetDeviceCategoryTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetDeviceCategoryTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetManufactoryTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetManufactoryTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetCommunityTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetCommunityTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetPortTypeTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetPortTypeTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetPartAccessSpotTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetPartAccessSpotTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetInterfaceTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetInterfaceTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetGeneralOIDTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetGeneralOIDTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetMonitorTypeTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetMonitorTypeTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetMonitorAttrScopeTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetMonitorAttrScopeTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetMonitorAttrTypeTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetMonitorAttrTypeTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetMonitorObjectAttrTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetMonitorObjectAttrTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetMonitorDeviceGroupTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetMonitorDeviceGroupTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetMonitorTaskInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetMonitorTaskInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetMonitorTaskResultTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetMonitorTaskResultTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetMonitorTaskObjectSetTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetMonitorTaskObjectSetTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetPartyLinkInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetPartyLinkInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetMonitorActionAttrTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetMonitorActionAttrTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetModuleTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetModuleTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetMonitorTaskStatusResultTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetMonitorTaskStatusResultTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetCfgFileTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetCfgFileTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetMonitorDeviceTaskTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetMonitorDeviceTaskTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryFileGeneralOperTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryFileGeneralOperTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetBaseLineTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetBaseLineTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetBaseLineResultTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetBaseLineResultTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetPartyLinkStatusInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetPartyLinkStatusInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetLocalPingResultInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetLocalPingResultInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetRomotePingResultInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetRomotePingResultInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

    userSocket.on(EVENTS.ReqQryNetNonPartyLinkInfoTopicFailed, function(flag){
        var data = {};
        data.message = EVENTS.ReqQryNetNonPartyLinkInfoTopicFailed;
        data.callbackData = flag;
        process.send(data);
    });

});
var ReqQryTopMemInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryTopMemInfoTopic, reqField);
};

var ReqQryTopProcessInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryTopProcessInfoTopic, reqField);
};

var ReqQryFileSystemInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryFileSystemInfoTopic, reqField);
};

var ReqQryNetworkInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetworkInfoTopic, reqField);
};

var ReqQryMonitorObjectTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryMonitorObjectTopic, reqField);
}

var ReqQryObjectRationalTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryObjectRationalTopic, reqField);
}

var ReqQrySyslogInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySyslogInfoTopic, reqField);
}

var ReqQrySubscriberTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySubscriberTopic, reqField);
}

var ReqQryOidRelationTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryOidRelationTopic, reqField);
}

var ReqQryUserInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryUserInfoTopic, reqField);
}

var ReqQryOnlineUserInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryOnlineUserInfoTopic, reqField);
}

var ReqQryWarningEventTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryWarningEventTopic, reqField);
}

var ReqQryObjectAttrTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryObjectAttrTopic, reqField);
}

var ReqQryInvalidateOrderTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryInvalidateOrderTopic, reqField);
}

var ReqQryOrderStatusTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryOrderStatusTopic, reqField);
}

var ReqQryBargainOrderTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryBargainOrderTopic, reqField);
}

var ReqQryInstPropertyTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryInstPropertyTopic, reqField);
}

var ReqQryMarginRateTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryMarginRateTopic, reqField);
}

var ReqQryPriceLimitTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryPriceLimitTopic, reqField);
}

var ReqQryPartPosiLimitTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryPartPosiLimitTopic, reqField);
}

var ReqQryClientPosiLimitTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryClientPosiLimitTopic, reqField);
}

var ReqQrySpecialPosiLimitTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySpecialPosiLimitTopic, reqField);
}

var ReqQryTransactionChgTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryTransactionChgTopic, reqField);
}

var ReqQryClientChgTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryClientChgTopic, reqField);
}

var ReqQryPartClientChgTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryPartClientChgTopic, reqField);
}

var ReqQryPosiLimitChgTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryPosiLimitChgTopic, reqField);
}

var ReqQryHedgeDetailChgTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryHedgeDetailChgTopic, reqField);
}

var ReqQryParticipantChgTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryParticipantChgTopic, reqField);
}

var ReqQryMarginRateChgTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryMarginRateChgTopic, reqField);
}

var ReqQryUserIpChgTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryUserIpChgTopic, reqField);
}

var ReqQryClientPosiLimitChgTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryClientPosiLimitChgTopic, reqField);
}

var ReqQrySpecPosiLimitChgTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySpecPosiLimitChgTopic, reqField);
}

var ReqQryHistoryObjectAttrTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryHistoryObjectAttrTopic, reqField);
}

var ReqQryFrontInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryFrontInfoTopic, reqField);
}

var ReqQrySysUserLoginTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySysUserLoginTopic, reqField);
}

var ReqQrySysUserLogoutTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySysUserLogoutTopic, reqField);
}

var ReqQrySysUserPasswordUpdateTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySysUserPasswordUpdateTopic, reqField);
}

var ReqQrySysUserRegisterTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySysUserRegisterTopic, reqField);
}

var ReqQrySysUserDeleteTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySysUserDeleteTopic, reqField);
}

var ReqQryTradeLogTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryTradeLogTopic, reqField);
}

var ReqQryWarningEventUpdateTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryWarningEventUpdateTopic, reqField);
}

var ReqQryTradeUserLoginInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryTradeUserLoginInfoTopic, reqField);
}

var ReqQryPartTradeTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryPartTradeTopic, reqField);
}

var ReqQryTradepeakTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryTradepeakTopic, reqField);
}

var ReqQryParticipantInitTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryParticipantInitTopic, reqField);
}

var ReqQryUserInitTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryUserInitTopic, reqField);
}

var ReqQryHistoryCpuInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryHistoryCpuInfoTopic, reqField);
}

var ReqQryHistoryMemInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryHistoryMemInfoTopic, reqField);
}

var ReqQryHistoryNetworkInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryHistoryNetworkInfoTopic, reqField);
}

var ReqQryHistoryTradePeakTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryHistoryTradePeakTopic, reqField);
}

var ReqQrySyslogEventTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySyslogEventTopic, reqField);
}

var ReqQrySyslogEventSubcriberTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySyslogEventSubcriberTopic, reqField);
}

var ReqQryTomcatInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryTomcatInfoTopic, reqField);
}

var ReqQryDBQueryTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryDBQueryTopic, reqField);
}

var ReqQryGetFileTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryGetFileTopic, reqField);
}

var ReqQrySyslogEventUpdateTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQrySyslogEventUpdateTopic, reqField);
}

var ReqQryWarningQueryTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryWarningQueryTopic, reqField);
}

var ReqQryWebVisitTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryWebVisitTopic, reqField);
}

var ReqQryGeneralOperateTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryGeneralOperateTopic, reqField);
}

var ReqQryNetDeviceLinkedTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetDeviceLinkedTopic, reqField);
}

var ReqQryTradeUserLoginStatTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryTradeUserLoginStatTopic, reqField);
}

var ReqQryTradeFrontOrderRttStatTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryTradeFrontOrderRttStatTopic, reqField);
}

var ReqQryParticTradeOrderStatesTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryParticTradeOrderStatesTopic, reqField);
}

var ReqQryRouterInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryRouterInfoTopic, reqField);
}

var ReqQryDiskIOTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryDiskIOTopic, reqField);
}

var ReqQryStatInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryStatInfoTopic, reqField);
}

var ReqQryTradeOrderRttCutLineTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryTradeOrderRttCutLineTopic, reqField);
}

var ReqQryClientInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryClientInfoTopic, reqField);
}

var ReqQryEventDescriptionTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryEventDescriptionTopic, reqField);
}

var ReqQryFrontUniqueIDTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryFrontUniqueIDTopic, reqField);
}

var ReqQryNetPartyLinkAddrChangeTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetPartyLinkAddrChangeTopic, reqField);
}

var ReqQryNetDelPartyLinkInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetDelPartyLinkInfoTopic, reqField);
}

var ReqQryPerformanceTopTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryPerformanceTopTopic, reqField);
}

var ReqQryInstrumentStatusTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryInstrumentStatusTopic, reqField);
}

var ReqQryCurrTradingSegmentAttrTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryCurrTradingSegmentAttrTopic, reqField);
}

var ReqQryRealTimeNetObjectAttrTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryRealTimeNetObjectAttrTopic, reqField);
}

var ReqQryNetAreaTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetAreaTopic, reqField);
}

var ReqQryNetSubAreaTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetSubAreaTopic, reqField);
}

var ReqQryNetSubAreaIPTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetSubAreaIPTopic, reqField);
}

var ReqQryNetDeviceDetectTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetDeviceDetectTopic, reqField);
}

var ReqQryNetDeviceRequestTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetDeviceRequestTopic, reqField);
}

var ReqQryNetBuildingTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetBuildingTopic, reqField);
}

var ReqQryNetRoomTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetRoomTopic, reqField);
}

var ReqQryNetCabinetsTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetCabinetsTopic, reqField);
}

var ReqQryNetOIDTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetOIDTopic, reqField);
}

var ReqQryNetTimePolicyTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetTimePolicyTopic, reqField);
}

var ReqQryNetGatherTaskTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetGatherTaskTopic, reqField);
}

var ReqQryNetDeviceChgTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetDeviceChgTopic, reqField);
}

var ReqQryNetDeviceTypeTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetDeviceTypeTopic, reqField);
}

var ReqQryNetDeviceCategoryTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetDeviceCategoryTopic, reqField);
}

var ReqQryNetManufactoryTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetManufactoryTopic, reqField);
}

var ReqQryNetCommunityTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetCommunityTopic, reqField);
}

var ReqQryNetPortTypeTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetPortTypeTopic, reqField);
}

var ReqQryNetPartAccessSpotTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetPartAccessSpotTopic, reqField);
}

var ReqQryNetInterfaceTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetInterfaceTopic, reqField);
}

var ReqQryNetGeneralOIDTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetGeneralOIDTopic, reqField);
}

var ReqQryNetMonitorTypeTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetMonitorTypeTopic, reqField);
}

var ReqQryNetMonitorAttrScopeTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetMonitorAttrScopeTopic, reqField);
}

var ReqQryNetMonitorAttrTypeTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetMonitorAttrTypeTopic, reqField);
}

var ReqQryNetMonitorObjectAttrTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetMonitorObjectAttrTopic, reqField);
}

var ReqQryNetMonitorDeviceGroupTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetMonitorDeviceGroupTopic, reqField);
}

var ReqQryNetMonitorTaskInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetMonitorTaskInfoTopic, reqField);
}

var ReqQryNetMonitorTaskResultTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetMonitorTaskResultTopic, reqField);
}

var ReqQryNetMonitorTaskObjectSetTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetMonitorTaskObjectSetTopic, reqField);
}

var ReqQryNetPartyLinkInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetPartyLinkInfoTopic, reqField);
}

var ReqQryNetMonitorActionAttrTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetMonitorActionAttrTopic, reqField);
}

var ReqQryNetModuleTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetModuleTopic, reqField);
}

var ReqQryNetMonitorTaskStatusResultTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetMonitorTaskStatusResultTopic, reqField);
}

var ReqQryNetCfgFileTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetCfgFileTopic, reqField);
}

var ReqQryNetMonitorDeviceTaskTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetMonitorDeviceTaskTopic, reqField);
}

var ReqQryFileGeneralOperTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryFileGeneralOperTopic, reqField);
}

var ReqQryNetBaseLineTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetBaseLineTopic, reqField);
}

var ReqQryNetBaseLineResultTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetBaseLineResultTopic, reqField);
}

var ReqQryNetPartyLinkStatusInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetPartyLinkStatusInfoTopic, reqField);
}

var ReqQryNetLocalPingResultInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetLocalPingResultInfoTopic, reqField);
}

var ReqQryNetRomotePingResultInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetRomotePingResultInfoTopic, reqField);
}

var ReqQryNetNonPartyLinkInfoTopic = function (reqField) {
    userSocket.emit(EVENTS.ReqQryNetNonPartyLinkInfoTopic, reqField);
}


var ReqFunc = [];

ReqFunc[EVENTS.ReqQryTopMemInfoTopic] = ReqQryTopMemInfoTopic;

ReqFunc[EVENTS.ReqQryTopProcessInfoTopic] = ReqQryTopProcessInfoTopic;

ReqFunc[EVENTS.ReqQryFileSystemInfoTopic] = ReqQryFileSystemInfoTopic;

ReqFunc[EVENTS.ReqQryNetworkInfoTopic] = ReqQryNetworkInfoTopic;

ReqFunc[EVENTS.ReqQryMonitorObjectTopic] = ReqQryMonitorObjectTopic;

ReqFunc[EVENTS.ReqQryObjectRationalTopic] = ReqQryObjectRationalTopic;

ReqFunc[EVENTS.ReqQrySyslogInfoTopic] = ReqQrySyslogInfoTopic;

ReqFunc[EVENTS.ReqQrySubscriberTopic] = ReqQrySubscriberTopic;

ReqFunc[EVENTS.ReqQryOidRelationTopic] = ReqQryOidRelationTopic;

ReqFunc[EVENTS.ReqQryUserInfoTopic] = ReqQryUserInfoTopic;

ReqFunc[EVENTS.ReqQryOnlineUserInfoTopic] = ReqQryOnlineUserInfoTopic;

ReqFunc[EVENTS.ReqQryWarningEventTopic] = ReqQryWarningEventTopic;

ReqFunc[EVENTS.ReqQryObjectAttrTopic] = ReqQryObjectAttrTopic;

ReqFunc[EVENTS.ReqQryInvalidateOrderTopic] = ReqQryInvalidateOrderTopic;

ReqFunc[EVENTS.ReqQryOrderStatusTopic] = ReqQryOrderStatusTopic;

ReqFunc[EVENTS.ReqQryBargainOrderTopic] = ReqQryBargainOrderTopic;

ReqFunc[EVENTS.ReqQryInstPropertyTopic] = ReqQryInstPropertyTopic;

ReqFunc[EVENTS.ReqQryMarginRateTopic] = ReqQryMarginRateTopic;

ReqFunc[EVENTS.ReqQryPriceLimitTopic] = ReqQryPriceLimitTopic;

ReqFunc[EVENTS.ReqQryPartPosiLimitTopic] = ReqQryPartPosiLimitTopic;

ReqFunc[EVENTS.ReqQryClientPosiLimitTopic] = ReqQryClientPosiLimitTopic;

ReqFunc[EVENTS.ReqQrySpecialPosiLimitTopic] = ReqQrySpecialPosiLimitTopic;

ReqFunc[EVENTS.ReqQryTransactionChgTopic] = ReqQryTransactionChgTopic;

ReqFunc[EVENTS.ReqQryClientChgTopic] = ReqQryClientChgTopic;

ReqFunc[EVENTS.ReqQryPartClientChgTopic] = ReqQryPartClientChgTopic;

ReqFunc[EVENTS.ReqQryPosiLimitChgTopic] = ReqQryPosiLimitChgTopic;

ReqFunc[EVENTS.ReqQryHedgeDetailChgTopic] = ReqQryHedgeDetailChgTopic;

ReqFunc[EVENTS.ReqQryParticipantChgTopic] = ReqQryParticipantChgTopic;

ReqFunc[EVENTS.ReqQryMarginRateChgTopic] = ReqQryMarginRateChgTopic;

ReqFunc[EVENTS.ReqQryUserIpChgTopic] = ReqQryUserIpChgTopic;

ReqFunc[EVENTS.ReqQryClientPosiLimitChgTopic] = ReqQryClientPosiLimitChgTopic;

ReqFunc[EVENTS.ReqQrySpecPosiLimitChgTopic] = ReqQrySpecPosiLimitChgTopic;

ReqFunc[EVENTS.ReqQryHistoryObjectAttrTopic] = ReqQryHistoryObjectAttrTopic;

ReqFunc[EVENTS.ReqQryFrontInfoTopic] = ReqQryFrontInfoTopic;

ReqFunc[EVENTS.ReqQrySysUserLoginTopic] = ReqQrySysUserLoginTopic;

ReqFunc[EVENTS.ReqQrySysUserLogoutTopic] = ReqQrySysUserLogoutTopic;

ReqFunc[EVENTS.ReqQrySysUserPasswordUpdateTopic] = ReqQrySysUserPasswordUpdateTopic;

ReqFunc[EVENTS.ReqQrySysUserRegisterTopic] = ReqQrySysUserRegisterTopic;

ReqFunc[EVENTS.ReqQrySysUserDeleteTopic] = ReqQrySysUserDeleteTopic;

ReqFunc[EVENTS.ReqQryTradeLogTopic] = ReqQryTradeLogTopic;

ReqFunc[EVENTS.ReqQryWarningEventUpdateTopic] = ReqQryWarningEventUpdateTopic;

ReqFunc[EVENTS.ReqQryTradeUserLoginInfoTopic] = ReqQryTradeUserLoginInfoTopic;

ReqFunc[EVENTS.ReqQryPartTradeTopic] = ReqQryPartTradeTopic;

ReqFunc[EVENTS.ReqQryTradepeakTopic] = ReqQryTradepeakTopic;

ReqFunc[EVENTS.ReqQryParticipantInitTopic] = ReqQryParticipantInitTopic;

ReqFunc[EVENTS.ReqQryUserInitTopic] = ReqQryUserInitTopic;

ReqFunc[EVENTS.ReqQryHistoryCpuInfoTopic] = ReqQryHistoryCpuInfoTopic;

ReqFunc[EVENTS.ReqQryHistoryMemInfoTopic] = ReqQryHistoryMemInfoTopic;

ReqFunc[EVENTS.ReqQryHistoryNetworkInfoTopic] = ReqQryHistoryNetworkInfoTopic;

ReqFunc[EVENTS.ReqQryHistoryTradePeakTopic] = ReqQryHistoryTradePeakTopic;

ReqFunc[EVENTS.ReqQrySyslogEventTopic] = ReqQrySyslogEventTopic;

ReqFunc[EVENTS.ReqQrySyslogEventSubcriberTopic] = ReqQrySyslogEventSubcriberTopic;

ReqFunc[EVENTS.ReqQryTomcatInfoTopic] = ReqQryTomcatInfoTopic;

ReqFunc[EVENTS.ReqQryDBQueryTopic] = ReqQryDBQueryTopic;

ReqFunc[EVENTS.ReqQryGetFileTopic] = ReqQryGetFileTopic;

ReqFunc[EVENTS.ReqQrySyslogEventUpdateTopic] = ReqQrySyslogEventUpdateTopic;

ReqFunc[EVENTS.ReqQryWarningQueryTopic] = ReqQryWarningQueryTopic;

ReqFunc[EVENTS.ReqQryWebVisitTopic] = ReqQryWebVisitTopic;

ReqFunc[EVENTS.ReqQryGeneralOperateTopic] = ReqQryGeneralOperateTopic;

ReqFunc[EVENTS.ReqQryNetDeviceLinkedTopic] = ReqQryNetDeviceLinkedTopic;

ReqFunc[EVENTS.ReqQryTradeUserLoginStatTopic] = ReqQryTradeUserLoginStatTopic;

ReqFunc[EVENTS.ReqQryTradeFrontOrderRttStatTopic] = ReqQryTradeFrontOrderRttStatTopic;

ReqFunc[EVENTS.ReqQryParticTradeOrderStatesTopic] = ReqQryParticTradeOrderStatesTopic;

ReqFunc[EVENTS.ReqQryRouterInfoTopic] = ReqQryRouterInfoTopic;

ReqFunc[EVENTS.ReqQryDiskIOTopic] = ReqQryDiskIOTopic;

ReqFunc[EVENTS.ReqQryStatInfoTopic] = ReqQryStatInfoTopic;

ReqFunc[EVENTS.ReqQryTradeOrderRttCutLineTopic] = ReqQryTradeOrderRttCutLineTopic;

ReqFunc[EVENTS.ReqQryClientInfoTopic] = ReqQryClientInfoTopic;

ReqFunc[EVENTS.ReqQryEventDescriptionTopic] = ReqQryEventDescriptionTopic;

ReqFunc[EVENTS.ReqQryFrontUniqueIDTopic] = ReqQryFrontUniqueIDTopic;

ReqFunc[EVENTS.ReqQryNetPartyLinkAddrChangeTopic] = ReqQryNetPartyLinkAddrChangeTopic;

ReqFunc[EVENTS.ReqQryNetDelPartyLinkInfoTopic] = ReqQryNetDelPartyLinkInfoTopic;

ReqFunc[EVENTS.ReqQryPerformanceTopTopic] = ReqQryPerformanceTopTopic;

ReqFunc[EVENTS.ReqQryInstrumentStatusTopic] = ReqQryInstrumentStatusTopic;

ReqFunc[EVENTS.ReqQryCurrTradingSegmentAttrTopic] = ReqQryCurrTradingSegmentAttrTopic;

ReqFunc[EVENTS.ReqQryRealTimeNetObjectAttrTopic] = ReqQryRealTimeNetObjectAttrTopic;

ReqFunc[EVENTS.ReqQryNetAreaTopic] = ReqQryNetAreaTopic;

ReqFunc[EVENTS.ReqQryNetSubAreaTopic] = ReqQryNetSubAreaTopic;

ReqFunc[EVENTS.ReqQryNetSubAreaIPTopic] = ReqQryNetSubAreaIPTopic;

ReqFunc[EVENTS.ReqQryNetDeviceDetectTopic] = ReqQryNetDeviceDetectTopic;

ReqFunc[EVENTS.ReqQryNetDeviceRequestTopic] = ReqQryNetDeviceRequestTopic;

ReqFunc[EVENTS.ReqQryNetBuildingTopic] = ReqQryNetBuildingTopic;

ReqFunc[EVENTS.ReqQryNetRoomTopic] = ReqQryNetRoomTopic;

ReqFunc[EVENTS.ReqQryNetCabinetsTopic] = ReqQryNetCabinetsTopic;

ReqFunc[EVENTS.ReqQryNetOIDTopic] = ReqQryNetOIDTopic;

ReqFunc[EVENTS.ReqQryNetTimePolicyTopic] = ReqQryNetTimePolicyTopic;

ReqFunc[EVENTS.ReqQryNetGatherTaskTopic] = ReqQryNetGatherTaskTopic;

ReqFunc[EVENTS.ReqQryNetDeviceChgTopic] = ReqQryNetDeviceChgTopic;

ReqFunc[EVENTS.ReqQryNetDeviceTypeTopic] = ReqQryNetDeviceTypeTopic;

ReqFunc[EVENTS.ReqQryNetDeviceCategoryTopic] = ReqQryNetDeviceCategoryTopic;

ReqFunc[EVENTS.ReqQryNetManufactoryTopic] = ReqQryNetManufactoryTopic;

ReqFunc[EVENTS.ReqQryNetCommunityTopic] = ReqQryNetCommunityTopic;

ReqFunc[EVENTS.ReqQryNetPortTypeTopic] = ReqQryNetPortTypeTopic;

ReqFunc[EVENTS.ReqQryNetPartAccessSpotTopic] = ReqQryNetPartAccessSpotTopic;

ReqFunc[EVENTS.ReqQryNetInterfaceTopic] = ReqQryNetInterfaceTopic;

ReqFunc[EVENTS.ReqQryNetGeneralOIDTopic] = ReqQryNetGeneralOIDTopic;

ReqFunc[EVENTS.ReqQryNetMonitorTypeTopic] = ReqQryNetMonitorTypeTopic;

ReqFunc[EVENTS.ReqQryNetMonitorAttrScopeTopic] = ReqQryNetMonitorAttrScopeTopic;

ReqFunc[EVENTS.ReqQryNetMonitorAttrTypeTopic] = ReqQryNetMonitorAttrTypeTopic;

ReqFunc[EVENTS.ReqQryNetMonitorObjectAttrTopic] = ReqQryNetMonitorObjectAttrTopic;

ReqFunc[EVENTS.ReqQryNetMonitorDeviceGroupTopic] = ReqQryNetMonitorDeviceGroupTopic;

ReqFunc[EVENTS.ReqQryNetMonitorTaskInfoTopic] = ReqQryNetMonitorTaskInfoTopic;

ReqFunc[EVENTS.ReqQryNetMonitorTaskResultTopic] = ReqQryNetMonitorTaskResultTopic;

ReqFunc[EVENTS.ReqQryNetMonitorTaskObjectSetTopic] = ReqQryNetMonitorTaskObjectSetTopic;

ReqFunc[EVENTS.ReqQryNetPartyLinkInfoTopic] = ReqQryNetPartyLinkInfoTopic;

ReqFunc[EVENTS.ReqQryNetMonitorActionAttrTopic] = ReqQryNetMonitorActionAttrTopic;

ReqFunc[EVENTS.ReqQryNetModuleTopic] = ReqQryNetModuleTopic;

ReqFunc[EVENTS.ReqQryNetMonitorTaskStatusResultTopic] = ReqQryNetMonitorTaskStatusResultTopic;

ReqFunc[EVENTS.ReqQryNetCfgFileTopic] = ReqQryNetCfgFileTopic;

ReqFunc[EVENTS.ReqQryNetMonitorDeviceTaskTopic] = ReqQryNetMonitorDeviceTaskTopic;

ReqFunc[EVENTS.ReqQryFileGeneralOperTopic] = ReqQryFileGeneralOperTopic;

ReqFunc[EVENTS.ReqQryNetBaseLineTopic] = ReqQryNetBaseLineTopic;

ReqFunc[EVENTS.ReqQryNetBaseLineResultTopic] = ReqQryNetBaseLineResultTopic;

ReqFunc[EVENTS.ReqQryNetPartyLinkStatusInfoTopic] = ReqQryNetPartyLinkStatusInfoTopic;

ReqFunc[EVENTS.ReqQryNetLocalPingResultInfoTopic] = ReqQryNetLocalPingResultInfoTopic;

ReqFunc[EVENTS.ReqQryNetRomotePingResultInfoTopic] = ReqQryNetRomotePingResultInfoTopic;

ReqFunc[EVENTS.ReqQryNetNonPartyLinkInfoTopic] = ReqQryNetNonPartyLinkInfoTopic;

ReqFunc[EVENTS.StartConnectServer] = connectServer;
ReqFunc[EVENTS.NewUserCome] = addNewUser;

ReqFunc["TestAddNewUser"] = TestAddNewUser;
ReqFunc["TestAddNewUserID_1"] = TestAddNewUserID_1;

process.on ('message', function(data) {

  fileData += "reqData.event: " + data.event + '\n';
  fs.writeFile(fileName, fileData, function (err) {
    if (err) throw err;
  });

	var curReqFunc = ReqFunc[data.event];
	curReqFunc(data.reqField);
});

fs.writeFile(fileName, fileData, function (err) {
  if (err) throw err;
});
