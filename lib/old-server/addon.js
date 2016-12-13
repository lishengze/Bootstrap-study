var EVENTS           = require("./Events.js");
var EventEmitter     = require ('events').EventEmitter;
var SysUserApiStruct = require ('./SysUserApiStruct.js');
var toolFunc         = require("./tool-function.js");
var MinusTime        = toolFunc.MinusTime;
var transID          = toolFunc.transID;

var fs       = require('fs');
var path     = require('path');

var fileName = path.join (__dirname, './client-child.txt');

var FtdcSysUserApi_Wrapper = function(){

	this.Spi = {}

	this.emitter = new EventEmitter;

	this.RegisterFront = function(realTimeSystemPath){}

	this.Init = function(){}

	this.RegisterSpi = function(spi) {
		this.Spi = spi;
		this.Spi.OnFrontConnected();
	}

	this.ReqQrySysUserLoginTopic = function(ReqObject, RequestID) {		
		var pRspQrySysUserLogin = new SysUserApiStruct.CShfeFtdcRspQrySysUserLoginField();
		var pRspInfo = null;
		var bIsLast = true;
		pRspQrySysUserLogin.UserID      = ReqObject.UserID;
		pRspQrySysUserLogin.TradingDay  ="10";
		pRspQrySysUserLogin.LoginTime   = "12";
		pRspQrySysUserLogin.Privilege   = 63;
		pRspQrySysUserLogin.VersionFlag = 2;
		this.Spi.OnRspQrySysUserLoginTopic(pRspQrySysUserLogin, pRspInfo, RequestID, bIsLast);
	}
	// TreeView
	this.ReqQryMonitorObjectTopic = function(ReqObject, RequestID) {
		var ObjectIDArrray = ["A", "A.a", "B", "B.b"];
		var ObjectNameArray = ["A", "a", "B", "b"]
		var callbackData = []
		for (var i = 0; i < ObjectIDArrray.length; ++i) {
				callbackData[i] = {}
				callbackData[i].pRspQryMonitorObject = new SysUserApiStruct.CShfeFtdcRspQryMonitorObjectField();
				callbackData[i].pRspQryMonitorObject.ObjectID = ObjectIDArrray[i];
				callbackData[i].pRspQryMonitorObject.ObjectName = ObjectNameArray[i];
				callbackData[i].pRspQryMonitorObject.WarningActive = 0;
				callbackData[i].nRequestID = RequestID;
				if (i === ObjectIDArrray.length-1) {
						callbackData[i].bIsLast = true;
				} else {
						callbackData[i].bIsLast = false;
				}
				this.Spi.OnRspQryMonitorObjectTopic(callbackData[i].pRspQryMonitorObject, null, 
				                               callbackData[i].nRequestID, callbackData[i].bIsLast);
		}
	}
	// Grid
	this.ReqQryOidRelationTopic = function(ReqObject, RequestID) {
		  fs.appendFileSync(fileName, "Addon: ReqQryOidRelationTopic\n");
			// fs.appendFileSync(fileName, "Addon: ReqQryOidRelationTopic, ObjectID " + ReqObject.ObjectID + "\n");
			if (ReqObject.ObjectID === "A.a") {
					var HoldObjectIDArray = ["Active", "TopMemory", "TopCPU", "TopProcess","Network"]
					// var HoldObjectIDArray = ["TopMemory"]
			} else {
					var HoldObjectIDArray = ["Active", "HandleRelayLogin", "HandleRelayLoginError", "HandleNotification","MBLSize"]
					// var HoldObjectIDArray = ["HandleRelayLogin"]

			}
			var callbackData = []
			for (var i = 0; i < HoldObjectIDArray.length; ++i) {
					callbackData[i] = {};
					callbackData[i].pRspQryOidRelation = new SysUserApiStruct.CShfeFtdcRspQryOidRelationField();
					callbackData[i].pRspQryOidRelation.ObjectID = ReqObject.ObjectID;
					callbackData[i].pRspQryOidRelation.HoldObjectID = HoldObjectIDArray[i];
					callbackData[i].nRequestID = RequestID;

					if (i === HoldObjectIDArray.length-1) {
							callbackData[i].bIsLast = true;
					} else {
							callbackData[i].bIsLast = false;
					}
				  // fs.appendFileSync(fileName, "Addon: ReqQryOidRelationTopic, HoldObjectID " + HoldObjectIDArray[i] + "\n");
					this.Spi.OnRspQryOidRelationTopic(callbackData[i].pRspQryOidRelation, null, 
					                             callbackData[i].nRequestID, callbackData[i].bIsLast);
			}

	}
	// Highchart
	this.ReqQrySubscriberTopic = function(ReqObject, RequestID) {
		fs.appendFileSync(fileName, "Addon: ReqQrySubscriberTopic\n");
		var unRealTimeDataNumber = 100;
		var timeInterval = 1;

		var transObject = transID(ReqObject.ObjectID);
		var pRtnObjectAttr = new SysUserApiStruct.CShfeFtdcRtnObjectAttrField();
		pRtnObjectAttr.ObjectID = transObject.ObjectID;
		pRtnObjectAttr.AttrType = transObject.AttrType;

		fs.appendFileSync(fileName, "Addon: ReqQrySubscriberTopic " + transObject.ObjectID + "\n");
		fs.appendFileSync(fileName, "Addon: ReqQrySubscriberTopic " + transObject.AttrType + "\n");

		var curWholeTime = (new Date()).toLocaleString();
		var curDate = curWholeTime.substring(0,10);
		curDate = curDate.substring(0,4) + curDate.substring(5,7) + curDate.substring(8);
		var curTime = curWholeTime.substring(13);
		fs.appendFileSync(fileName, "Addon: curWholeTime " + curWholeTime + "\n");
		fs.appendFileSync(fileName, "Addon: curDate      " + curDate + "\n");
		fs.appendFileSync(fileName, "Addon: curTime      " + curTime + "\n");
		for (var i =0; i<unRealTimeDataNumber; ++i) {
					pRtnObjectAttr.AttrValue = ((5 * Math.random())).toString();
					pRtnObjectAttr.MonDate = curDate;
					pRtnObjectAttr.MonTime = MinusTime(curTime, timeInterval*(unRealTimeDataNumber-i-1));
					fs.appendFileSync(fileName, "Addon: MonTime      " + pRtnObjectAttr.MonTime + "\n");
					this.Spi.OnRtnObjectAttrTopic(pRtnObjectAttr);
		}

		setInterval((function(_this){
			  return function(){
					pRtnObjectAttr.AttrValue = ((5 * Math.random())).toString();
					var wholeTime = (new Date()).toLocaleString();
					pRtnObjectAttr.MonDate = wholeTime.substring(0,10);
					pRtnObjectAttr.MonDate = pRtnObjectAttr.MonDate.substring(0,4) + pRtnObjectAttr.MonDate.substring(5,7) + pRtnObjectAttr.MonDate.substring(8);
					pRtnObjectAttr.MonTime = wholeTime.substring(13);
					fs.appendFileSync(fileName, "Addon: MonDate      " + pRtnObjectAttr.MonDate + "\n");
					fs.appendFileSync(fileName, "Addon: MonTime      " + pRtnObjectAttr.MonTime + "\n");
					_this.Spi.OnRtnObjectAttrTopic(pRtnObjectAttr);
				};
		})(this), timeInterval*1000)

		this.Spi.OnRtnObjectAttrTopic(pRtnObjectAttr);
	}
}

exports.FtdcSysUserApi_Wrapper = FtdcSysUserApi_Wrapper;