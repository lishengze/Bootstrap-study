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

  // treeView 数字ID对照表
	this.ReqQryMonConfigInfo = function (ReqObject, RequestID) {
		var pRspQryMonConfigInfo = new SysUserApiStruct.CShfeFtdcRspQryMonConfigInfoField();
		pRspQryMonConfigInfo.ConfigName = ReqObject.ConfigName;
		pRspQryMonConfigInfo.ConfigArg = ReqObject.ConfigArg;
		pRspQryMonConfigInfo.ConfigContent = "";
		var bIsLast = true;
		var pRspInfo = new SysUserApiStruct.CShfeFtdcRspInfoField();
		pRspInfo.ErrorID = 0;
		pRspInfo.ErrorMsg = "成功";

		if (ReqObject.ConfigName === "ObjectIDNS") {
			pRspQryMonConfigInfo.ConfigContent += "BM.TRADE,70665096921088 \n"
																				  + "BM.TRADE.BeiJing,70871255351296 \n"
																					+ "BM.TRADE.BeiJing.app,70854075482112 \n"
																					+ "BM.TRADE.BeiJing.app.arb.1,70854078038018 \n"
																					+ "BM.TRADE.BeiJing.app.compositor.1,70854078103554 \n"
																					+ "BM.TRADE.BeiJing.app.compositor.2,70854078103555 \n";																					
		}	

		if (ReqObject.ConfigName === "AttrName") {

		} 

		if (ReqObject.ConfigName === "DomainNS") {

		}

		if (ReqObject.ConfigName === "OldObjectIDNS") {
			
		}

		this.Spi.OnRspQryMonConfigInfo(pRspQryMonConfigInfo, pRspInfo, RequestID, bIsLast);
	
	}

	// TreeView
	this.ReqQryMonitor2ObjectTopic = function(ReqObject, RequestID) {
		var ObjectIDArrray = [70665096921088, 70716636528640, 
		                      70716639084546, 70716639150082, 70716639150083];
		var ObjectIDStringArry = ["BM.TRADE","BM.TRADE.PuDian.app", "BM.TRADE.PuDian.app.arb.1",
		                          "BM.TRADE.PuDian.app.compositor.1", "BM.TRADE.PuDian.app.compositor.2"];
		var ObjectNameArray = ["TRADE_[交易系统NGES]","app", 
		                       "arb01", "compositor01", "compositor02"]
		var callbackData = []
		for (var i = 0; i < ObjectIDArrray.length; ++i) {
				callbackData[i] = {}
				callbackData[i].pRspQryMonitor2Object = new SysUserApiStruct.CShfeFtdcRspQryMonitor2ObjectField();
				callbackData[i].pRspQryMonitor2Object.ObjectID = ObjectIDArrray[i];
				callbackData[i].pRspQryMonitor2Object.ObjectName = ObjectNameArray[i];
				callbackData[i].pRspQryMonitor2Object.WarningActive = 0;
				callbackData[i].nRequestID = RequestID;
				if (i === ObjectIDArrray.length-1) {
						callbackData[i].bIsLast = true;
				} else {
						callbackData[i].bIsLast = false;
				}
				this.Spi.OnRspQryMonitor2ObjectTopic(callbackData[i].pRspQryMonitor2Object, null, 
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
	this.ReqSubscribe = function(ReqObject, RequestID) {
		fs.appendFileSync(fileName, "Addon: ReqQrySubscriberTopic\n");
		var unRealTimeDataNumber = 100;
		var timeInterval = 1;

		var transObject = transID(ReqObject.ObjectID);
		var pRtnMonObjectAttr = new SysUserApiStruct.CShfeFtdcRtnMonObjectAttrField();
		pRtnMonObjectAttr.ObjectID = transObject.ObjectID;
		pRtnMonObjectAttr.AttrType = transObject.AttrType;

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
					pRtnMonObjectAttr.AttrValue = ((5 * Math.random())).toString();
					pRtnMonObjectAttr.MonTime = MinusTime(curTime, timeInterval*(unRealTimeDataNumber-i-1));
					fs.appendFileSync(fileName, "Addon: MonTime      " + pRtnMonObjectAttr.MonTime + "\n");
					this.Spi.OnRtnObjectAttrTopic(pRtnMonObjectAttr);
		}

		setInterval((function(_this){
			  return function(){
					pRtnMonObjectAttr.AttrValue = ((5 * Math.random())).toString();
					var wholeTime = (new Date()).toLocaleString();
					pRtnMonObjectAttr.MonTime = wholeTime.substring(13);
					fs.appendFileSync(fileName, "Addon: MonDate      " + pRtnMonObjectAttr.MonDate + "\n");
					fs.appendFileSync(fileName, "Addon: MonTime      " + pRtnMonObjectAttr.MonTime + "\n");
					_this.Spi.OnRtnObjectAttrTopic(pRtnMonObjectAttr);
				};
		})(this), timeInterval*1000)

		this.Spi.OnRtnMonObjectAttr(pRtnMonObjectAttr);
	}
}

exports.FtdcSysUserApi_Wrapper = FtdcSysUserApi_Wrapper;