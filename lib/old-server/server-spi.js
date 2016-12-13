var EVENTS   = require("./Events.js");
var fs       = require('fs');
var path     = require('path');

var fileName = path.join (__dirname, './client-child.txt');
var fileData = "Server-Spi Process Pid: " + process.pid + '\n';
fs.appendFile(fileName, fileData, function(err){});

var Spi = function(){
    
    this.user = {};    
    
    this.OnFrontConnected = function () {
        var data = {};
        data.message = EVENTS.FrontConnected;
        data.callbackData = {};
        process.send(data);
        fileData += "Spi: OnFrontConnected! \n";
        fs.appendFileSync(fileName, fileData);
    }
    
    this.OnFrontDisConnected = function (nReason) {
        var data = {};
        data.message = EVENTS.FrontDisConnected;
        data.callbackData = nReason;
        process.send(data);  
    }
    
    this.OnHeartBeatWarning = function (nTimeLapse) {
        var data = {};
        data.message = EVENTS.HeartBeatWarning;
        data.callbackData = nTimeLapse;
        process.send(data);      
    }         
          
    this.OnRspQryTopCpuInfoTopic = function (pRspQryTopCpuInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryTopCpuInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryTopCpuInfo = pRspQryTopCpuInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnTopCpuInfoTopic = function (pRtnTopCpuInfo){ 
        var data = {};
        data.message = EVENTS.RtnTopCpuInfoTopic; 
        data.callbackData = pRtnTopCpuInfo;
        process.send(data); 
    }

    this.OnRspQryTopMemInfoTopic = function (pRspQryTopMemInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryTopMemInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryTopMemInfo = pRspQryTopMemInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnTopMemInfoTopic = function (pRtnTopMemInfo){ 
        var data = {};
        data.message = EVENTS.RtnTopMemInfoTopic; 
        data.callbackData = pRtnTopMemInfo;
        process.send(data); 
    }

    this.OnRspQryTopProcessInfoTopic = function (pRspQryTopProcessInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryTopProcessInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryTopProcessInfo = pRspQryTopProcessInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnTopProcessInfoTopic = function (pRtnTopProcessInfo){ 
        var data = {};
        data.message = EVENTS.RtnTopProcessInfoTopic; 
        data.callbackData = pRtnTopProcessInfo;
        process.send(data); 
    }

    this.OnRspQryFileSystemInfoTopic = function (pRspQryFileSystemInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryFileSystemInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryFileSystemInfo = pRspQryFileSystemInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnFileSystemInfoTopic = function (pRtnFileSystemInfo){ 
        var data = {};
        data.message = EVENTS.RtnFileSystemInfoTopic; 
        data.callbackData = pRtnFileSystemInfo;
        process.send(data); 
    }

    this.OnRspQryNetworkInfoTopic = function (pRspQryNetworkInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetworkInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetworkInfo = pRspQryNetworkInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetworkInfoTopic = function (pRtnNetworkInfo){ 
        var data = {};
        data.message = EVENTS.RtnNetworkInfoTopic; 
        data.callbackData = pRtnNetworkInfo;
        process.send(data); 
    }

    this.OnRspQryClientLoginTopic = function (pRspQryClientLogin, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryClientLoginTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryClientLogin = pRspQryClientLogin;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryMonitorObjectTopic = function (pRspQryMonitorObject, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryMonitorObjectTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryMonitorObject = pRspQryMonitorObject;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnMonitorObjectTopic = function (pRtnMonitorObject){ 
        var data = {};
        data.message = EVENTS.RtnMonitorObjectTopic; 
        data.callbackData = pRtnMonitorObject;
        process.send(data); 
    }

    this.OnRspQryObjectRationalTopic = function (pRspQryObjectRational, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryObjectRationalTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryObjectRational = pRspQryObjectRational;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnObjectRationalTopic = function (pRtnObjectRational){ 
        var data = {};
        data.message = EVENTS.RtnObjectRationalTopic; 
        data.callbackData = pRtnObjectRational;
        process.send(data); 
    }

    this.OnRspQrySyslogInfoTopic = function (pRspQrySyslogInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQrySyslogInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySyslogInfo = pRspQrySyslogInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnSyslogInfoTopic = function (pRtnSyslogInfo){ 
        var data = {};
        data.message = EVENTS.RtnSyslogInfoTopic; 
        data.callbackData = pRtnSyslogInfo;
        process.send(data); 
    }

    this.OnRspQrySubscriberTopic = function (pRspQrySubscriber, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQrySubscriberTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySubscriber = pRspQrySubscriber;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryOidRelationTopic = function (pRspQryOidRelation, pRspInfo, nRequestID, bIsLast) {
        fs.appendFileSync('Server-Spi: RspQryOidRelationTopic!\n')
        var data = {};
        data.message = EVENTS.RspQryOidRelationTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryOidRelation = pRspQryOidRelation;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnOidRelationTopic = function (pRtnOidRelation){ 
        var data = {};
        data.message = EVENTS.RtnOidRelationTopic; 
        data.callbackData = pRtnOidRelation;
        process.send(data); 
    }

    this.OnRspQryUserInfoTopic = function (pRspQryUserInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryUserInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryUserInfo = pRspQryUserInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnUserInfoTopic = function (pRtnUserInfo){ 
        var data = {};
        data.message = EVENTS.RtnUserInfoTopic; 
        data.callbackData = pRtnUserInfo;
        process.send(data); 
    }

    this.OnRspQryOnlineUserInfoTopic = function (pRspQryOnlineUserInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryOnlineUserInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryOnlineUserInfo = pRspQryOnlineUserInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnOnlineUserInfoTopic = function (pRtnOnlineUserInfo){ 
        var data = {};
        data.message = EVENTS.RtnOnlineUserInfoTopic; 
        data.callbackData = pRtnOnlineUserInfo;
        process.send(data); 
    }

    this.OnRspQryWarningEventTopic = function (pRspQryWarningEvent, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryWarningEventTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryWarningEvent = pRspQryWarningEvent;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnWarningEventTopic = function (pRtnWarningEvent){ 
        var data = {};
        data.message = EVENTS.RtnWarningEventTopic; 
        data.callbackData = pRtnWarningEvent;
        process.send(data); 
    }

    this.OnRspQryCPUUsageTopic = function (pRspQryCPUUsage, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryCPUUsageTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryCPUUsage = pRspQryCPUUsage;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnCPUUsageTopic = function (pRtnCPUUsage){ 
        var data = {};
        data.message = EVENTS.RtnCPUUsageTopic; 
        data.callbackData = pRtnCPUUsage;
        process.send(data); 
    }

    this.OnRspQryMemoryUsageTopic = function (pRspQryMemoryUsage, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryMemoryUsageTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryMemoryUsage = pRspQryMemoryUsage;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnMemoryUsageTopic = function (pRtnMemoryUsage){ 
        var data = {};
        data.message = EVENTS.RtnMemoryUsageTopic; 
        data.callbackData = pRtnMemoryUsage;
        process.send(data); 
    }

    this.OnRspQryDiskUsageTopic = function (pRspQryDiskUsage, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryDiskUsageTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryDiskUsage = pRspQryDiskUsage;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnDiskUsageTopic = function (pRtnDiskUsage){ 
        var data = {};
        data.message = EVENTS.RtnDiskUsageTopic; 
        data.callbackData = pRtnDiskUsage;
        process.send(data); 
    }

    this.OnRspQryObjectAttrTopic = function (pRspQryObjectAttr, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryObjectAttrTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryObjectAttr = pRspQryObjectAttr;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnObjectAttrTopic = function (pRtnObjectAttr){ 
        var data = {};
        data.message = EVENTS.RtnObjectAttrTopic; 
        data.callbackData = pRtnObjectAttr;
        process.send(data); 
    }

    this.OnRspQryInvalidateOrderTopic = function (pRspQryInvalidateOrder, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryInvalidateOrderTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryInvalidateOrder = pRspQryInvalidateOrder;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnInvalidateOrderTopic = function (pRtnInvalidateOrder){ 
        var data = {};
        data.message = EVENTS.RtnInvalidateOrderTopic; 
        data.callbackData = pRtnInvalidateOrder;
        process.send(data); 
    }

    this.OnRspQryOrderStatusTopic = function (pRspQryOrderStatus, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryOrderStatusTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryOrderStatus = pRspQryOrderStatus;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnOrderStatusTopic = function (pRtnOrderStatus){ 
        var data = {};
        data.message = EVENTS.RtnOrderStatusTopic; 
        data.callbackData = pRtnOrderStatus;
        process.send(data); 
    }

    this.OnRspQryBargainOrderTopic = function (pRspQryBargainOrder, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryBargainOrderTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryBargainOrder = pRspQryBargainOrder;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnBargainOrderTopic = function (pRtnBargainOrder){ 
        var data = {};
        data.message = EVENTS.RtnBargainOrderTopic; 
        data.callbackData = pRtnBargainOrder;
        process.send(data); 
    }

    this.OnRspQryInstPropertyTopic = function (pRspQryInstProperty, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryInstPropertyTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryInstProperty = pRspQryInstProperty;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnInstPropertyTopic = function (pRtnInstProperty){ 
        var data = {};
        data.message = EVENTS.RtnInstPropertyTopic; 
        data.callbackData = pRtnInstProperty;
        process.send(data); 
    }

    this.OnRspQryMarginRateTopic = function (pRspQryMarginRate, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryMarginRateTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryMarginRate = pRspQryMarginRate;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnMarginRateTopic = function (pRtnMarginRate){ 
        var data = {};
        data.message = EVENTS.RtnMarginRateTopic; 
        data.callbackData = pRtnMarginRate;
        process.send(data); 
    }

    this.OnRspQryPriceLimitTopic = function (pRspQryPriceLimit, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryPriceLimitTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryPriceLimit = pRspQryPriceLimit;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnPriceLimitTopic = function (pRtnPriceLimit){ 
        var data = {};
        data.message = EVENTS.RtnPriceLimitTopic; 
        data.callbackData = pRtnPriceLimit;
        process.send(data); 
    }

    this.OnRspQryPartPosiLimitTopic = function (pRspQryPartPosiLimit, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryPartPosiLimitTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryPartPosiLimit = pRspQryPartPosiLimit;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnPartPosiLimitTopic = function (pRtnPartPosiLimit){ 
        var data = {};
        data.message = EVENTS.RtnPartPosiLimitTopic; 
        data.callbackData = pRtnPartPosiLimit;
        process.send(data); 
    }

    this.OnRspQryClientPosiLimitTopic = function (pRspQryClientPosiLimit, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryClientPosiLimitTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryClientPosiLimit = pRspQryClientPosiLimit;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnClientPosiLimitTopic = function (pRtnClientPosiLimit){ 
        var data = {};
        data.message = EVENTS.RtnClientPosiLimitTopic; 
        data.callbackData = pRtnClientPosiLimit;
        process.send(data); 
    }

    this.OnRspQrySpecialPosiLimitTopic = function (pRspQrySpecialPosiLimit, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQrySpecialPosiLimitTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySpecialPosiLimit = pRspQrySpecialPosiLimit;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnSpecialPosiLimitTopic = function (pRtnSpecialPosiLimit){ 
        var data = {};
        data.message = EVENTS.RtnSpecialPosiLimitTopic; 
        data.callbackData = pRtnSpecialPosiLimit;
        process.send(data); 
    }

    this.OnRspQryTransactionChgTopic = function (pRspQryTransactionChg, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryTransactionChgTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryTransactionChg = pRspQryTransactionChg;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnTransactionChgTopic = function (pRtnTransactionChg){ 
        var data = {};
        data.message = EVENTS.RtnTransactionChgTopic; 
        data.callbackData = pRtnTransactionChg;
        process.send(data); 
    }

    this.OnRspQryClientChgTopic = function (pRspQryClientChg, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryClientChgTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryClientChg = pRspQryClientChg;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnClientChgTopic = function (pRtnClientChg){ 
        var data = {};
        data.message = EVENTS.RtnClientChgTopic; 
        data.callbackData = pRtnClientChg;
        process.send(data); 
    }

    this.OnRspQryPartClientChgTopic = function (pRspQryPartClientChg, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryPartClientChgTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryPartClientChg = pRspQryPartClientChg;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnPartClientChgTopic = function (pRtnPartClientChg){ 
        var data = {};
        data.message = EVENTS.RtnPartClientChgTopic; 
        data.callbackData = pRtnPartClientChg;
        process.send(data); 
    }

    this.OnRspQryPosiLimitChgTopic = function (pRspQryPosiLimitChg, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryPosiLimitChgTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryPosiLimitChg = pRspQryPosiLimitChg;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnPosiLimitChgTopic = function (pRtnPosiLimitChg){ 
        var data = {};
        data.message = EVENTS.RtnPosiLimitChgTopic; 
        data.callbackData = pRtnPosiLimitChg;
        process.send(data); 
    }

    this.OnRspQryHedgeDetailChgTopic = function (pRspQryHedgeDetailChg, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryHedgeDetailChgTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryHedgeDetailChg = pRspQryHedgeDetailChg;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnHedgeDetailChgTopic = function (pRtnHedgeDetailChg){ 
        var data = {};
        data.message = EVENTS.RtnHedgeDetailChgTopic; 
        data.callbackData = pRtnHedgeDetailChg;
        process.send(data); 
    }

    this.OnRspQryParticipantChgTopic = function (pRspQryParticipantChg, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryParticipantChgTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryParticipantChg = pRspQryParticipantChg;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnParticipantChgTopic = function (pRtnParticipantChg){ 
        var data = {};
        data.message = EVENTS.RtnParticipantChgTopic; 
        data.callbackData = pRtnParticipantChg;
        process.send(data); 
    }

    this.OnRspQryMarginRateChgTopic = function (pRspQryMarginRateChg, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryMarginRateChgTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryMarginRateChg = pRspQryMarginRateChg;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnMarginRateChgTopic = function (pRtnMarginRateChg){ 
        var data = {};
        data.message = EVENTS.RtnMarginRateChgTopic; 
        data.callbackData = pRtnMarginRateChg;
        process.send(data); 
    }

    this.OnRspQryUserIpChgTopic = function (pRspQryUserIpChg, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryUserIpChgTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryUserIpChg = pRspQryUserIpChg;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnUserIpChgTopic = function (pRtnUserIpChg){ 
        var data = {};
        data.message = EVENTS.RtnUserIpChgTopic; 
        data.callbackData = pRtnUserIpChg;
        process.send(data); 
    }

    this.OnRspQryClientPosiLimitChgTopic = function (pRspQryClientPosiLimitChg, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryClientPosiLimitChgTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryClientPosiLimitChg = pRspQryClientPosiLimitChg;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnClientPosiLimitChgTopic = function (pRtnClientPosiLimitChg){ 
        var data = {};
        data.message = EVENTS.RtnClientPosiLimitChgTopic; 
        data.callbackData = pRtnClientPosiLimitChg;
        process.send(data); 
    }

    this.OnRspQrySpecPosiLimitChgTopic = function (pRspQrySpecPosiLimitChg, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQrySpecPosiLimitChgTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySpecPosiLimitChg = pRspQrySpecPosiLimitChg;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnSpecPosiLimitChgTopic = function (pRtnSpecPosiLimitChg){ 
        var data = {};
        data.message = EVENTS.RtnSpecPosiLimitChgTopic; 
        data.callbackData = pRtnSpecPosiLimitChg;
        process.send(data); 
    }

    this.OnRspQryHistoryObjectAttrTopic = function (pRspQryHistoryObjectAttr, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryHistoryObjectAttrTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryHistoryObjectAttr = pRspQryHistoryObjectAttr;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnHistoryObjectAttrTopic = function (pRtnHistoryObjectAttr){ 
        var data = {};
        data.message = EVENTS.RtnHistoryObjectAttrTopic; 
        data.callbackData = pRtnHistoryObjectAttr;
        process.send(data); 
    }

    this.OnRspQryFrontInfoTopic = function (pRspQryFrontInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryFrontInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryFrontInfo = pRspQryFrontInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnFrontInfoTopic = function (pRtnFrontInfo){ 
        var data = {};
        data.message = EVENTS.RtnFrontInfoTopic; 
        data.callbackData = pRtnFrontInfo;
        process.send(data); 
    }

    this.OnRspQrySysUserLoginTopic = function (pRspQrySysUserLogin, pRspInfo, nRequestID, bIsLast) {
        fs.appendFileSync(fileName, "Spi: OnRspQrySysUserLoginTopic\n");
        var data = {};
        data.message = EVENTS.RspQrySysUserLoginTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySysUserLogin = pRspQrySysUserLogin;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQrySysUserLogoutTopic = function (pRspQrySysUserLogout, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQrySysUserLogoutTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySysUserLogout = pRspQrySysUserLogout;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQrySysUserPasswordUpdateTopic = function (pRspQrySysUserPasswordUpdate, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQrySysUserPasswordUpdateTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySysUserPasswordUpdate = pRspQrySysUserPasswordUpdate;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQrySysUserRegisterTopic = function (pRspQrySysUserRegister, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQrySysUserRegisterTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySysUserRegister = pRspQrySysUserRegister;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQrySysUserDeleteTopic = function (pRspQrySysUserDelete, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQrySysUserDeleteTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySysUserDelete = pRspQrySysUserDelete;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryParticipantInitTopic = function (pRspQryParticipantInit, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryParticipantInitTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryParticipantInit = pRspQryParticipantInit;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnParticipantInitTopic = function (pRtnParticipantInit){ 
        var data = {};
        data.message = EVENTS.RtnParticipantInitTopic; 
        data.callbackData = pRtnParticipantInit;
        process.send(data); 
    }

    this.OnRspQryUserInitTopic = function (pRspQryUserInit, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryUserInitTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryUserInit = pRspQryUserInit;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnUserInitTopic = function (pRtnUserInit){ 
        var data = {};
        data.message = EVENTS.RtnUserInitTopic; 
        data.callbackData = pRtnUserInit;
        process.send(data); 
    }

    this.OnRspQryClientInitTopic = function (pRspQryClientInit, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryClientInitTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryClientInit = pRspQryClientInit;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnClientInitTopic = function (pRtnClientInit){ 
        var data = {};
        data.message = EVENTS.RtnClientInitTopic; 
        data.callbackData = pRtnClientInit;
        process.send(data); 
    }

    this.OnRspQryTradeLogTopic = function (pRspQryTradeLog, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryTradeLogTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryTradeLog = pRspQryTradeLog;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnTradeLogTopic = function (pRtnTradeLog){ 
        var data = {};
        data.message = EVENTS.RtnTradeLogTopic; 
        data.callbackData = pRtnTradeLog;
        process.send(data); 
    }

    this.OnRspQryTradeUserLoginInfoTopic = function (pRspQryTradeUserLoginInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryTradeUserLoginInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryTradeUserLoginInfo = pRspQryTradeUserLoginInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnTradeUserLoginInfoTopic = function (pRtnTradeUserLoginInfo){ 
        var data = {};
        data.message = EVENTS.RtnTradeUserLoginInfoTopic; 
        data.callbackData = pRtnTradeUserLoginInfo;
        process.send(data); 
    }

    this.OnRspQryPartTradeTopic = function (pRspQryPartTrade, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryPartTradeTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryPartTrade = pRspQryPartTrade;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryTradepeakTopic = function (pRspQryTradepeak, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryTradepeakTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryTradepeak = pRspQryTradepeak;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnUpdateSysConfigTopic = function (pRtnUpdateSysConfig){ 
        var data = {};
        data.message = EVENTS.RtnUpdateSysConfigTopic; 
        data.callbackData = pRtnUpdateSysConfig;
        process.send(data); 
    }

    this.OnRtnSysUser = function (pRtnSysUser){ 
        var data = {};
        data.message = EVENTS.RtnSysUser; 
        data.callbackData = pRtnSysUser;
        process.send(data); 
    }

    this.OnRtnPriceLimitChgTopic = function (pRtnPriceLimitChg){ 
        var data = {};
        data.message = EVENTS.RtnPriceLimitChgTopic; 
        data.callbackData = pRtnPriceLimitChg;
        process.send(data); 
    }

    this.OnRspQryHistoryCpuInfoTopic = function (pRspQryHistoryCpuInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryHistoryCpuInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryHistoryCpuInfo = pRspQryHistoryCpuInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryHistoryMemInfoTopic = function (pRspQryHistoryMemInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryHistoryMemInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryHistoryMemInfo = pRspQryHistoryMemInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryHistoryNetworkInfoTopic = function (pRspQryHistoryNetworkInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryHistoryNetworkInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryHistoryNetworkInfo = pRspQryHistoryNetworkInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryMonitorOnlineUser = function (pRspQryMonitorOnlineUser, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryMonitorOnlineUser; 
        data.callbackData = {}; 
        data.callbackData.pRspQryMonitorOnlineUser = pRspQryMonitorOnlineUser;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryFrontStat = function (pRspQryFrontStat, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryFrontStat; 
        data.callbackData = {}; 
        data.callbackData.pRspQryFrontStat = pRspQryFrontStat;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnSysTimeSyncTopic = function (pRtnSysTimeSync){ 
        var data = {};
        data.message = EVENTS.RtnSysTimeSyncTopic; 
        data.callbackData = pRtnSysTimeSync;
        process.send(data); 
    }

    this.OnRtnDataCenterChgTopic = function (pRtnDataCenterChg){ 
        var data = {};
        data.message = EVENTS.RtnDataCenterChgTopic; 
        data.callbackData = pRtnDataCenterChg;
        process.send(data); 
    }

    this.OnRspQryHistoryTradePeakTopic = function (pRspQryHistoryTradePeak, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryHistoryTradePeakTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryHistoryTradePeak = pRspQryHistoryTradePeak;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnHistoryTradePeakTopic = function (pRtnHistoryTradePeak){ 
        var data = {};
        data.message = EVENTS.RtnHistoryTradePeakTopic; 
        data.callbackData = pRtnHistoryTradePeak;
        process.send(data); 
    }

    this.OnRspQrySyslogEventTopic = function (pRspQrySyslogEvent, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQrySyslogEventTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySyslogEvent = pRspQrySyslogEvent;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnSyslogEventTopic = function (pRtnSyslogEvent){ 
        var data = {};
        data.message = EVENTS.RtnSyslogEventTopic; 
        data.callbackData = pRtnSyslogEvent;
        process.send(data); 
    }

    this.OnRspQryTradeDayChangeTopic = function (pRspQryTradeDayChange, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryTradeDayChangeTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryTradeDayChange = pRspQryTradeDayChange;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryWebAppInfoTopic = function (pRspQryWebAppInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryWebAppInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryWebAppInfo = pRspQryWebAppInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnWebAppInfoTopic = function (pRtnWebAppInfo){ 
        var data = {};
        data.message = EVENTS.RtnWebAppInfoTopic; 
        data.callbackData = pRtnWebAppInfo;
        process.send(data); 
    }

    this.OnRspQryServletInfoTopic = function (pRspQryServletInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryServletInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryServletInfo = pRspQryServletInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnServletInfoTopic = function (pRtnServletInfo){ 
        var data = {};
        data.message = EVENTS.RtnServletInfoTopic; 
        data.callbackData = pRtnServletInfo;
        process.send(data); 
    }

    this.OnRspQryFileInfoTopic = function (pRspQryFileInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryFileInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryFileInfo = pRspQryFileInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnFileInfoTopic = function (pRtnFileInfo){ 
        var data = {};
        data.message = EVENTS.RtnFileInfoTopic; 
        data.callbackData = pRtnFileInfo;
        process.send(data); 
    }

    this.OnRspQrySessionInfoTopic = function (pRspQrySessionInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQrySessionInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySessionInfo = pRspQrySessionInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnSessionInfoTopic = function (pRtnSessionInfo){ 
        var data = {};
        data.message = EVENTS.RtnSessionInfoTopic; 
        data.callbackData = pRtnSessionInfo;
        process.send(data); 
    }

    this.OnRspQryJDBCInfoTopic = function (pRspQryJDBCInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryJDBCInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryJDBCInfo = pRspQryJDBCInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnJDBCInfoTopic = function (pRtnJDBCInfo){ 
        var data = {};
        data.message = EVENTS.RtnJDBCInfoTopic; 
        data.callbackData = pRtnJDBCInfo;
        process.send(data); 
    }

    this.OnRspQryThreadInfoTopic = function (pRspQryThreadInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryThreadInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryThreadInfo = pRspQryThreadInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnThreadInfoTopic = function (pRtnThreadInfo){ 
        var data = {};
        data.message = EVENTS.RtnThreadInfoTopic; 
        data.callbackData = pRtnThreadInfo;
        process.send(data); 
    }

    this.OnRspQryVMInfoTopic = function (pRspQryVMInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryVMInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryVMInfo = pRspQryVMInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnVMInfoTopic = function (pRtnVMInfo){ 
        var data = {};
        data.message = EVENTS.RtnVMInfoTopic; 
        data.callbackData = pRtnVMInfo;
        process.send(data); 
    }

    this.OnRspQryPropertyInfoTopic = function (pRspQryPropertyInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryPropertyInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryPropertyInfo = pRspQryPropertyInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnPropertyInfoTopic = function (pRtnPropertyInfo){ 
        var data = {};
        data.message = EVENTS.RtnPropertyInfoTopic; 
        data.callbackData = pRtnPropertyInfo;
        process.send(data); 
    }

    this.OnRspQryMemPoolInfoTopic = function (pRspQryMemPoolInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryMemPoolInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryMemPoolInfo = pRspQryMemPoolInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnMemPoolInfoTopic = function (pRtnMemPoolInfo){ 
        var data = {};
        data.message = EVENTS.RtnMemPoolInfoTopic; 
        data.callbackData = pRtnMemPoolInfo;
        process.send(data); 
    }

    this.OnRspQryFileContentInfoTopic = function (pRspQryFileContentInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryFileContentInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryFileContentInfo = pRspQryFileContentInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnFileContentInfoTopic = function (pRtnFileContentInfo){ 
        var data = {};
        data.message = EVENTS.RtnFileContentInfoTopic; 
        data.callbackData = pRtnFileContentInfo;
        process.send(data); 
    }

    this.OnRspQryConnectionInfoTopic = function (pRspQryConnectionInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryConnectionInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryConnectionInfo = pRspQryConnectionInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnConnectionInfoTopic = function (pRtnConnectionInfo){ 
        var data = {};
        data.message = EVENTS.RtnConnectionInfoTopic; 
        data.callbackData = pRtnConnectionInfo;
        process.send(data); 
    }

    this.OnRspQryConnectorInfoTopic = function (pRspQryConnectorInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryConnectorInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryConnectorInfo = pRspQryConnectorInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnConnectorInfoTopic = function (pRtnConnectorInfo){ 
        var data = {};
        data.message = EVENTS.RtnConnectorInfoTopic; 
        data.callbackData = pRtnConnectorInfo;
        process.send(data); 
    }

    this.OnRspQryDBQueryTopic = function (pRspQryDBQuery, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryDBQueryTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryDBQuery = pRspQryDBQuery;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnDBQueryTopic = function (pRtnDBQuery){ 
        var data = {};
        data.message = EVENTS.RtnDBQueryTopic; 
        data.callbackData = pRtnDBQuery;
        process.send(data); 
    }

    this.OnRspQryGeneralFieldTopic = function (pSysGeneralField, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryGeneralFieldTopic; 
        data.callbackData = {}; 
        data.callbackData.pSysGeneralField = pSysGeneralField;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnGeneralFieldTopic = function (pSysGeneralField){ 
        var data = {};
        data.message = EVENTS.RtnGeneralFieldTopic; 
        data.callbackData = pSysGeneralField;
        process.send(data); 
    }

    this.OnRspQryGetFileTopic = function (pRspQryGetFile, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryGetFileTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryGetFile = pRspQryGetFile;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryWarningQueryTopic = function (pRspQryWarningQuery, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryWarningQueryTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryWarningQuery = pRspQryWarningQuery;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnWarningQueryTopic = function (pRtnWarningQuery){ 
        var data = {};
        data.message = EVENTS.RtnWarningQueryTopic; 
        data.callbackData = pRtnWarningQuery;
        process.send(data); 
    }

    this.OnRtnHostConfig = function (pRtnHostConfig){ 
        var data = {};
        data.message = EVENTS.RtnHostConfig; 
        data.callbackData = pRtnHostConfig;
        process.send(data); 
    }

    this.OnRspQryGeneralOperateTopic = function (pRspQryGeneralOperate, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryGeneralOperateTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryGeneralOperate = pRspQryGeneralOperate;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnGeneralOperateTopic = function (pRtnGeneralOperate){ 
        var data = {};
        data.message = EVENTS.RtnGeneralOperateTopic; 
        data.callbackData = pRtnGeneralOperate;
        process.send(data); 
    }

    this.OnRspQryNetDeviceLinkedTopic = function (pRspQryNetDeviceLinked, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetDeviceLinkedTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetDeviceLinked = pRspQryNetDeviceLinked;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetDeviceLinkedTopic = function (pRtnNetDeviceLinked){ 
        var data = {};
        data.message = EVENTS.RtnNetDeviceLinkedTopic; 
        data.callbackData = pRtnNetDeviceLinked;
        process.send(data); 
    }

    this.OnRspQryTradeUserLoginStatTopic = function (pRspQryTradeUserLoginStat, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryTradeUserLoginStatTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryTradeUserLoginStat = pRspQryTradeUserLoginStat;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryTradeFrontOrderRttStatTopic = function (pRspQryTradeFrontOrderRttStat, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryTradeFrontOrderRttStatTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryTradeFrontOrderRttStat = pRspQryTradeFrontOrderRttStat;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnTradeFrontOrderRttStatTopic = function (pRtnTradeFrontOrderRttStat){ 
        var data = {};
        data.message = EVENTS.RtnTradeFrontOrderRttStatTopic; 
        data.callbackData = pRtnTradeFrontOrderRttStat;
        process.send(data); 
    }

    this.OnRspQryParticTradeOrderStatesTopic = function (pRspQryParticTradeOrderStates, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryParticTradeOrderStatesTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryParticTradeOrderStates = pRspQryParticTradeOrderStates;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnParticTradeOrderStatesTopic = function (pRtnParticTradeOrderStates){ 
        var data = {};
        data.message = EVENTS.RtnParticTradeOrderStatesTopic; 
        data.callbackData = pRtnParticTradeOrderStates;
        process.send(data); 
    }

    this.OnRspQryRouterInfoTopic = function (pRspQryRouterInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryRouterInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryRouterInfo = pRspQryRouterInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnRouterInfoTopic = function (pRtnRouterInfo){ 
        var data = {};
        data.message = EVENTS.RtnRouterInfoTopic; 
        data.callbackData = pRtnRouterInfo;
        process.send(data); 
    }

    this.OnRspQryDiskIOTopic = function (pRspQryDiskIO, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryDiskIOTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryDiskIO = pRspQryDiskIO;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnDiskIOTopic = function (pRtnDiskIO){ 
        var data = {};
        data.message = EVENTS.RtnDiskIOTopic; 
        data.callbackData = pRtnDiskIO;
        process.send(data); 
    }

    this.OnRspQryStatInfoTopic = function (pRspQryStatInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryStatInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryStatInfo = pRspQryStatInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnStatInfoTopic = function (pRtnStatInfo){ 
        var data = {};
        data.message = EVENTS.RtnStatInfoTopic; 
        data.callbackData = pRtnStatInfo;
        process.send(data); 
    }

    this.OnRspQryTradeOrderRttCutLineTopic = function (pRspQryTradeOrderRttCutLine, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryTradeOrderRttCutLineTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryTradeOrderRttCutLine = pRspQryTradeOrderRttCutLine;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnTradeOrderRttCutLineTopic = function (pRtnTradeOrderRttCutLine){ 
        var data = {};
        data.message = EVENTS.RtnTradeOrderRttCutLineTopic; 
        data.callbackData = pRtnTradeOrderRttCutLine;
        process.send(data); 
    }

    this.OnRspQryClientInfoTopic = function (pRspQryClientInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryClientInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryClientInfo = pRspQryClientInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnClientInfoTopic = function (pRtnClientInfo){ 
        var data = {};
        data.message = EVENTS.RtnClientInfoTopic; 
        data.callbackData = pRtnClientInfo;
        process.send(data); 
    }

    this.OnRspQryEventDescriptionTopic = function (pRspQryEventDescription, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryEventDescriptionTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryEventDescription = pRspQryEventDescription;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnEventDescriptionTopic = function (pRtnEventDescription){ 
        var data = {};
        data.message = EVENTS.RtnEventDescriptionTopic; 
        data.callbackData = pRtnEventDescription;
        process.send(data); 
    }

    this.OnRspQryFrontUniqueIDTopic = function (pRspQryFrontUniqueID, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryFrontUniqueIDTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryFrontUniqueID = pRspQryFrontUniqueID;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnFrontUniqueIDTopic = function (pRtnFrontUniqueID){ 
        var data = {};
        data.message = EVENTS.RtnFrontUniqueIDTopic; 
        data.callbackData = pRtnFrontUniqueID;
        process.send(data); 
    }

    this.OnRspQryNetPartyLinkAddrChangeTopic = function (pRspQryNetPartyLinkAddrChange, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetPartyLinkAddrChangeTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetPartyLinkAddrChange = pRspQryNetPartyLinkAddrChange;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetPartyLinkAddrChangeTopic = function (pRtnNetPartyLinkAddrChange){ 
        var data = {};
        data.message = EVENTS.RtnNetPartyLinkAddrChangeTopic; 
        data.callbackData = pRtnNetPartyLinkAddrChange;
        process.send(data); 
    }

    this.OnRspQryNetDelPartyLinkInfoTopic = function (pRspQryNetDelPartyLinkInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetDelPartyLinkInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetDelPartyLinkInfo = pRspQryNetDelPartyLinkInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetDelPartyLinkInfoTopic = function (pRtnNetDelPartyLinkInfo){ 
        var data = {};
        data.message = EVENTS.RtnNetDelPartyLinkInfoTopic; 
        data.callbackData = pRtnNetDelPartyLinkInfo;
        process.send(data); 
    }

    this.OnRspQryPerformanceTopTopic = function (pRspQryPerformanceTop, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryPerformanceTopTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryPerformanceTop = pRspQryPerformanceTop;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnPerformanceTopTopic = function (pRtnPerformanceTop){ 
        var data = {};
        data.message = EVENTS.RtnPerformanceTopTopic; 
        data.callbackData = pRtnPerformanceTop;
        process.send(data); 
    }

    this.OnRspQryInstrumentStatusTopic = function (pRspQryInstrumentStatus, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryInstrumentStatusTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryInstrumentStatus = pRspQryInstrumentStatus;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnInstrumentStatusTopic = function (pRtnInstrumentStatus){ 
        var data = {};
        data.message = EVENTS.RtnInstrumentStatusTopic; 
        data.callbackData = pRtnInstrumentStatus;
        process.send(data); 
    }

    this.OnRspQryCurrTradingSegmentAttrTopic = function (pRspQryCurrTradingSegmentAttr, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryCurrTradingSegmentAttrTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryCurrTradingSegmentAttr = pRspQryCurrTradingSegmentAttr;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnCurrTradingSegmentAttrTopic = function (pRtnCurrTradingSegmentAttr){ 
        var data = {};
        data.message = EVENTS.RtnCurrTradingSegmentAttrTopic; 
        data.callbackData = pRtnCurrTradingSegmentAttr;
        process.send(data); 
    }

    this.OnRspQryNetAreaTopic = function (pRspQryNetArea, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetAreaTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetArea = pRspQryNetArea;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetAreaTopic = function (pRtnNetArea){ 
        var data = {};
        data.message = EVENTS.RtnNetAreaTopic; 
        data.callbackData = pRtnNetArea;
        process.send(data); 
    }

    this.OnRspQryNetSubAreaTopic = function (pRspQryNetSubArea, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetSubAreaTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetSubArea = pRspQryNetSubArea;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetSubAreaTopic = function (pRtnNetSubArea){ 
        var data = {};
        data.message = EVENTS.RtnNetSubAreaTopic; 
        data.callbackData = pRtnNetSubArea;
        process.send(data); 
    }

    this.OnRspQryNetSubAreaIPTopic = function (pRspQryNetSubAreaIP, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetSubAreaIPTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetSubAreaIP = pRspQryNetSubAreaIP;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetSubAreaIPTopic = function (pRtnNetSubAreaIP){ 
        var data = {};
        data.message = EVENTS.RtnNetSubAreaIPTopic; 
        data.callbackData = pRtnNetSubAreaIP;
        process.send(data); 
    }

    this.OnRspQryNetDeviceTopic = function (pRspQryNetDevice, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetDeviceTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetDevice = pRspQryNetDevice;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetDeviceTopic = function (pRtnNetDevice){ 
        var data = {};
        data.message = EVENTS.RtnNetDeviceTopic; 
        data.callbackData = pRtnNetDevice;
        process.send(data); 
    }

    this.OnRspQryNetDeviceDetectTopic = function (pRspQryNetDeviceDetect, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetDeviceDetectTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetDeviceDetect = pRspQryNetDeviceDetect;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRspQryNetBuildingTopic = function (pRspQryNetBuilding, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetBuildingTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetBuilding = pRspQryNetBuilding;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetBuildingTopic = function (pRtnNetBuilding){ 
        var data = {};
        data.message = EVENTS.RtnNetBuildingTopic; 
        data.callbackData = pRtnNetBuilding;
        process.send(data); 
    }

    this.OnRspQryNetRoomTopic = function (pRspQryNetRoom, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetRoomTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetRoom = pRspQryNetRoom;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetRoomTopic = function (pRtnNetRoom){ 
        var data = {};
        data.message = EVENTS.RtnNetRoomTopic; 
        data.callbackData = pRtnNetRoom;
        process.send(data); 
    }

    this.OnRspQryNetCabinetsTopic = function (pRspQryNetCabinets, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetCabinetsTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetCabinets = pRspQryNetCabinets;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetCabinetsTopic = function (pRtnNetCabinets){ 
        var data = {};
        data.message = EVENTS.RtnNetCabinetsTopic; 
        data.callbackData = pRtnNetCabinets;
        process.send(data); 
    }

    this.OnRspQryNetOIDTopic = function (pRspQryNetOID, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetOIDTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetOID = pRspQryNetOID;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetOIDTopic = function (pRtnNetOID){ 
        var data = {};
        data.message = EVENTS.RtnNetOIDTopic; 
        data.callbackData = pRtnNetOID;
        process.send(data); 
    }

    this.OnRspQryNetTimePolicyTopic = function (pRspQryNetTimePolicy, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetTimePolicyTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetTimePolicy = pRspQryNetTimePolicy;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetTimePolicyTopic = function (pRtnNetTimePolicy){ 
        var data = {};
        data.message = EVENTS.RtnNetTimePolicyTopic; 
        data.callbackData = pRtnNetTimePolicy;
        process.send(data); 
    }

    this.OnRspQryNetGatherTaskTopic = function (pRspQryNetGatherTask, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetGatherTaskTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetGatherTask = pRspQryNetGatherTask;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetGatherTaskTopic = function (pRtnNetGatherTask){ 
        var data = {};
        data.message = EVENTS.RtnNetGatherTaskTopic; 
        data.callbackData = pRtnNetGatherTask;
        process.send(data); 
    }

    this.OnRspQryNetDeviceChgTopic = function (pRspQryNetDeviceChg, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetDeviceChgTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetDeviceChg = pRspQryNetDeviceChg;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetDeviceChgTopic = function (pRtnNetDeviceChg){ 
        var data = {};
        data.message = EVENTS.RtnNetDeviceChgTopic; 
        data.callbackData = pRtnNetDeviceChg;
        process.send(data); 
    }

    this.OnRspQryNetDeviceTypeTopic = function (pRspQryNetDeviceType, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetDeviceTypeTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetDeviceType = pRspQryNetDeviceType;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetDeviceTypeTopic = function (pRtnNetDeviceType){ 
        var data = {};
        data.message = EVENTS.RtnNetDeviceTypeTopic; 
        data.callbackData = pRtnNetDeviceType;
        process.send(data); 
    }

    this.OnRspQryNetDeviceCategoryTopic = function (pRspQryNetDeviceCategory, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetDeviceCategoryTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetDeviceCategory = pRspQryNetDeviceCategory;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetDeviceCategoryTopic = function (pRtnNetDeviceCategory){ 
        var data = {};
        data.message = EVENTS.RtnNetDeviceCategoryTopic; 
        data.callbackData = pRtnNetDeviceCategory;
        process.send(data); 
    }

    this.OnRspQryNetManufactoryTopic = function (pRspQryNetManufactory, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetManufactoryTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetManufactory = pRspQryNetManufactory;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetManufactoryTopic = function (pRtnNetManufactory){ 
        var data = {};
        data.message = EVENTS.RtnNetManufactoryTopic; 
        data.callbackData = pRtnNetManufactory;
        process.send(data); 
    }

    this.OnRspQryNetCommunityTopic = function (pRspQryNetCommunity, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetCommunityTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetCommunity = pRspQryNetCommunity;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetCommunityTopic = function (pRtnNetCommunity){ 
        var data = {};
        data.message = EVENTS.RtnNetCommunityTopic; 
        data.callbackData = pRtnNetCommunity;
        process.send(data); 
    }

    this.OnRspQryNetPortTypeTopic = function (pRspQryNetPortType, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetPortTypeTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetPortType = pRspQryNetPortType;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetPortTypeTopic = function (pRtnNetPortType){ 
        var data = {};
        data.message = EVENTS.RtnNetPortTypeTopic; 
        data.callbackData = pRtnNetPortType;
        process.send(data); 
    }

    this.OnRspQryNetPartAccessSpotTopic = function (pRspQryNetPartAccessSpot, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetPartAccessSpotTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetPartAccessSpot = pRspQryNetPartAccessSpot;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetPartAccessSpotTopic = function (pRtnNetPartAccessSpot){ 
        var data = {};
        data.message = EVENTS.RtnNetPartAccessSpotTopic; 
        data.callbackData = pRtnNetPartAccessSpot;
        process.send(data); 
    }

    this.OnRspQryNetInterfaceTopic = function (pRspQryNetInterface, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetInterfaceTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetInterface = pRspQryNetInterface;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetInterfaceTopic = function (pRtnNetInterface){ 
        var data = {};
        data.message = EVENTS.RtnNetInterfaceTopic; 
        data.callbackData = pRtnNetInterface;
        process.send(data); 
    }

    this.OnRspQryNetGeneralOIDTopic = function (pRspQryNetGeneralOID, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetGeneralOIDTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetGeneralOID = pRspQryNetGeneralOID;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetGeneralOIDTopic = function (pRtnNetGeneralOID){ 
        var data = {};
        data.message = EVENTS.RtnNetGeneralOIDTopic; 
        data.callbackData = pRtnNetGeneralOID;
        process.send(data); 
    }

    this.OnRspQryNetMonitorTypeTopic = function (pRspQryNetMonitorType, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTypeTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorType = pRspQryNetMonitorType;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorTypeTopic = function (pRtnNetMonitorType){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorTypeTopic; 
        data.callbackData = pRtnNetMonitorType;
        process.send(data); 
    }

    this.OnRspQryNetMonitorAttrScopeTopic = function (pRspQryNetMonitorAttrScope, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorAttrScopeTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorAttrScope = pRspQryNetMonitorAttrScope;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorAttrScopeTopic = function (pRtnNetMonitorAttrScope){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorAttrScopeTopic; 
        data.callbackData = pRtnNetMonitorAttrScope;
        process.send(data); 
    }

    this.OnRspQryNetMonitorAttrTypeTopic = function (pRspQryNetMonitorAttrType, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorAttrTypeTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorAttrType = pRspQryNetMonitorAttrType;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorAttrTypeTopic = function (pRtnNetMonitorAttrType){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorAttrTypeTopic; 
        data.callbackData = pRtnNetMonitorAttrType;
        process.send(data); 
    }

    this.OnRspQryNetMonitorObjectAttrTopic = function (pRspQryNetMonitorObjectAttr, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorObjectAttrTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorObjectAttr = pRspQryNetMonitorObjectAttr;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorObjectAttrTopic = function (pRtnNetMonitorObjectAttr){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorObjectAttrTopic; 
        data.callbackData = pRtnNetMonitorObjectAttr;
        process.send(data); 
    }

    this.OnRspQryNetFuncAreaTopic = function (pRspQryNetFuncArea, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetFuncAreaTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetFuncArea = pRspQryNetFuncArea;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetFuncAreaTopic = function (pRtnNetFuncArea){ 
        var data = {};
        data.message = EVENTS.RtnNetFuncAreaTopic; 
        data.callbackData = pRtnNetFuncArea;
        process.send(data); 
    }

    this.OnRspQryNetMonitorCommandTypeTopic = function (pRspQryNetMonitorCommandType, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorCommandTypeTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorCommandType = pRspQryNetMonitorCommandType;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorCommandTypeTopic = function (pRtnNetMonitorCommandType){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorCommandTypeTopic; 
        data.callbackData = pRtnNetMonitorCommandType;
        process.send(data); 
    }

    this.OnRspQryNetMonitorActionGroupTopic = function (pRspQryNetMonitorActionGroup, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorActionGroupTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorActionGroup = pRspQryNetMonitorActionGroup;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorActionGroupTopic = function (pRtnNetMonitorActionGroup){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorActionGroupTopic; 
        data.callbackData = pRtnNetMonitorActionGroup;
        process.send(data); 
    }

    this.OnRspQryNetMonitorDeviceGroupTopic = function (pRspQryNetMonitorDeviceGroup, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorDeviceGroupTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorDeviceGroup = pRspQryNetMonitorDeviceGroup;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorDeviceGroupTopic = function (pRtnNetMonitorDeviceGroup){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorDeviceGroupTopic; 
        data.callbackData = pRtnNetMonitorDeviceGroup;
        process.send(data); 
    }

    this.OnRspQryNetMonitorTaskInfoTopic = function (pRspQryNetMonitorTaskInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTaskInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorTaskInfo = pRspQryNetMonitorTaskInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorTaskInfoTopic = function (pRtnNetMonitorTaskInfo){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorTaskInfoTopic; 
        data.callbackData = pRtnNetMonitorTaskInfo;
        process.send(data); 
    }

    this.OnRspQryNetMonitorTaskResultTopic = function (pRspQryNetMonitorTaskResult, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTaskResultTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorTaskResult = pRspQryNetMonitorTaskResult;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorTaskResultTopic = function (pRtnNetMonitorTaskResult){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorTaskResultTopic; 
        data.callbackData = pRtnNetMonitorTaskResult;
        process.send(data); 
    }

    this.OnRspQryNetMonitorTaskObjectSetTopic = function (pRspQryNetMonitorTaskObjectSet, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTaskObjectSetTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorTaskObjectSet = pRspQryNetMonitorTaskObjectSet;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorTaskObjectSetTopic = function (pRtnNetMonitorTaskObjectSet){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorTaskObjectSetTopic; 
        data.callbackData = pRtnNetMonitorTaskObjectSet;
        process.send(data); 
    }

    this.OnRspQryNetPartyLinkInfoTopic = function (pRspQryNetPartyLinkInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetPartyLinkInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetPartyLinkInfo = pRspQryNetPartyLinkInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetPartyLinkInfoTopic = function (pRtnNetPartyLinkInfo){ 
        var data = {};
        data.message = EVENTS.RtnNetPartyLinkInfoTopic; 
        data.callbackData = pRtnNetPartyLinkInfo;
        process.send(data); 
    }

    this.OnRspQryNetMonitorActionAttrTopic = function (pRspQryNetMonitorActionAttr, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorActionAttrTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorActionAttr = pRspQryNetMonitorActionAttr;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorActionAttrTopic = function (pRtnNetMonitorActionAttr){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorActionAttrTopic; 
        data.callbackData = pRtnNetMonitorActionAttr;
        process.send(data); 
    }

    this.OnRspQryNetModuleTopic = function (pRspQryNetModule, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetModuleTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetModule = pRspQryNetModule;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetModuleTopic = function (pRtnNetModule){ 
        var data = {};
        data.message = EVENTS.RtnNetModuleTopic; 
        data.callbackData = pRtnNetModule;
        process.send(data); 
    }

    this.OnRspQryNetEventExprTopic = function (pRspQryNetEventExpr, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetEventExprTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetEventExpr = pRspQryNetEventExpr;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetEventExprTopic = function (pRtnNetEventExpr){ 
        var data = {};
        data.message = EVENTS.RtnNetEventExprTopic; 
        data.callbackData = pRtnNetEventExpr;
        process.send(data); 
    }

    this.OnRspQryNetEventTypeTopic = function (pRspQryNetEventType, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetEventTypeTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetEventType = pRspQryNetEventType;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetEventTypeTopic = function (pRtnNetEventType){ 
        var data = {};
        data.message = EVENTS.RtnNetEventTypeTopic; 
        data.callbackData = pRtnNetEventType;
        process.send(data); 
    }

    this.OnRspQryNetSubEventTypeTopic = function (pRspQryNetSubEventType, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetSubEventTypeTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetSubEventType = pRspQryNetSubEventType;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetSubEventTypeTopic = function (pRtnNetSubEventType){ 
        var data = {};
        data.message = EVENTS.RtnNetSubEventTypeTopic; 
        data.callbackData = pRtnNetSubEventType;
        process.send(data); 
    }

    this.OnRspQryNetEventLevelTopic = function (pRspQryNetEventLevel, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetEventLevelTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetEventLevel = pRspQryNetEventLevel;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetEventLevelTopic = function (pRtnNetEventLevel){ 
        var data = {};
        data.message = EVENTS.RtnNetEventLevelTopic; 
        data.callbackData = pRtnNetEventLevel;
        process.send(data); 
    }

    this.OnRspQryNetMonitorTaskStatusResultTopic = function (pRspQryNetMonitorTaskStatusResult, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTaskStatusResultTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorTaskStatusResult = pRspQryNetMonitorTaskStatusResult;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorTaskStatusResultTopic = function (pRtnNetMonitorTaskStatusResult){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorTaskStatusResultTopic; 
        data.callbackData = pRtnNetMonitorTaskStatusResult;
        process.send(data); 
    }

    this.OnRspQryNetCfgFileTopic = function (pRspQryNetCfgFile, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetCfgFileTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetCfgFile = pRspQryNetCfgFile;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetCfgFileTopic = function (pRtnNetCfgFile){ 
        var data = {};
        data.message = EVENTS.RtnNetCfgFileTopic; 
        data.callbackData = pRtnNetCfgFile;
        process.send(data); 
    }

    this.OnRspQryNetMonitorDeviceTaskTopic = function (pRspQryNetMonitorDeviceTask, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorDeviceTaskTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorDeviceTask = pRspQryNetMonitorDeviceTask;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorDeviceTaskTopic = function (pRtnNetMonitorDeviceTask){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorDeviceTaskTopic; 
        data.callbackData = pRtnNetMonitorDeviceTask;
        process.send(data); 
    }

    this.OnRspQryNetMonitorTaskInstAttrsTopic = function (pRspQryNetMonitorTaskInstAttrs, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMonitorTaskInstAttrsTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMonitorTaskInstAttrs = pRspQryNetMonitorTaskInstAttrs;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMonitorTaskInstAttrsTopic = function (pRtnNetMonitorTaskInstAttrs){ 
        var data = {};
        data.message = EVENTS.RtnNetMonitorTaskInstAttrsTopic; 
        data.callbackData = pRtnNetMonitorTaskInstAttrs;
        process.send(data); 
    }

    this.OnRspQryFileGeneralOperTopic = function (pRspQryFileGeneralOper, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryFileGeneralOperTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryFileGeneralOper = pRspQryFileGeneralOper;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnFileGeneralOperTopic = function (pRtnFileGeneralOper){ 
        var data = {};
        data.message = EVENTS.RtnFileGeneralOperTopic; 
        data.callbackData = pRtnFileGeneralOper;
        process.send(data); 
    }

    this.OnRspQryNetBaseLineTopic = function (pRspQryNetBaseLine, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetBaseLineTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetBaseLine = pRspQryNetBaseLine;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetBaseLineTopic = function (pRtnNetBaseLine){ 
        var data = {};
        data.message = EVENTS.RtnNetBaseLineTopic; 
        data.callbackData = pRtnNetBaseLine;
        process.send(data); 
    }

    this.OnRspQryNetBaseLineTaskTopic = function (pRspQryNetBaseLineTask, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetBaseLineTaskTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetBaseLineTask = pRspQryNetBaseLineTask;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetBaseLineTaskTopic = function (pRtnNetBaseLineTask){ 
        var data = {};
        data.message = EVENTS.RtnNetBaseLineTaskTopic; 
        data.callbackData = pRtnNetBaseLineTask;
        process.send(data); 
    }

    this.OnRspQryNetBaseLineResultTopic = function (pRspQryNetBaseLineResult, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetBaseLineResultTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetBaseLineResult = pRspQryNetBaseLineResult;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetBaseLineResultTopic = function (pRtnNetBaseLineResult){ 
        var data = {};
        data.message = EVENTS.RtnNetBaseLineResultTopic; 
        data.callbackData = pRtnNetBaseLineResult;
        process.send(data); 
    }

    this.OnRspQryNetPartyLinkStatusInfoTopic = function (pRspQryNetPartyLinkStatusInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetPartyLinkStatusInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetPartyLinkStatusInfo = pRspQryNetPartyLinkStatusInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetPartyLinkStatusInfoTopic = function (pRtnNetPartyLinkStatusInfo){ 
        var data = {};
        data.message = EVENTS.RtnNetPartyLinkStatusInfoTopic; 
        data.callbackData = pRtnNetPartyLinkStatusInfo;
        process.send(data); 
    }

    this.OnRspQryNetMemberSDHLineInfoTopic = function (pRspQryNetMemberSDHLineInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetMemberSDHLineInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetMemberSDHLineInfo = pRspQryNetMemberSDHLineInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetMemberSDHLineInfoTopic = function (pRtnNetMemberSDHLineInfo){ 
        var data = {};
        data.message = EVENTS.RtnNetMemberSDHLineInfoTopic; 
        data.callbackData = pRtnNetMemberSDHLineInfo;
        process.send(data); 
    }

    this.OnRspQryNetDDNLinkInfoTopic = function (pRspQryNetDDNLinkInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetDDNLinkInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetDDNLinkInfo = pRspQryNetDDNLinkInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetDDNLinkInfoTopic = function (pRtnNetDDNLinkInfo){ 
        var data = {};
        data.message = EVENTS.RtnNetDDNLinkInfoTopic; 
        data.callbackData = pRtnNetDDNLinkInfo;
        process.send(data); 
    }

    this.OnRspQryNetPseudMemberLinkInfoTopic = function (pRspQryNetPseudMemberLinkInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetPseudMemberLinkInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetPseudMemberLinkInfo = pRspQryNetPseudMemberLinkInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetPseudMemberLinkInfoTopic = function (pRtnNetPseudMemberLinkInfo){ 
        var data = {};
        data.message = EVENTS.RtnNetPseudMemberLinkInfoTopic; 
        data.callbackData = pRtnNetPseudMemberLinkInfo;
        process.send(data); 
    }

    this.OnRspQryOuterDeviceInfTopic = function (pRspQryOuterDeviceInf, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryOuterDeviceInfTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryOuterDeviceInf = pRspQryOuterDeviceInf;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetOuterDeviceInfTopic = function (pRtnNetOuterDeviceInf){ 
        var data = {};
        data.message = EVENTS.RtnNetOuterDeviceInfTopic; 
        data.callbackData = pRtnNetOuterDeviceInf;
        process.send(data); 
    }

    this.OnRspQryNetLocalPingResultInfoTopic = function (pRspQryNetLocalPingResultInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetLocalPingResultInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetLocalPingResultInfo = pRspQryNetLocalPingResultInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetLocalPingResultInfoTopic = function (pRtnNetLocalPingResultInfo){ 
        var data = {};
        data.message = EVENTS.RtnNetLocalPingResultInfoTopic; 
        data.callbackData = pRtnNetLocalPingResultInfo;
        process.send(data); 
    }

    this.OnRspQryNetRomotePingResultInfoTopic = function (pRspQryNetRomotePingResultInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetRomotePingResultInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetRomotePingResultInfo = pRspQryNetRomotePingResultInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetRomotePingResultInfoTopic = function (pRtnNetRomotePingResultInfo){ 
        var data = {};
        data.message = EVENTS.RtnNetRomotePingResultInfoTopic; 
        data.callbackData = pRtnNetRomotePingResultInfo;
        process.send(data); 
    }

    this.OnRtnMonitorTopProcessInfo = function (pRtnMonitorTopProcessInfo){ 
        var data = {};
        data.message = EVENTS.RtnMonitorTopProcessInfo; 
        data.callbackData = pRtnMonitorTopProcessInfo;
        process.send(data); 
    }

    this.OnRspQrySysInternalTopologyTopic = function (pRspQrySysInternalTopology, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQrySysInternalTopologyTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQrySysInternalTopology = pRspQrySysInternalTopology;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnSysInternalTopologyTopic = function (pRtnSysInternalTopology){ 
        var data = {};
        data.message = EVENTS.RtnSysInternalTopologyTopic; 
        data.callbackData = pRtnSysInternalTopology;
        process.send(data); 
    }

    this.OnRspQryMemberLinkCostTopic = function (pRspQryMemberLinkCost, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryMemberLinkCostTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryMemberLinkCost = pRspQryMemberLinkCost;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnMemberLinkCostTopic = function (pRtnMemberLinkCost){ 
        var data = {};
        data.message = EVENTS.RtnMemberLinkCostTopic; 
        data.callbackData = pRtnMemberLinkCost;
        process.send(data); 
    }

    this.OnRspQryNetPartylinkMonthlyRentTopic = function (pRspQryNetPartylinkMonthlyRent, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetPartylinkMonthlyRentTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetPartylinkMonthlyRent = pRspQryNetPartylinkMonthlyRent;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetPartylinkMonthlyRentTopic = function (pRtnNetPartylinkMonthlyRent){ 
        var data = {};
        data.message = EVENTS.RtnNetPartylinkMonthlyRentTopic; 
        data.callbackData = pRtnNetPartylinkMonthlyRent;
        process.send(data); 
    }

    this.OnRspQryNetNonPartyLinkInfoTopic = function (pRspQryNetNonPartyLinkInfo, pRspInfo, nRequestID, bIsLast) {
        var data = {};
        data.message = EVENTS.RspQryNetNonPartyLinkInfoTopic; 
        data.callbackData = {}; 
        data.callbackData.pRspQryNetNonPartyLinkInfo = pRspQryNetNonPartyLinkInfo;
        data.callbackData.pRspInfo = pRspInfo;
        data.callbackData.nRequestID = nRequestID;
        data.callbackData.bIsLast = bIsLast;
        process.send(data); 
    }

    this.OnRtnNetNonPartyLinkInfoTopic = function (pRtnNetNonPartyLinkInfo){ 
        var data = {};
        data.message = EVENTS.RtnNetNonPartyLinkInfoTopic; 
        data.callbackData = pRtnNetNonPartyLinkInfo;
        process.send(data); 
    }

}

exports.Spi = Spi;
