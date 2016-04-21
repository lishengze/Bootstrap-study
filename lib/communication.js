var events    = require("./events.js");
var EVENTS    = new events.EVENTS();

var Spi = function(){
    
    this.user = {};    
    
    this.OnFrontConnected = function () {
        this.user.socket.emit(EVENTS.FrontConnected, {});        
    }
    
    this.OnFrontDisConnected = function (nReason) {
        this.user.socket.emit(EVENTS.FrontDisConnected, nReason);    
    }
    
    this.OnHeartBeatWarning = function (nTimeLapse) {
        this.user.socket.emit(EVENTS.HeartBeatWarning, nTimeLapse);      
    }         
          
    this.OnRspQryTopCpuInfoTopic = function (pRspQryTopCpuInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryTopCpuInfo = pRspQryTopCpuInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryTopCpuInfoTopic, callbackData);
    }

    this.OnRtnTopCpuInfoTopic = function (pRtnTopCpuInfo){ 
        this.user.socket.emit(EVENTS.RtnTopCpuInfoTopic, pRtnTopCpuInfo);
    }

    this.OnRspQryTopMemInfoTopic = function (pRspQryTopMemInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryTopMemInfo = pRspQryTopMemInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryTopMemInfoTopic, callbackData);
    }

    this.OnRtnTopMemInfoTopic = function (pRtnTopMemInfo){ 
        this.user.socket.emit(EVENTS.RtnTopMemInfoTopic, pRtnTopMemInfo);
    }

    this.OnRspQryTopProcessInfoTopic = function (pRspQryTopProcessInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryTopProcessInfo = pRspQryTopProcessInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryTopProcessInfoTopic, callbackData);
    }

    this.OnRtnTopProcessInfoTopic = function (pRtnTopProcessInfo){ 
        this.user.socket.emit(EVENTS.RtnTopProcessInfoTopic, pRtnTopProcessInfo);
    }

    this.OnRspQryFileSystemInfoTopic = function (pRspQryFileSystemInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryFileSystemInfo = pRspQryFileSystemInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryFileSystemInfoTopic, callbackData);
    }

    this.OnRtnFileSystemInfoTopic = function (pRtnFileSystemInfo){ 
        this.user.socket.emit(EVENTS.RtnFileSystemInfoTopic, pRtnFileSystemInfo);
    }

    this.OnRspQryNetworkInfoTopic = function (pRspQryNetworkInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetworkInfo = pRspQryNetworkInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetworkInfoTopic, callbackData);
    }

    this.OnRtnNetworkInfoTopic = function (pRtnNetworkInfo){ 
        this.user.socket.emit(EVENTS.RtnNetworkInfoTopic, pRtnNetworkInfo);
    }

    this.OnRspQryClientLoginTopic = function (pRspQryClientLogin, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryClientLogin = pRspQryClientLogin;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryClientLoginTopic, callbackData);
    }

    this.OnRspQryMonitorObjectTopic = function (pRspQryMonitorObject, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryMonitorObject = pRspQryMonitorObject;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryMonitorObjectTopic, callbackData);
    }

    this.OnRtnMonitorObjectTopic = function (pRtnMonitorObject){ 
        this.user.socket.emit(EVENTS.RtnMonitorObjectTopic, pRtnMonitorObject);
    }

    this.OnRspQryObjectRationalTopic = function (pRspQryObjectRational, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryObjectRational = pRspQryObjectRational;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryObjectRationalTopic, callbackData);
    }

    this.OnRtnObjectRationalTopic = function (pRtnObjectRational){ 
        this.user.socket.emit(EVENTS.RtnObjectRationalTopic, pRtnObjectRational);
    }

    this.OnRspQrySyslogInfoTopic = function (pRspQrySyslogInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySyslogInfo = pRspQrySyslogInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySyslogInfoTopic, callbackData);
    }

    this.OnRtnSyslogInfoTopic = function (pRtnSyslogInfo){ 
        this.user.socket.emit(EVENTS.RtnSyslogInfoTopic, pRtnSyslogInfo);
    }

    this.OnRspQrySubscriberTopic = function (pRspQrySubscriber, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySubscriber = pRspQrySubscriber;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySubscriberTopic, callbackData);
    }

    this.OnRspQryOidRelationTopic = function (pRspQryOidRelation, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryOidRelation = pRspQryOidRelation;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryOidRelationTopic, callbackData);
    }

    this.OnRtnOidRelationTopic = function (pRtnOidRelation){ 
        this.user.socket.emit(EVENTS.RtnOidRelationTopic, pRtnOidRelation);
    }

    this.OnRspQryUserInfoTopic = function (pRspQryUserInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryUserInfo = pRspQryUserInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryUserInfoTopic, callbackData);
    }

    this.OnRtnUserInfoTopic = function (pRtnUserInfo){ 
        this.user.socket.emit(EVENTS.RtnUserInfoTopic, pRtnUserInfo);
    }

    this.OnRspQryOnlineUserInfoTopic = function (pRspQryOnlineUserInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryOnlineUserInfo = pRspQryOnlineUserInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryOnlineUserInfoTopic, callbackData);
    }

    this.OnRtnOnlineUserInfoTopic = function (pRtnOnlineUserInfo){ 
        this.user.socket.emit(EVENTS.RtnOnlineUserInfoTopic, pRtnOnlineUserInfo);
    }

    this.OnRspQryWarningEventTopic = function (pRspQryWarningEvent, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryWarningEvent = pRspQryWarningEvent;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryWarningEventTopic, callbackData);
    }

    this.OnRtnWarningEventTopic = function (pRtnWarningEvent){ 
        this.user.socket.emit(EVENTS.RtnWarningEventTopic, pRtnWarningEvent);
    }

    this.OnRspQryCPUUsageTopic = function (pRspQryCPUUsage, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryCPUUsage = pRspQryCPUUsage;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryCPUUsageTopic, callbackData);
    }

    this.OnRtnCPUUsageTopic = function (pRtnCPUUsage){ 
        this.user.socket.emit(EVENTS.RtnCPUUsageTopic, pRtnCPUUsage);
    }

    this.OnRspQryMemoryUsageTopic = function (pRspQryMemoryUsage, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryMemoryUsage = pRspQryMemoryUsage;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryMemoryUsageTopic, callbackData);
    }

    this.OnRtnMemoryUsageTopic = function (pRtnMemoryUsage){ 
        this.user.socket.emit(EVENTS.RtnMemoryUsageTopic, pRtnMemoryUsage);
    }

    this.OnRspQryDiskUsageTopic = function (pRspQryDiskUsage, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryDiskUsage = pRspQryDiskUsage;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryDiskUsageTopic, callbackData);
    }

    this.OnRtnDiskUsageTopic = function (pRtnDiskUsage){ 
        this.user.socket.emit(EVENTS.RtnDiskUsageTopic, pRtnDiskUsage);
    }

    this.OnRspQryObjectAttrTopic = function (pRspQryObjectAttr, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryObjectAttr = pRspQryObjectAttr;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryObjectAttrTopic, callbackData);
    }

    this.OnRtnObjectAttrTopic = function (pRtnObjectAttr){ 
        this.user.socket.emit(EVENTS.RtnObjectAttrTopic, pRtnObjectAttr);
    }

    this.OnRspQryInvalidateOrderTopic = function (pRspQryInvalidateOrder, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryInvalidateOrder = pRspQryInvalidateOrder;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryInvalidateOrderTopic, callbackData);
    }

    this.OnRtnInvalidateOrderTopic = function (pRtnInvalidateOrder){ 
        this.user.socket.emit(EVENTS.RtnInvalidateOrderTopic, pRtnInvalidateOrder);
    }

    this.OnRspQryOrderStatusTopic = function (pRspQryOrderStatus, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryOrderStatus = pRspQryOrderStatus;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryOrderStatusTopic, callbackData);
    }

    this.OnRtnOrderStatusTopic = function (pRtnOrderStatus){ 
        this.user.socket.emit(EVENTS.RtnOrderStatusTopic, pRtnOrderStatus);
    }

    this.OnRspQryBargainOrderTopic = function (pRspQryBargainOrder, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryBargainOrder = pRspQryBargainOrder;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryBargainOrderTopic, callbackData);
    }

    this.OnRtnBargainOrderTopic = function (pRtnBargainOrder){ 
        this.user.socket.emit(EVENTS.RtnBargainOrderTopic, pRtnBargainOrder);
    }

    this.OnRspQryInstPropertyTopic = function (pRspQryInstProperty, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryInstProperty = pRspQryInstProperty;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryInstPropertyTopic, callbackData);
    }

    this.OnRtnInstPropertyTopic = function (pRtnInstProperty){ 
        this.user.socket.emit(EVENTS.RtnInstPropertyTopic, pRtnInstProperty);
    }

    this.OnRspQryMarginRateTopic = function (pRspQryMarginRate, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryMarginRate = pRspQryMarginRate;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryMarginRateTopic, callbackData);
    }

    this.OnRtnMarginRateTopic = function (pRtnMarginRate){ 
        this.user.socket.emit(EVENTS.RtnMarginRateTopic, pRtnMarginRate);
    }

    this.OnRspQryPriceLimitTopic = function (pRspQryPriceLimit, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryPriceLimit = pRspQryPriceLimit;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryPriceLimitTopic, callbackData);
    }

    this.OnRtnPriceLimitTopic = function (pRtnPriceLimit){ 
        this.user.socket.emit(EVENTS.RtnPriceLimitTopic, pRtnPriceLimit);
    }

    this.OnRspQryPartPosiLimitTopic = function (pRspQryPartPosiLimit, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryPartPosiLimit = pRspQryPartPosiLimit;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryPartPosiLimitTopic, callbackData);
    }

    this.OnRtnPartPosiLimitTopic = function (pRtnPartPosiLimit){ 
        this.user.socket.emit(EVENTS.RtnPartPosiLimitTopic, pRtnPartPosiLimit);
    }

    this.OnRspQryClientPosiLimitTopic = function (pRspQryClientPosiLimit, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryClientPosiLimit = pRspQryClientPosiLimit;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryClientPosiLimitTopic, callbackData);
    }

    this.OnRtnClientPosiLimitTopic = function (pRtnClientPosiLimit){ 
        this.user.socket.emit(EVENTS.RtnClientPosiLimitTopic, pRtnClientPosiLimit);
    }

    this.OnRspQrySpecialPosiLimitTopic = function (pRspQrySpecialPosiLimit, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySpecialPosiLimit = pRspQrySpecialPosiLimit;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySpecialPosiLimitTopic, callbackData);
    }

    this.OnRtnSpecialPosiLimitTopic = function (pRtnSpecialPosiLimit){ 
        this.user.socket.emit(EVENTS.RtnSpecialPosiLimitTopic, pRtnSpecialPosiLimit);
    }

    this.OnRspQryTransactionChgTopic = function (pRspQryTransactionChg, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryTransactionChg = pRspQryTransactionChg;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryTransactionChgTopic, callbackData);
    }

    this.OnRtnTransactionChgTopic = function (pRtnTransactionChg){ 
        this.user.socket.emit(EVENTS.RtnTransactionChgTopic, pRtnTransactionChg);
    }

    this.OnRspQryClientChgTopic = function (pRspQryClientChg, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryClientChg = pRspQryClientChg;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryClientChgTopic, callbackData);
    }

    this.OnRtnClientChgTopic = function (pRtnClientChg){ 
        this.user.socket.emit(EVENTS.RtnClientChgTopic, pRtnClientChg);
    }

    this.OnRspQryPartClientChgTopic = function (pRspQryPartClientChg, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryPartClientChg = pRspQryPartClientChg;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryPartClientChgTopic, callbackData);
    }

    this.OnRtnPartClientChgTopic = function (pRtnPartClientChg){ 
        this.user.socket.emit(EVENTS.RtnPartClientChgTopic, pRtnPartClientChg);
    }

    this.OnRspQryPosiLimitChgTopic = function (pRspQryPosiLimitChg, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryPosiLimitChg = pRspQryPosiLimitChg;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryPosiLimitChgTopic, callbackData);
    }

    this.OnRtnPosiLimitChgTopic = function (pRtnPosiLimitChg){ 
        this.user.socket.emit(EVENTS.RtnPosiLimitChgTopic, pRtnPosiLimitChg);
    }

    this.OnRspQryHedgeDetailChgTopic = function (pRspQryHedgeDetailChg, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryHedgeDetailChg = pRspQryHedgeDetailChg;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryHedgeDetailChgTopic, callbackData);
    }

    this.OnRtnHedgeDetailChgTopic = function (pRtnHedgeDetailChg){ 
        this.user.socket.emit(EVENTS.RtnHedgeDetailChgTopic, pRtnHedgeDetailChg);
    }

    this.OnRspQryParticipantChgTopic = function (pRspQryParticipantChg, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryParticipantChg = pRspQryParticipantChg;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryParticipantChgTopic, callbackData);
    }

    this.OnRtnParticipantChgTopic = function (pRtnParticipantChg){ 
        this.user.socket.emit(EVENTS.RtnParticipantChgTopic, pRtnParticipantChg);
    }

    this.OnRspQryMarginRateChgTopic = function (pRspQryMarginRateChg, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryMarginRateChg = pRspQryMarginRateChg;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryMarginRateChgTopic, callbackData);
    }

    this.OnRtnMarginRateChgTopic = function (pRtnMarginRateChg){ 
        this.user.socket.emit(EVENTS.RtnMarginRateChgTopic, pRtnMarginRateChg);
    }

    this.OnRspQryUserIpChgTopic = function (pRspQryUserIpChg, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryUserIpChg = pRspQryUserIpChg;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryUserIpChgTopic, callbackData);
    }

    this.OnRtnUserIpChgTopic = function (pRtnUserIpChg){ 
        this.user.socket.emit(EVENTS.RtnUserIpChgTopic, pRtnUserIpChg);
    }

    this.OnRspQryClientPosiLimitChgTopic = function (pRspQryClientPosiLimitChg, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryClientPosiLimitChg = pRspQryClientPosiLimitChg;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryClientPosiLimitChgTopic, callbackData);
    }

    this.OnRtnClientPosiLimitChgTopic = function (pRtnClientPosiLimitChg){ 
        this.user.socket.emit(EVENTS.RtnClientPosiLimitChgTopic, pRtnClientPosiLimitChg);
    }

    this.OnRspQrySpecPosiLimitChgTopic = function (pRspQrySpecPosiLimitChg, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySpecPosiLimitChg = pRspQrySpecPosiLimitChg;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySpecPosiLimitChgTopic, callbackData);
    }

    this.OnRtnSpecPosiLimitChgTopic = function (pRtnSpecPosiLimitChg){ 
        this.user.socket.emit(EVENTS.RtnSpecPosiLimitChgTopic, pRtnSpecPosiLimitChg);
    }

    this.OnRspQryHistoryObjectAttrTopic = function (pRspQryHistoryObjectAttr, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryHistoryObjectAttr = pRspQryHistoryObjectAttr;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryHistoryObjectAttrTopic, callbackData);
    }

    this.OnRtnHistoryObjectAttrTopic = function (pRtnHistoryObjectAttr){ 
        this.user.socket.emit(EVENTS.RtnHistoryObjectAttrTopic, pRtnHistoryObjectAttr);
    }

    this.OnRspQryFrontInfoTopic = function (pRspQryFrontInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryFrontInfo = pRspQryFrontInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryFrontInfoTopic, callbackData);
    }

    this.OnRtnFrontInfoTopic = function (pRtnFrontInfo){ 
        this.user.socket.emit(EVENTS.RtnFrontInfoTopic, pRtnFrontInfo);
    }

    this.OnRspQrySysUserLoginTopic = function (pRspQrySysUserLogin, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySysUserLogin = pRspQrySysUserLogin;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySysUserLoginTopic, callbackData);
        
        var outputStr = "\n++++++++++++++++ Communication OnRspQrySysUserLoginTopic: START! ++++++++++++++++++\n";
			 	if (pRspQrySysUserLogin instanceof Object) {
		      outputStr += "LoginTime :                 " + pRspQrySysUserLogin.LoginTime.toString() + "\n"
					           + "UserID :                    " + pRspQrySysUserLogin.UserID.toString() + "\n"
					           + "Privilege :                 " + pRspQrySysUserLogin.Privilege.toString() + "\n"
					           + "TradingDay :                " + pRspQrySysUserLogin.TradingDay.toString() + "\n"
					           + "VersionFlag :               " + pRspQrySysUserLogin.VersionFlag.toString() + "\n";	
					
				} else {
		            outputStr += "pRspQrySysUserLogin is NULL!\n";
		    }        	
		        
		    outputStr += "bIsLastNew :                " + bIsLast + "\n";
		    outputStr += "++++++++++++++++ Communication OnRspQrySysUserLoginTopic: END! ++++++++++++++++++" + "\n";        
		    console.log(outputStr);          
    }

    this.OnRspQrySysUserLogoutTopic = function (pRspQrySysUserLogout, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySysUserLogout = pRspQrySysUserLogout;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySysUserLogoutTopic, callbackData);
    }

    this.OnRspQrySysUserPasswordUpdateTopic = function (pRspQrySysUserPasswordUpdate, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySysUserPasswordUpdate = pRspQrySysUserPasswordUpdate;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySysUserPasswordUpdateTopic, callbackData);
    }

    this.OnRspQrySysUserRegisterTopic = function (pRspQrySysUserRegister, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySysUserRegister = pRspQrySysUserRegister;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySysUserRegisterTopic, callbackData);
    }

    this.OnRspQrySysUserDeleteTopic = function (pRspQrySysUserDelete, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySysUserDelete = pRspQrySysUserDelete;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySysUserDeleteTopic, callbackData);
    }

    this.OnRspQryParticipantInitTopic = function (pRspQryParticipantInit, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryParticipantInit = pRspQryParticipantInit;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryParticipantInitTopic, callbackData);
    }

    this.OnRtnParticipantInitTopic = function (pRtnParticipantInit){ 
        this.user.socket.emit(EVENTS.RtnParticipantInitTopic, pRtnParticipantInit);
    }

    this.OnRspQryUserInitTopic = function (pRspQryUserInit, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryUserInit = pRspQryUserInit;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryUserInitTopic, callbackData);
    }

    this.OnRtnUserInitTopic = function (pRtnUserInit){ 
        this.user.socket.emit(EVENTS.RtnUserInitTopic, pRtnUserInit);
    }

    this.OnRspQryClientInitTopic = function (pRspQryClientInit, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryClientInit = pRspQryClientInit;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryClientInitTopic, callbackData);
    }

    this.OnRtnClientInitTopic = function (pRtnClientInit){ 
        this.user.socket.emit(EVENTS.RtnClientInitTopic, pRtnClientInit);
    }

    this.OnRspQryTradeLogTopic = function (pRspQryTradeLog, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryTradeLog = pRspQryTradeLog;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryTradeLogTopic, callbackData);
    }

    this.OnRtnTradeLogTopic = function (pRtnTradeLog){ 
        this.user.socket.emit(EVENTS.RtnTradeLogTopic, pRtnTradeLog);
    }

    this.OnRspQryTradeUserLoginInfoTopic = function (pRspQryTradeUserLoginInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryTradeUserLoginInfo = pRspQryTradeUserLoginInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryTradeUserLoginInfoTopic, callbackData);
    }

    this.OnRtnTradeUserLoginInfoTopic = function (pRtnTradeUserLoginInfo){ 
        this.user.socket.emit(EVENTS.RtnTradeUserLoginInfoTopic, pRtnTradeUserLoginInfo);
    }

    this.OnRspQryPartTradeTopic = function (pRspQryPartTrade, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryPartTrade = pRspQryPartTrade;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryPartTradeTopic, callbackData);
    }

    this.OnRspQryTradepeakTopic = function (pRspQryTradepeak, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryTradepeak = pRspQryTradepeak;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryTradepeakTopic, callbackData);
    }

    this.OnRtnUpdateSysConfigTopic = function (pRtnUpdateSysConfig){ 
        this.user.socket.emit(EVENTS.RtnUpdateSysConfigTopic, pRtnUpdateSysConfig);
    }

    this.OnRtnSysUser = function (pRtnSysUser){ 
        this.user.socket.emit(EVENTS.RtnSysUser, pRtnSysUser);
    }

    this.OnRtnPriceLimitChgTopic = function (pRtnPriceLimitChg){ 
        this.user.socket.emit(EVENTS.RtnPriceLimitChgTopic, pRtnPriceLimitChg);
    }

    this.OnRspQryHistoryCpuInfoTopic = function (pRspQryHistoryCpuInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryHistoryCpuInfo = pRspQryHistoryCpuInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryHistoryCpuInfoTopic, callbackData);
    }

    this.OnRspQryHistoryMemInfoTopic = function (pRspQryHistoryMemInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryHistoryMemInfo = pRspQryHistoryMemInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryHistoryMemInfoTopic, callbackData);
    }

    this.OnRspQryHistoryNetworkInfoTopic = function (pRspQryHistoryNetworkInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryHistoryNetworkInfo = pRspQryHistoryNetworkInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryHistoryNetworkInfoTopic, callbackData);
    }

    this.OnRspQryMonitorOnlineUser = function (pRspQryMonitorOnlineUser, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryMonitorOnlineUser = pRspQryMonitorOnlineUser;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryMonitorOnlineUser, callbackData);
    }

    this.OnRspQryFrontStat = function (pRspQryFrontStat, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryFrontStat = pRspQryFrontStat;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryFrontStat, callbackData);
    }

    this.OnRtnSysTimeSyncTopic = function (pRtnSysTimeSync){ 
        this.user.socket.emit(EVENTS.RtnSysTimeSyncTopic, pRtnSysTimeSync);
    }

    this.OnRtnDataCenterChgTopic = function (pRtnDataCenterChg){ 
        this.user.socket.emit(EVENTS.RtnDataCenterChgTopic, pRtnDataCenterChg);
    }

    this.OnRspQryHistoryTradePeakTopic = function (pRspQryHistoryTradePeak, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryHistoryTradePeak = pRspQryHistoryTradePeak;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryHistoryTradePeakTopic, callbackData);
    }

    this.OnRtnHistoryTradePeakTopic = function (pRtnHistoryTradePeak){ 
        this.user.socket.emit(EVENTS.RtnHistoryTradePeakTopic, pRtnHistoryTradePeak);
    }

    this.OnRspQrySyslogEventTopic = function (pRspQrySyslogEvent, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySyslogEvent = pRspQrySyslogEvent;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySyslogEventTopic, callbackData);
    }

    this.OnRtnSyslogEventTopic = function (pRtnSyslogEvent){ 
        this.user.socket.emit(EVENTS.RtnSyslogEventTopic, pRtnSyslogEvent);
    }

    this.OnRspQryTradeDayChangeTopic = function (pRspQryTradeDayChange, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryTradeDayChange = pRspQryTradeDayChange;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryTradeDayChangeTopic, callbackData);
    }

    this.OnRspQryWebAppInfoTopic = function (pRspQryWebAppInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryWebAppInfo = pRspQryWebAppInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryWebAppInfoTopic, callbackData);
    }

    this.OnRtnWebAppInfoTopic = function (pRtnWebAppInfo){ 
        this.user.socket.emit(EVENTS.RtnWebAppInfoTopic, pRtnWebAppInfo);
    }

    this.OnRspQryServletInfoTopic = function (pRspQryServletInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryServletInfo = pRspQryServletInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryServletInfoTopic, callbackData);
    }

    this.OnRtnServletInfoTopic = function (pRtnServletInfo){ 
        this.user.socket.emit(EVENTS.RtnServletInfoTopic, pRtnServletInfo);
    }

    this.OnRspQryFileInfoTopic = function (pRspQryFileInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryFileInfo = pRspQryFileInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryFileInfoTopic, callbackData);
    }

    this.OnRtnFileInfoTopic = function (pRtnFileInfo){ 
        this.user.socket.emit(EVENTS.RtnFileInfoTopic, pRtnFileInfo);
    }

    this.OnRspQrySessionInfoTopic = function (pRspQrySessionInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySessionInfo = pRspQrySessionInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySessionInfoTopic, callbackData);
    }

    this.OnRtnSessionInfoTopic = function (pRtnSessionInfo){ 
        this.user.socket.emit(EVENTS.RtnSessionInfoTopic, pRtnSessionInfo);
    }

    this.OnRspQryJDBCInfoTopic = function (pRspQryJDBCInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryJDBCInfo = pRspQryJDBCInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryJDBCInfoTopic, callbackData);
    }

    this.OnRtnJDBCInfoTopic = function (pRtnJDBCInfo){ 
        this.user.socket.emit(EVENTS.RtnJDBCInfoTopic, pRtnJDBCInfo);
    }

    this.OnRspQryThreadInfoTopic = function (pRspQryThreadInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryThreadInfo = pRspQryThreadInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryThreadInfoTopic, callbackData);
    }

    this.OnRtnThreadInfoTopic = function (pRtnThreadInfo){ 
        this.user.socket.emit(EVENTS.RtnThreadInfoTopic, pRtnThreadInfo);
    }

    this.OnRspQryVMInfoTopic = function (pRspQryVMInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryVMInfo = pRspQryVMInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryVMInfoTopic, callbackData);
    }

    this.OnRtnVMInfoTopic = function (pRtnVMInfo){ 
        this.user.socket.emit(EVENTS.RtnVMInfoTopic, pRtnVMInfo);
    }

    this.OnRspQryPropertyInfoTopic = function (pRspQryPropertyInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryPropertyInfo = pRspQryPropertyInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryPropertyInfoTopic, callbackData);
    }

    this.OnRtnPropertyInfoTopic = function (pRtnPropertyInfo){ 
        this.user.socket.emit(EVENTS.RtnPropertyInfoTopic, pRtnPropertyInfo);
    }

    this.OnRspQryMemPoolInfoTopic = function (pRspQryMemPoolInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryMemPoolInfo = pRspQryMemPoolInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryMemPoolInfoTopic, callbackData);
    }

    this.OnRtnMemPoolInfoTopic = function (pRtnMemPoolInfo){ 
        this.user.socket.emit(EVENTS.RtnMemPoolInfoTopic, pRtnMemPoolInfo);
    }

    this.OnRspQryFileContentInfoTopic = function (pRspQryFileContentInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryFileContentInfo = pRspQryFileContentInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryFileContentInfoTopic, callbackData);
    }

    this.OnRtnFileContentInfoTopic = function (pRtnFileContentInfo){ 
        this.user.socket.emit(EVENTS.RtnFileContentInfoTopic, pRtnFileContentInfo);
    }

    this.OnRspQryConnectionInfoTopic = function (pRspQryConnectionInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryConnectionInfo = pRspQryConnectionInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryConnectionInfoTopic, callbackData);
    }

    this.OnRtnConnectionInfoTopic = function (pRtnConnectionInfo){ 
        this.user.socket.emit(EVENTS.RtnConnectionInfoTopic, pRtnConnectionInfo);
    }

    this.OnRspQryConnectorInfoTopic = function (pRspQryConnectorInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryConnectorInfo = pRspQryConnectorInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryConnectorInfoTopic, callbackData);
    }

    this.OnRtnConnectorInfoTopic = function (pRtnConnectorInfo){ 
        this.user.socket.emit(EVENTS.RtnConnectorInfoTopic, pRtnConnectorInfo);
    }

    this.OnRspQryDBQueryTopic = function (pRspQryDBQuery, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryDBQuery = pRspQryDBQuery;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryDBQueryTopic, callbackData);
    }

    this.OnRtnDBQueryTopic = function (pRtnDBQuery){ 
        this.user.socket.emit(EVENTS.RtnDBQueryTopic, pRtnDBQuery);
    }

    this.OnRspQryGeneralFieldTopic = function (pSysGeneralField, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pSysGeneralField = pSysGeneralField;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryGeneralFieldTopic, callbackData);
    }

    this.OnRtnGeneralFieldTopic = function (pSysGeneralField){ 
        this.user.socket.emit(EVENTS.RtnGeneralFieldTopic, pSysGeneralField);
    }

    this.OnRspQryGetFileTopic = function (pRspQryGetFile, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryGetFile = pRspQryGetFile;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryGetFileTopic, callbackData);
    }

    this.OnRspQryWarningQueryTopic = function (pRspQryWarningQuery, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryWarningQuery = pRspQryWarningQuery;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryWarningQueryTopic, callbackData);
    }

    this.OnRtnWarningQueryTopic = function (pRtnWarningQuery){ 
        this.user.socket.emit(EVENTS.RtnWarningQueryTopic, pRtnWarningQuery);
    }

    this.OnRtnHostConfig = function (pRtnHostConfig){ 
        this.user.socket.emit(EVENTS.RtnHostConfig, pRtnHostConfig);
    }

    this.OnRspQryGeneralOperateTopic = function (pRspQryGeneralOperate, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryGeneralOperate = pRspQryGeneralOperate;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryGeneralOperateTopic, callbackData);
    }

    this.OnRtnGeneralOperateTopic = function (pRtnGeneralOperate){ 
        this.user.socket.emit(EVENTS.RtnGeneralOperateTopic, pRtnGeneralOperate);
    }

    this.OnRspQryNetDeviceLinkedTopic = function (pRspQryNetDeviceLinked, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetDeviceLinked = pRspQryNetDeviceLinked;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetDeviceLinkedTopic, callbackData);
    }

    this.OnRtnNetDeviceLinkedTopic = function (pRtnNetDeviceLinked){ 
        this.user.socket.emit(EVENTS.RtnNetDeviceLinkedTopic, pRtnNetDeviceLinked);
    }

    this.OnRspQryTradeUserLoginStatTopic = function (pRspQryTradeUserLoginStat, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryTradeUserLoginStat = pRspQryTradeUserLoginStat;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryTradeUserLoginStatTopic, callbackData);
    }

    this.OnRspQryTradeFrontOrderRttStatTopic = function (pRspQryTradeFrontOrderRttStat, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryTradeFrontOrderRttStat = pRspQryTradeFrontOrderRttStat;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryTradeFrontOrderRttStatTopic, callbackData);
    }

    this.OnRtnTradeFrontOrderRttStatTopic = function (pRtnTradeFrontOrderRttStat){ 
        this.user.socket.emit(EVENTS.RtnTradeFrontOrderRttStatTopic, pRtnTradeFrontOrderRttStat);
    }

    this.OnRspQryParticTradeOrderStatesTopic = function (pRspQryParticTradeOrderStates, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryParticTradeOrderStates = pRspQryParticTradeOrderStates;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryParticTradeOrderStatesTopic, callbackData);
    }

    this.OnRtnParticTradeOrderStatesTopic = function (pRtnParticTradeOrderStates){ 
        this.user.socket.emit(EVENTS.RtnParticTradeOrderStatesTopic, pRtnParticTradeOrderStates);
    }

    this.OnRspQryRouterInfoTopic = function (pRspQryRouterInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryRouterInfo = pRspQryRouterInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryRouterInfoTopic, callbackData);
    }

    this.OnRtnRouterInfoTopic = function (pRtnRouterInfo){ 
        this.user.socket.emit(EVENTS.RtnRouterInfoTopic, pRtnRouterInfo);
    }

    this.OnRspQryDiskIOTopic = function (pRspQryDiskIO, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryDiskIO = pRspQryDiskIO;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryDiskIOTopic, callbackData);
    }

    this.OnRtnDiskIOTopic = function (pRtnDiskIO){ 
        this.user.socket.emit(EVENTS.RtnDiskIOTopic, pRtnDiskIO);
    }

    this.OnRspQryStatInfoTopic = function (pRspQryStatInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryStatInfo = pRspQryStatInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryStatInfoTopic, callbackData);
    }

    this.OnRtnStatInfoTopic = function (pRtnStatInfo){ 
        this.user.socket.emit(EVENTS.RtnStatInfoTopic, pRtnStatInfo);
    }

    this.OnRspQryTradeOrderRttCutLineTopic = function (pRspQryTradeOrderRttCutLine, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryTradeOrderRttCutLine = pRspQryTradeOrderRttCutLine;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryTradeOrderRttCutLineTopic, callbackData);
    }

    this.OnRtnTradeOrderRttCutLineTopic = function (pRtnTradeOrderRttCutLine){ 
        this.user.socket.emit(EVENTS.RtnTradeOrderRttCutLineTopic, pRtnTradeOrderRttCutLine);
    }

    this.OnRspQryClientInfoTopic = function (pRspQryClientInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryClientInfo = pRspQryClientInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryClientInfoTopic, callbackData);
    }

    this.OnRtnClientInfoTopic = function (pRtnClientInfo){ 
        this.user.socket.emit(EVENTS.RtnClientInfoTopic, pRtnClientInfo);
    }

    this.OnRspQryEventDescriptionTopic = function (pRspQryEventDescription, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryEventDescription = pRspQryEventDescription;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryEventDescriptionTopic, callbackData);
    }

    this.OnRtnEventDescriptionTopic = function (pRtnEventDescription){ 
        this.user.socket.emit(EVENTS.RtnEventDescriptionTopic, pRtnEventDescription);
    }

    this.OnRspQryFrontUniqueIDTopic = function (pRspQryFrontUniqueID, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryFrontUniqueID = pRspQryFrontUniqueID;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryFrontUniqueIDTopic, callbackData);
    }

    this.OnRtnFrontUniqueIDTopic = function (pRtnFrontUniqueID){ 
        this.user.socket.emit(EVENTS.RtnFrontUniqueIDTopic, pRtnFrontUniqueID);
    }

    this.OnRspQryNetPartyLinkAddrChangeTopic = function (pRspQryNetPartyLinkAddrChange, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetPartyLinkAddrChange = pRspQryNetPartyLinkAddrChange;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetPartyLinkAddrChangeTopic, callbackData);
    }

    this.OnRtnNetPartyLinkAddrChangeTopic = function (pRtnNetPartyLinkAddrChange){ 
        this.user.socket.emit(EVENTS.RtnNetPartyLinkAddrChangeTopic, pRtnNetPartyLinkAddrChange);
    }

    this.OnRspQryNetDelPartyLinkInfoTopic = function (pRspQryNetDelPartyLinkInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetDelPartyLinkInfo = pRspQryNetDelPartyLinkInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetDelPartyLinkInfoTopic, callbackData);
    }

    this.OnRtnNetDelPartyLinkInfoTopic = function (pRtnNetDelPartyLinkInfo){ 
        this.user.socket.emit(EVENTS.RtnNetDelPartyLinkInfoTopic, pRtnNetDelPartyLinkInfo);
    }

    this.OnRspQryPerformanceTopTopic = function (pRspQryPerformanceTop, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryPerformanceTop = pRspQryPerformanceTop;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryPerformanceTopTopic, callbackData);
    }

    this.OnRtnPerformanceTopTopic = function (pRtnPerformanceTop){ 
        this.user.socket.emit(EVENTS.RtnPerformanceTopTopic, pRtnPerformanceTop);
    }

    this.OnRspQryInstrumentStatusTopic = function (pRspQryInstrumentStatus, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryInstrumentStatus = pRspQryInstrumentStatus;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryInstrumentStatusTopic, callbackData);
    }

    this.OnRtnInstrumentStatusTopic = function (pRtnInstrumentStatus){ 
        this.user.socket.emit(EVENTS.RtnInstrumentStatusTopic, pRtnInstrumentStatus);
    }

    this.OnRspQryCurrTradingSegmentAttrTopic = function (pRspQryCurrTradingSegmentAttr, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryCurrTradingSegmentAttr = pRspQryCurrTradingSegmentAttr;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryCurrTradingSegmentAttrTopic, callbackData);
    }

    this.OnRtnCurrTradingSegmentAttrTopic = function (pRtnCurrTradingSegmentAttr){ 
        this.user.socket.emit(EVENTS.RtnCurrTradingSegmentAttrTopic, pRtnCurrTradingSegmentAttr);
    }

    this.OnRspQryNetAreaTopic = function (pRspQryNetArea, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetArea = pRspQryNetArea;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetAreaTopic, callbackData);
    }

    this.OnRtnNetAreaTopic = function (pRtnNetArea){ 
        this.user.socket.emit(EVENTS.RtnNetAreaTopic, pRtnNetArea);
    }

    this.OnRspQryNetSubAreaTopic = function (pRspQryNetSubArea, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetSubArea = pRspQryNetSubArea;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetSubAreaTopic, callbackData);
    }

    this.OnRtnNetSubAreaTopic = function (pRtnNetSubArea){ 
        this.user.socket.emit(EVENTS.RtnNetSubAreaTopic, pRtnNetSubArea);
    }

    this.OnRspQryNetSubAreaIPTopic = function (pRspQryNetSubAreaIP, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetSubAreaIP = pRspQryNetSubAreaIP;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetSubAreaIPTopic, callbackData);
    }

    this.OnRtnNetSubAreaIPTopic = function (pRtnNetSubAreaIP){ 
        this.user.socket.emit(EVENTS.RtnNetSubAreaIPTopic, pRtnNetSubAreaIP);
    }

    this.OnRspQryNetDeviceTopic = function (pRspQryNetDevice, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetDevice = pRspQryNetDevice;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetDeviceTopic, callbackData);
    }

    this.OnRtnNetDeviceTopic = function (pRtnNetDevice){ 
        this.user.socket.emit(EVENTS.RtnNetDeviceTopic, pRtnNetDevice);
    }

    this.OnRspQryNetDeviceDetectTopic = function (pRspQryNetDeviceDetect, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetDeviceDetect = pRspQryNetDeviceDetect;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetDeviceDetectTopic, callbackData);
    }

    this.OnRspQryNetBuildingTopic = function (pRspQryNetBuilding, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetBuilding = pRspQryNetBuilding;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetBuildingTopic, callbackData);
    }

    this.OnRtnNetBuildingTopic = function (pRtnNetBuilding){ 
        this.user.socket.emit(EVENTS.RtnNetBuildingTopic, pRtnNetBuilding);
    }

    this.OnRspQryNetRoomTopic = function (pRspQryNetRoom, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetRoom = pRspQryNetRoom;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetRoomTopic, callbackData);
    }

    this.OnRtnNetRoomTopic = function (pRtnNetRoom){ 
        this.user.socket.emit(EVENTS.RtnNetRoomTopic, pRtnNetRoom);
    }

    this.OnRspQryNetCabinetsTopic = function (pRspQryNetCabinets, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetCabinets = pRspQryNetCabinets;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetCabinetsTopic, callbackData);
    }

    this.OnRtnNetCabinetsTopic = function (pRtnNetCabinets){ 
        this.user.socket.emit(EVENTS.RtnNetCabinetsTopic, pRtnNetCabinets);
    }

    this.OnRspQryNetOIDTopic = function (pRspQryNetOID, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetOID = pRspQryNetOID;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetOIDTopic, callbackData);
    }

    this.OnRtnNetOIDTopic = function (pRtnNetOID){ 
        this.user.socket.emit(EVENTS.RtnNetOIDTopic, pRtnNetOID);
    }

    this.OnRspQryNetTimePolicyTopic = function (pRspQryNetTimePolicy, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetTimePolicy = pRspQryNetTimePolicy;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetTimePolicyTopic, callbackData);
    }

    this.OnRtnNetTimePolicyTopic = function (pRtnNetTimePolicy){ 
        this.user.socket.emit(EVENTS.RtnNetTimePolicyTopic, pRtnNetTimePolicy);
    }

    this.OnRspQryNetGatherTaskTopic = function (pRspQryNetGatherTask, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetGatherTask = pRspQryNetGatherTask;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetGatherTaskTopic, callbackData);
    }

    this.OnRtnNetGatherTaskTopic = function (pRtnNetGatherTask){ 
        this.user.socket.emit(EVENTS.RtnNetGatherTaskTopic, pRtnNetGatherTask);
    }

    this.OnRspQryNetDeviceChgTopic = function (pRspQryNetDeviceChg, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetDeviceChg = pRspQryNetDeviceChg;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetDeviceChgTopic, callbackData);
    }

    this.OnRtnNetDeviceChgTopic = function (pRtnNetDeviceChg){ 
        this.user.socket.emit(EVENTS.RtnNetDeviceChgTopic, pRtnNetDeviceChg);
    }

    this.OnRspQryNetDeviceTypeTopic = function (pRspQryNetDeviceType, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetDeviceType = pRspQryNetDeviceType;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetDeviceTypeTopic, callbackData);
    }

    this.OnRtnNetDeviceTypeTopic = function (pRtnNetDeviceType){ 
        this.user.socket.emit(EVENTS.RtnNetDeviceTypeTopic, pRtnNetDeviceType);
    }

    this.OnRspQryNetDeviceCategoryTopic = function (pRspQryNetDeviceCategory, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetDeviceCategory = pRspQryNetDeviceCategory;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetDeviceCategoryTopic, callbackData);
    }

    this.OnRtnNetDeviceCategoryTopic = function (pRtnNetDeviceCategory){ 
        this.user.socket.emit(EVENTS.RtnNetDeviceCategoryTopic, pRtnNetDeviceCategory);
    }

    this.OnRspQryNetManufactoryTopic = function (pRspQryNetManufactory, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetManufactory = pRspQryNetManufactory;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetManufactoryTopic, callbackData);
    }

    this.OnRtnNetManufactoryTopic = function (pRtnNetManufactory){ 
        this.user.socket.emit(EVENTS.RtnNetManufactoryTopic, pRtnNetManufactory);
    }

    this.OnRspQryNetCommunityTopic = function (pRspQryNetCommunity, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetCommunity = pRspQryNetCommunity;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetCommunityTopic, callbackData);
    }

    this.OnRtnNetCommunityTopic = function (pRtnNetCommunity){ 
        this.user.socket.emit(EVENTS.RtnNetCommunityTopic, pRtnNetCommunity);
    }

    this.OnRspQryNetPortTypeTopic = function (pRspQryNetPortType, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetPortType = pRspQryNetPortType;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetPortTypeTopic, callbackData);
    }

    this.OnRtnNetPortTypeTopic = function (pRtnNetPortType){ 
        this.user.socket.emit(EVENTS.RtnNetPortTypeTopic, pRtnNetPortType);
    }

    this.OnRspQryNetPartAccessSpotTopic = function (pRspQryNetPartAccessSpot, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetPartAccessSpot = pRspQryNetPartAccessSpot;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetPartAccessSpotTopic, callbackData);
    }

    this.OnRtnNetPartAccessSpotTopic = function (pRtnNetPartAccessSpot){ 
        this.user.socket.emit(EVENTS.RtnNetPartAccessSpotTopic, pRtnNetPartAccessSpot);
    }

    this.OnRspQryNetInterfaceTopic = function (pRspQryNetInterface, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetInterface = pRspQryNetInterface;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetInterfaceTopic, callbackData);
    }

    this.OnRtnNetInterfaceTopic = function (pRtnNetInterface){ 
        this.user.socket.emit(EVENTS.RtnNetInterfaceTopic, pRtnNetInterface);
    }

    this.OnRspQryNetGeneralOIDTopic = function (pRspQryNetGeneralOID, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetGeneralOID = pRspQryNetGeneralOID;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetGeneralOIDTopic, callbackData);
    }

    this.OnRtnNetGeneralOIDTopic = function (pRtnNetGeneralOID){ 
        this.user.socket.emit(EVENTS.RtnNetGeneralOIDTopic, pRtnNetGeneralOID);
    }

    this.OnRspQryNetMonitorTypeTopic = function (pRspQryNetMonitorType, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorType = pRspQryNetMonitorType;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorTypeTopic, callbackData);
    }

    this.OnRtnNetMonitorTypeTopic = function (pRtnNetMonitorType){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorTypeTopic, pRtnNetMonitorType);
    }

    this.OnRspQryNetMonitorAttrScopeTopic = function (pRspQryNetMonitorAttrScope, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorAttrScope = pRspQryNetMonitorAttrScope;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorAttrScopeTopic, callbackData);
    }

    this.OnRtnNetMonitorAttrScopeTopic = function (pRtnNetMonitorAttrScope){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorAttrScopeTopic, pRtnNetMonitorAttrScope);
    }

    this.OnRspQryNetMonitorAttrTypeTopic = function (pRspQryNetMonitorAttrType, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorAttrType = pRspQryNetMonitorAttrType;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorAttrTypeTopic, callbackData);
    }

    this.OnRtnNetMonitorAttrTypeTopic = function (pRtnNetMonitorAttrType){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorAttrTypeTopic, pRtnNetMonitorAttrType);
    }

    this.OnRspQryNetMonitorObjectAttrTopic = function (pRspQryNetMonitorObjectAttr, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorObjectAttr = pRspQryNetMonitorObjectAttr;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorObjectAttrTopic, callbackData);
    }

    this.OnRtnNetMonitorObjectAttrTopic = function (pRtnNetMonitorObjectAttr){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorObjectAttrTopic, pRtnNetMonitorObjectAttr);
    }

    this.OnRspQryNetFuncAreaTopic = function (pRspQryNetFuncArea, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetFuncArea = pRspQryNetFuncArea;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetFuncAreaTopic, callbackData);
    }

    this.OnRtnNetFuncAreaTopic = function (pRtnNetFuncArea){ 
        this.user.socket.emit(EVENTS.RtnNetFuncAreaTopic, pRtnNetFuncArea);
    }

    this.OnRspQryNetMonitorCommandTypeTopic = function (pRspQryNetMonitorCommandType, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorCommandType = pRspQryNetMonitorCommandType;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorCommandTypeTopic, callbackData);
    }

    this.OnRtnNetMonitorCommandTypeTopic = function (pRtnNetMonitorCommandType){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorCommandTypeTopic, pRtnNetMonitorCommandType);
    }

    this.OnRspQryNetMonitorActionGroupTopic = function (pRspQryNetMonitorActionGroup, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorActionGroup = pRspQryNetMonitorActionGroup;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorActionGroupTopic, callbackData);
    }

    this.OnRtnNetMonitorActionGroupTopic = function (pRtnNetMonitorActionGroup){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorActionGroupTopic, pRtnNetMonitorActionGroup);
    }

    this.OnRspQryNetMonitorDeviceGroupTopic = function (pRspQryNetMonitorDeviceGroup, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorDeviceGroup = pRspQryNetMonitorDeviceGroup;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorDeviceGroupTopic, callbackData);
    }

    this.OnRtnNetMonitorDeviceGroupTopic = function (pRtnNetMonitorDeviceGroup){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorDeviceGroupTopic, pRtnNetMonitorDeviceGroup);
    }

    this.OnRspQryNetMonitorTaskInfoTopic = function (pRspQryNetMonitorTaskInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorTaskInfo = pRspQryNetMonitorTaskInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorTaskInfoTopic, callbackData);
    }

    this.OnRtnNetMonitorTaskInfoTopic = function (pRtnNetMonitorTaskInfo){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorTaskInfoTopic, pRtnNetMonitorTaskInfo);
    }

    this.OnRspQryNetMonitorTaskResultTopic = function (pRspQryNetMonitorTaskResult, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorTaskResult = pRspQryNetMonitorTaskResult;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorTaskResultTopic, callbackData);
    }

    this.OnRtnNetMonitorTaskResultTopic = function (pRtnNetMonitorTaskResult){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorTaskResultTopic, pRtnNetMonitorTaskResult);
    }

    this.OnRspQryNetMonitorTaskObjectSetTopic = function (pRspQryNetMonitorTaskObjectSet, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorTaskObjectSet = pRspQryNetMonitorTaskObjectSet;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorTaskObjectSetTopic, callbackData);
    }

    this.OnRtnNetMonitorTaskObjectSetTopic = function (pRtnNetMonitorTaskObjectSet){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorTaskObjectSetTopic, pRtnNetMonitorTaskObjectSet);
    }

    this.OnRspQryNetPartyLinkInfoTopic = function (pRspQryNetPartyLinkInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetPartyLinkInfo = pRspQryNetPartyLinkInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetPartyLinkInfoTopic, callbackData);
    }

    this.OnRtnNetPartyLinkInfoTopic = function (pRtnNetPartyLinkInfo){ 
        this.user.socket.emit(EVENTS.RtnNetPartyLinkInfoTopic, pRtnNetPartyLinkInfo);
    }

    this.OnRspQryNetMonitorActionAttrTopic = function (pRspQryNetMonitorActionAttr, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorActionAttr = pRspQryNetMonitorActionAttr;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorActionAttrTopic, callbackData);
    }

    this.OnRtnNetMonitorActionAttrTopic = function (pRtnNetMonitorActionAttr){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorActionAttrTopic, pRtnNetMonitorActionAttr);
    }

    this.OnRspQryNetModuleTopic = function (pRspQryNetModule, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetModule = pRspQryNetModule;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetModuleTopic, callbackData);
    }

    this.OnRtnNetModuleTopic = function (pRtnNetModule){ 
        this.user.socket.emit(EVENTS.RtnNetModuleTopic, pRtnNetModule);
    }

    this.OnRspQryNetEventExprTopic = function (pRspQryNetEventExpr, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetEventExpr = pRspQryNetEventExpr;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetEventExprTopic, callbackData);
    }

    this.OnRtnNetEventExprTopic = function (pRtnNetEventExpr){ 
        this.user.socket.emit(EVENTS.RtnNetEventExprTopic, pRtnNetEventExpr);
    }

    this.OnRspQryNetEventTypeTopic = function (pRspQryNetEventType, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetEventType = pRspQryNetEventType;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetEventTypeTopic, callbackData);
    }

    this.OnRtnNetEventTypeTopic = function (pRtnNetEventType){ 
        this.user.socket.emit(EVENTS.RtnNetEventTypeTopic, pRtnNetEventType);
    }

    this.OnRspQryNetSubEventTypeTopic = function (pRspQryNetSubEventType, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetSubEventType = pRspQryNetSubEventType;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetSubEventTypeTopic, callbackData);
    }

    this.OnRtnNetSubEventTypeTopic = function (pRtnNetSubEventType){ 
        this.user.socket.emit(EVENTS.RtnNetSubEventTypeTopic, pRtnNetSubEventType);
    }

    this.OnRspQryNetEventLevelTopic = function (pRspQryNetEventLevel, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetEventLevel = pRspQryNetEventLevel;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetEventLevelTopic, callbackData);
    }

    this.OnRtnNetEventLevelTopic = function (pRtnNetEventLevel){ 
        this.user.socket.emit(EVENTS.RtnNetEventLevelTopic, pRtnNetEventLevel);
    }

    this.OnRspQryNetMonitorTaskStatusResultTopic = function (pRspQryNetMonitorTaskStatusResult, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorTaskStatusResult = pRspQryNetMonitorTaskStatusResult;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorTaskStatusResultTopic, callbackData);
    }

    this.OnRtnNetMonitorTaskStatusResultTopic = function (pRtnNetMonitorTaskStatusResult){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorTaskStatusResultTopic, pRtnNetMonitorTaskStatusResult);
    }

    this.OnRspQryNetCfgFileTopic = function (pRspQryNetCfgFile, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetCfgFile = pRspQryNetCfgFile;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetCfgFileTopic, callbackData);
    }

    this.OnRtnNetCfgFileTopic = function (pRtnNetCfgFile){ 
        this.user.socket.emit(EVENTS.RtnNetCfgFileTopic, pRtnNetCfgFile);
    }

    this.OnRspQryNetMonitorDeviceTaskTopic = function (pRspQryNetMonitorDeviceTask, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorDeviceTask = pRspQryNetMonitorDeviceTask;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorDeviceTaskTopic, callbackData);
    }

    this.OnRtnNetMonitorDeviceTaskTopic = function (pRtnNetMonitorDeviceTask){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorDeviceTaskTopic, pRtnNetMonitorDeviceTask);
    }

    this.OnRspQryNetMonitorTaskInstAttrsTopic = function (pRspQryNetMonitorTaskInstAttrs, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMonitorTaskInstAttrs = pRspQryNetMonitorTaskInstAttrs;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMonitorTaskInstAttrsTopic, callbackData);
    }

    this.OnRtnNetMonitorTaskInstAttrsTopic = function (pRtnNetMonitorTaskInstAttrs){ 
        this.user.socket.emit(EVENTS.RtnNetMonitorTaskInstAttrsTopic, pRtnNetMonitorTaskInstAttrs);
    }

    this.OnRspQryFileGeneralOperTopic = function (pRspQryFileGeneralOper, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryFileGeneralOper = pRspQryFileGeneralOper;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryFileGeneralOperTopic, callbackData);
    }

    this.OnRtnFileGeneralOperTopic = function (pRtnFileGeneralOper){ 
        this.user.socket.emit(EVENTS.RtnFileGeneralOperTopic, pRtnFileGeneralOper);
    }

    this.OnRspQryNetBaseLineTopic = function (pRspQryNetBaseLine, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetBaseLine = pRspQryNetBaseLine;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetBaseLineTopic, callbackData);
    }

    this.OnRtnNetBaseLineTopic = function (pRtnNetBaseLine){ 
        this.user.socket.emit(EVENTS.RtnNetBaseLineTopic, pRtnNetBaseLine);
    }

    this.OnRspQryNetBaseLineTaskTopic = function (pRspQryNetBaseLineTask, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetBaseLineTask = pRspQryNetBaseLineTask;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetBaseLineTaskTopic, callbackData);
    }

    this.OnRtnNetBaseLineTaskTopic = function (pRtnNetBaseLineTask){ 
        this.user.socket.emit(EVENTS.RtnNetBaseLineTaskTopic, pRtnNetBaseLineTask);
    }

    this.OnRspQryNetBaseLineResultTopic = function (pRspQryNetBaseLineResult, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetBaseLineResult = pRspQryNetBaseLineResult;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetBaseLineResultTopic, callbackData);
    }

    this.OnRtnNetBaseLineResultTopic = function (pRtnNetBaseLineResult){ 
        this.user.socket.emit(EVENTS.RtnNetBaseLineResultTopic, pRtnNetBaseLineResult);
    }

    this.OnRspQryNetPartyLinkStatusInfoTopic = function (pRspQryNetPartyLinkStatusInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetPartyLinkStatusInfo = pRspQryNetPartyLinkStatusInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetPartyLinkStatusInfoTopic, callbackData);
    }

    this.OnRtnNetPartyLinkStatusInfoTopic = function (pRtnNetPartyLinkStatusInfo){ 
        this.user.socket.emit(EVENTS.RtnNetPartyLinkStatusInfoTopic, pRtnNetPartyLinkStatusInfo);
    }

    this.OnRspQryNetMemberSDHLineInfoTopic = function (pRspQryNetMemberSDHLineInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetMemberSDHLineInfo = pRspQryNetMemberSDHLineInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetMemberSDHLineInfoTopic, callbackData);
    }

    this.OnRtnNetMemberSDHLineInfoTopic = function (pRtnNetMemberSDHLineInfo){ 
        this.user.socket.emit(EVENTS.RtnNetMemberSDHLineInfoTopic, pRtnNetMemberSDHLineInfo);
    }

    this.OnRspQryNetDDNLinkInfoTopic = function (pRspQryNetDDNLinkInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetDDNLinkInfo = pRspQryNetDDNLinkInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetDDNLinkInfoTopic, callbackData);
    }

    this.OnRtnNetDDNLinkInfoTopic = function (pRtnNetDDNLinkInfo){ 
        this.user.socket.emit(EVENTS.RtnNetDDNLinkInfoTopic, pRtnNetDDNLinkInfo);
    }

    this.OnRspQryNetPseudMemberLinkInfoTopic = function (pRspQryNetPseudMemberLinkInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetPseudMemberLinkInfo = pRspQryNetPseudMemberLinkInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetPseudMemberLinkInfoTopic, callbackData);
    }

    this.OnRtnNetPseudMemberLinkInfoTopic = function (pRtnNetPseudMemberLinkInfo){ 
        this.user.socket.emit(EVENTS.RtnNetPseudMemberLinkInfoTopic, pRtnNetPseudMemberLinkInfo);
    }

    this.OnRspQryOuterDeviceInfTopic = function (pRspQryOuterDeviceInf, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryOuterDeviceInf = pRspQryOuterDeviceInf;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryOuterDeviceInfTopic, callbackData);
    }

    this.OnRtnNetOuterDeviceInfTopic = function (pRtnNetOuterDeviceInf){ 
        this.user.socket.emit(EVENTS.RtnNetOuterDeviceInfTopic, pRtnNetOuterDeviceInf);
    }

    this.OnRspQryNetLocalPingResultInfoTopic = function (pRspQryNetLocalPingResultInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetLocalPingResultInfo = pRspQryNetLocalPingResultInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetLocalPingResultInfoTopic, callbackData);
    }

    this.OnRtnNetLocalPingResultInfoTopic = function (pRtnNetLocalPingResultInfo){ 
        this.user.socket.emit(EVENTS.RtnNetLocalPingResultInfoTopic, pRtnNetLocalPingResultInfo);
    }

    this.OnRspQryNetRomotePingResultInfoTopic = function (pRspQryNetRomotePingResultInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetRomotePingResultInfo = pRspQryNetRomotePingResultInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetRomotePingResultInfoTopic, callbackData);
    }

    this.OnRtnNetRomotePingResultInfoTopic = function (pRtnNetRomotePingResultInfo){ 
        this.user.socket.emit(EVENTS.RtnNetRomotePingResultInfoTopic, pRtnNetRomotePingResultInfo);
    }

    this.OnRtnMonitorTopProcessInfo = function (pRtnMonitorTopProcessInfo){ 
        this.user.socket.emit(EVENTS.RtnMonitorTopProcessInfo, pRtnMonitorTopProcessInfo);
    }

    this.OnRspQrySysInternalTopologyTopic = function (pRspQrySysInternalTopology, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQrySysInternalTopology = pRspQrySysInternalTopology;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQrySysInternalTopologyTopic, callbackData);
    }

    this.OnRtnSysInternalTopologyTopic = function (pRtnSysInternalTopology){ 
        this.user.socket.emit(EVENTS.RtnSysInternalTopologyTopic, pRtnSysInternalTopology);
    }

    this.OnRspQryMemberLinkCostTopic = function (pRspQryMemberLinkCost, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryMemberLinkCost = pRspQryMemberLinkCost;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryMemberLinkCostTopic, callbackData);
    }

    this.OnRtnMemberLinkCostTopic = function (pRtnMemberLinkCost){ 
        this.user.socket.emit(EVENTS.RtnMemberLinkCostTopic, pRtnMemberLinkCost);
    }

    this.OnRspQryNetPartylinkMonthlyRentTopic = function (pRspQryNetPartylinkMonthlyRent, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetPartylinkMonthlyRent = pRspQryNetPartylinkMonthlyRent;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetPartylinkMonthlyRentTopic, callbackData);
    }

    this.OnRtnNetPartylinkMonthlyRentTopic = function (pRtnNetPartylinkMonthlyRent){ 
        this.user.socket.emit(EVENTS.RtnNetPartylinkMonthlyRentTopic, pRtnNetPartylinkMonthlyRent);
    }

    this.OnRspQryNetNonPartyLinkInfoTopic = function (pRspQryNetNonPartyLinkInfo, pRspInfo, nRequestID, bIsLast) {
        var callbackData = {};
        callbackData.pRspQryNetNonPartyLinkInfo = pRspQryNetNonPartyLinkInfo;
        callbackData.pRspInfo = pRspInfo;
        callbackData.nRequestID = nRequestID;
        callbackData.bIsLast = bIsLast;
        this.user.socket.emit(EVENTS.RspQryNetNonPartyLinkInfoTopic, callbackData);
    }

    this.OnRtnNetNonPartyLinkInfoTopic = function (pRtnNetNonPartyLinkInfo){ 
        this.user.socket.emit(EVENTS.RtnNetNonPartyLinkInfoTopic, pRtnNetNonPartyLinkInfo);
    }

}

exports.Spi = Spi;
