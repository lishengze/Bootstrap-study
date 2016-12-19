var addon             = require("./addon.node");
var spi               = require("./server-spi.js");
var EVENTS            = require("./Events.js");
var SysUserApiStruct  = require("./SysUserApiStruct.js");
var path              = require('path');
var fs                = require('fs');

// var realTimeSystemPath = "tcp://172.1.128.151:19840";
var realTimeSystemPath = "tcp://172.1.128.160:19840";
var innerTestSystemPath = "tcp://172.1.128.111:18842";

var fileName = path.join (__dirname, './client-child.txt');
var fileData = "Child Process Pid: " + process.pid + '\n';
var user = {};

fs.writeFileSync(fileName, fileData);

// 注册父进程发送到子进程的请求处理函数.
var ReqFunc = [];

var ConnectServer = function (connectReqField) {
    fs.appendFileSync(fileName, 'ConnectServer Start! \n');

    // var userWorkDirName = 'usr/' + connectReqField.userID;
    // var spawn = require('child_process').spawn('mkdir', [userWorkDirName]);
    // userWorkDirName += "/";
    
    user.emitter  = connectReqField.infoEmitter;
    user.userApi  = new addon.FtdcSysUserApi_Wrapper("");
    user.Spi      = new spi.Spi();
    user.Spi.user = user;

    user.userApi.RegisterFront(realTimeSystemPath);
    user.userApi.RegisterSpi(user.Spi);
    user.userApi.Init();
    fs.appendFileSync(fileName, 'ConnectServer End! \n');
}
    
var ReqQryTopCpuInfoTopic = function (reqField){	
    user.userApi.ReqQryTopCpuInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryTopMemInfoTopic = function (reqField){	
    user.userApi.ReqQryTopMemInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryTopProcessInfoTopic = function (reqField){	
    user.userApi.ReqQryTopProcessInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryFileSystemInfoTopic = function (reqField){	
    user.userApi.ReqQryFileSystemInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetworkInfoTopic = function (reqField){	
    user.userApi.ReqQryNetworkInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonitorObjectTopic = function (reqField){	
    user.userApi.ReqQryMonitorObjectTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryObjectRationalTopic = function (reqField){	
    user.userApi.ReqQryObjectRationalTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySyslogInfoTopic = function (reqField){	
    user.userApi.ReqQrySyslogInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySubscriberTopic = function (reqField){	
    user.userApi.ReqQrySubscriberTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryOidRelationTopic = function (reqField){	
    user.userApi.ReqQryOidRelationTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryUserInfoTopic = function (reqField){	
    user.userApi.ReqQryUserInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryOnlineUserInfoTopic = function (reqField){	
    user.userApi.ReqQryOnlineUserInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryWarningEventTopic = function (reqField){	
    user.userApi.ReqQryWarningEventTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySyslogEventTopic = function (reqField){	
    user.userApi.ReqQrySyslogEventTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySyslogEventSubcriberTopic = function (reqField){	
    user.userApi.ReqQrySyslogEventSubcriberTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryObjectAttrTopic = function (reqField){	
    user.userApi.ReqQryObjectAttrTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryInvalidateOrderTopic = function (reqField){	
    user.userApi.ReqQryInvalidateOrderTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryOrderStatusTopic = function (reqField){	
    user.userApi.ReqQryOrderStatusTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryBargainOrderTopic = function (reqField){	
    user.userApi.ReqQryBargainOrderTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryInstPropertyTopic = function (reqField){	
    user.userApi.ReqQryInstPropertyTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryMarginRateTopic = function (reqField){	
    user.userApi.ReqQryMarginRateTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryPriceLimitTopic = function (reqField){	
    user.userApi.ReqQryPriceLimitTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryPartPosiLimitTopic = function (reqField){	
    user.userApi.ReqQryPartPosiLimitTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryClientPosiLimitTopic = function (reqField){	
    user.userApi.ReqQryClientPosiLimitTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySpecialPosiLimitTopic = function (reqField){	
    user.userApi.ReqQrySpecialPosiLimitTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryTransactionChgTopic = function (reqField){	
    user.userApi.ReqQryTransactionChgTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryClientChgTopic = function (reqField){	
    user.userApi.ReqQryClientChgTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryPartClientChgTopic = function (reqField){	
    user.userApi.ReqQryPartClientChgTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryPosiLimitChgTopic = function (reqField){	
    user.userApi.ReqQryPosiLimitChgTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryClientPosiLimitChgTopic = function (reqField){	
    user.userApi.ReqQryClientPosiLimitChgTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySpecPosiLimitChgTopic = function (reqField){	
    user.userApi.ReqQrySpecPosiLimitChgTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryHedgeDetailChgTopic = function (reqField){	
    user.userApi.ReqQryHedgeDetailChgTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryParticipantChgTopic = function (reqField){	
    user.userApi.ReqQryParticipantChgTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryMarginRateChgTopic = function (reqField){	
    user.userApi.ReqQryMarginRateChgTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryUserIpChgTopic = function (reqField){	
    user.userApi.ReqQryUserIpChgTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryHistoryObjectAttrTopic = function (reqField){	
    user.userApi.ReqQryHistoryObjectAttrTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryFrontInfoTopic = function (reqField){	
    user.userApi.ReqQryFrontInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySysUserLoginTopic = function (reqField){	
    user.userApi.ReqQrySysUserLoginTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySysUserLogoutTopic = function (reqField){	
    user.userApi.ReqQrySysUserLogoutTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySysUserPasswordUpdateTopic = function (reqField){	
    user.userApi.ReqQrySysUserPasswordUpdateTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySysUserRegisterTopic = function (reqField){	
    user.userApi.ReqQrySysUserRegisterTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySysUserDeleteTopic = function (reqField){	
    user.userApi.ReqQrySysUserDeleteTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryTradeLogTopic = function (reqField){	
    user.userApi.ReqQryTradeLogTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryParticipantInitTopic = function (reqField){	
    user.userApi.ReqQryParticipantInitTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryUserInitTopic = function (reqField){	
    user.userApi.ReqQryUserInitTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryWarningEventUpdateTopic = function (reqField){	
    user.userApi.ReqQryWarningEventUpdateTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryTradeUserLoginInfoTopic = function (reqField){	
    user.userApi.ReqQryTradeUserLoginInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryPartTradeTopic = function (reqField){	
    user.userApi.ReqQryPartTradeTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryTradepeakTopic = function (reqField){	
    user.userApi.ReqQryTradepeakTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryHistoryCpuInfoTopic = function (reqField){	
    user.userApi.ReqQryHistoryCpuInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryHistoryMemInfoTopic = function (reqField){	
    user.userApi.ReqQryHistoryMemInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryHistoryNetworkInfoTopic = function (reqField){	
    user.userApi.ReqQryHistoryNetworkInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonitorOnlineUser = function (reqField){	
    user.userApi.ReqQryMonitorOnlineUser(reqField.reqObject, reqField.RequestId);
}
var ReqQryFrontStatTopic = function (reqField){	
    user.userApi.ReqQryFrontStatTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryHistoryTradePeakTopic = function (reqField){	
    user.userApi.ReqQryHistoryTradePeakTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryTomcatInfoTopic = function (reqField){	
    user.userApi.ReqQryTomcatInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryDBQueryTopic = function (reqField){	
    user.userApi.ReqQryDBQueryTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryGetFileTopic = function (reqField){	
    user.userApi.ReqQryGetFileTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQrySyslogEventUpdateTopic = function (reqField){	
    user.userApi.ReqQrySyslogEventUpdateTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryWarningQueryTopic = function (reqField){	
    user.userApi.ReqQryWarningQueryTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryWebVisitTopic = function (reqField){	
    user.userApi.ReqQryWebVisitTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryWarningActiveChange = function (reqField){	
    user.userApi.ReqQryWarningActiveChange(reqField.reqObject, reqField.RequestId);
}
var ReqQryTradeUserLoginStatTopic = function (reqField){	
    user.userApi.ReqQryTradeUserLoginStatTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryGeneralOperateTopic = function (reqField){	
    user.userApi.ReqQryGeneralOperateTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetDeviceLinkedTopic = function (reqField){	
    user.userApi.ReqQryNetDeviceLinkedTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryRealTimeNetObjectAttrTopic = function (reqField){	
    user.userApi.ReqQryRealTimeNetObjectAttrTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetAreaTopic = function (reqField){	
    user.userApi.ReqQryNetAreaTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetSubAreaTopic = function (reqField){	
    user.userApi.ReqQryNetSubAreaTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetSubAreaIPTopic = function (reqField){	
    user.userApi.ReqQryNetSubAreaIPTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetDeviceDetectTopic = function (reqField){	
    user.userApi.ReqQryNetDeviceDetectTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetDeviceRequestTopic = function (reqField){	
    user.userApi.ReqQryNetDeviceRequestTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetBuildingTopic = function (reqField){	
    user.userApi.ReqQryNetBuildingTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetRoomTopic = function (reqField){	
    user.userApi.ReqQryNetRoomTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetCabinetsTopic = function (reqField){	
    user.userApi.ReqQryNetCabinetsTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetOIDTopic = function (reqField){	
    user.userApi.ReqQryNetOIDTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetTimePolicyTopic = function (reqField){	
    user.userApi.ReqQryNetTimePolicyTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetGatherTaskTopic = function (reqField){	
    user.userApi.ReqQryNetGatherTaskTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetDeviceChgTopic = function (reqField){	
    user.userApi.ReqQryNetDeviceChgTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetDeviceTypeTopic = function (reqField){	
    user.userApi.ReqQryNetDeviceTypeTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetDeviceCategoryTopic = function (reqField){	
    user.userApi.ReqQryNetDeviceCategoryTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetManufactoryTopic = function (reqField){	
    user.userApi.ReqQryNetManufactoryTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetCommunityTopic = function (reqField){	
    user.userApi.ReqQryNetCommunityTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetPortTypeTopic = function (reqField){	
    user.userApi.ReqQryNetPortTypeTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetPartAccessSpotTopic = function (reqField){	
    user.userApi.ReqQryNetPartAccessSpotTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetInterfaceTopic = function (reqField){	
    user.userApi.ReqQryNetInterfaceTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetGeneralOIDTopic = function (reqField){	
    user.userApi.ReqQryNetGeneralOIDTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetMonitorTypeTopic = function (reqField){	
    user.userApi.ReqQryNetMonitorTypeTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetMonitorAttrScopeTopic = function (reqField){	
    user.userApi.ReqQryNetMonitorAttrScopeTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetMonitorAttrTypeTopic = function (reqField){	
    user.userApi.ReqQryNetMonitorAttrTypeTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetMonitorObjectAttrTopic = function (reqField){	
    user.userApi.ReqQryNetMonitorObjectAttrTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetMonitorTaskResultTopic = function (reqField){	
    user.userApi.ReqQryNetMonitorTaskResultTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetMonitorDeviceGroupTopic = function (reqField){	
    user.userApi.ReqQryNetMonitorDeviceGroupTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetMonitorTaskObjectSetTopic = function (reqField){	
    user.userApi.ReqQryNetMonitorTaskObjectSetTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetMonitorTaskInfoTopic = function (reqField){	
    user.userApi.ReqQryNetMonitorTaskInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetPartyLinkInfoTopic = function (reqField){	
    user.userApi.ReqQryNetPartyLinkInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetMonitorActionAttrTopic = function (reqField){	
    user.userApi.ReqQryNetMonitorActionAttrTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetModuleTopic = function (reqField){	
    user.userApi.ReqQryNetModuleTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetMonitorTaskStatusResultTopic = function (reqField){	
    user.userApi.ReqQryNetMonitorTaskStatusResultTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetCfgFileTopic = function (reqField){	
    user.userApi.ReqQryNetCfgFileTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryFileGeneralOperTopic = function (reqField){	
    user.userApi.ReqQryFileGeneralOperTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetPartyLinkStatusInfoTopic = function (reqField){	
    user.userApi.ReqQryNetPartyLinkStatusInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetBaseLineTopic = function (reqField){	
    user.userApi.ReqQryNetBaseLineTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetBaseLineResultTopic = function (reqField){	
    user.userApi.ReqQryNetBaseLineResultTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetMonitorDeviceTaskTopic = function (reqField){	
    user.userApi.ReqQryNetMonitorDeviceTaskTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetLocalPingResultInfoTopic = function (reqField){	
    user.userApi.ReqQryNetLocalPingResultInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetRomotePingResultInfoTopic = function (reqField){	
    user.userApi.ReqQryNetRomotePingResultInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryTradeFrontOrderRttStatTopic = function (reqField){	
    user.userApi.ReqQryTradeFrontOrderRttStatTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryDiskIOTopic = function (reqField){	
    user.userApi.ReqQryDiskIOTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryRouterInfoTopic = function (reqField){	
    user.userApi.ReqQryRouterInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryStatInfoTopic = function (reqField){	
    user.userApi.ReqQryStatInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryClientInfoTopic = function (reqField){	
    user.userApi.ReqQryClientInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryParticTradeOrderStatesTopic = function (reqField){	
    user.userApi.ReqQryParticTradeOrderStatesTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryTradeOrderRttCutLineTopic = function (reqField){	
    user.userApi.ReqQryTradeOrderRttCutLineTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryEventDescriptionTopic = function (reqField){	
    user.userApi.ReqQryEventDescriptionTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryFrontUniqueIDTopic = function (reqField){	
    user.userApi.ReqQryFrontUniqueIDTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetPartyLinkAddrChangeTopic = function (reqField){	
    user.userApi.ReqQryNetPartyLinkAddrChangeTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetDelPartyLinkInfoTopic = function (reqField){	
    user.userApi.ReqQryNetDelPartyLinkInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryInstrumentStatusTopic = function (reqField){	
    user.userApi.ReqQryInstrumentStatusTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryCurrTradingSegmentAttrTopic = function (reqField){	
    user.userApi.ReqQryCurrTradingSegmentAttrTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryPerformanceTopTopic = function (reqField){	
    user.userApi.ReqQryPerformanceTopTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryNetNonPartyLinkInfoTopic = function (reqField){	
    user.userApi.ReqQryNetNonPartyLinkInfoTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonConfigInfo = function (reqField){	
    user.userApi.ReqQryMonConfigInfo(reqField.reqObject, reqField.RequestId);
}
var ReqMonServiceConnect = function (reqField){	
    user.userApi.ReqMonServiceConnect(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonServiceStatus = function (reqField){	
    user.userApi.ReqQryMonServiceStatus(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonProbeTask = function (reqField){	
    user.userApi.ReqQryMonProbeTask(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonObjectAttr = function (reqField){	
    user.userApi.ReqQryMonObjectAttr(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonSyslogEvent = function (reqField){	
    user.userApi.ReqQryMonSyslogEvent(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonFileOffset = function (reqField){	
    user.userApi.ReqQryMonFileOffset(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonFileContent = function (reqField){	
    user.userApi.ReqQryMonFileContent(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonHostCPUAttr = function (reqField){	
    user.userApi.ReqQryMonHostCPUAttr(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonHostMemAttr = function (reqField){	
    user.userApi.ReqQryMonHostMemAttr(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonHostNetworkAttr = function (reqField){	
    user.userApi.ReqQryMonHostNetworkAttr(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonHostStatInfo = function (reqField){	
    user.userApi.ReqQryMonHostStatInfo(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonHostRouterInfo = function (reqField){	
    user.userApi.ReqQryMonHostRouterInfo(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonHostProcessInfo = function (reqField){	
    user.userApi.ReqQryMonHostProcessInfo(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonSPQuery = function (reqField){	
    user.userApi.ReqQryMonSPQuery(reqField.reqObject, reqField.RequestId);
}
var ReqServiceVersion = function (reqField){	
    user.userApi.ReqServiceVersion(reqField.reqObject, reqField.RequestId);
}
var ReqServiceProgram = function (reqField){	
    user.userApi.ReqServiceProgram(reqField.reqObject, reqField.RequestId);
}
var ReqUpdateState = function (reqField){	
    user.userApi.ReqUpdateState(reqField.reqObject, reqField.RequestId);
}
var ReqSubscribe = function (reqField){	
    user.userApi.ReqSubscribe(reqField.reqObject, reqField.RequestId);
}
var ReqCancelSubscribe = function (reqField){	
    user.userApi.ReqCancelSubscribe(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonHostBasicEnv = function (reqField){	
    user.userApi.ReqQryMonHostBasicEnv(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonHostNetworkEnv = function (reqField){	
    user.userApi.ReqQryMonHostNetworkEnv(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonHostFileSysEnv = function (reqField){	
    user.userApi.ReqQryMonHostFileSysEnv(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonHostSwapEnv = function (reqField){	
    user.userApi.ReqQryMonHostSwapEnv(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonitor2ObjectTopic = function (reqField){	
    user.userApi.ReqQryMonitor2ObjectTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonHostCommonEnvTopic = function (reqField){	
    user.userApi.ReqQryMonHostCommonEnvTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonOidHostRationalTopic = function (reqField){	
    user.userApi.ReqQryMonOidHostRationalTopic(reqField.reqObject, reqField.RequestId);
}
var ReqQryMonOidRelationTopic = function (reqField){	
    user.userApi.ReqQryMonOidRelationTopic(reqField.reqObject, reqField.RequestId);
}

ReqFunc[EVENTS.ConnectServer] = ConnectServer; 
ReqFunc[EVENTS.ReqQryTopCpuInfoTopic] = ReqQryTopCpuInfoTopic; 
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
ReqFunc[EVENTS.ReqQrySyslogEventTopic] = ReqQrySyslogEventTopic; 
ReqFunc[EVENTS.ReqQrySyslogEventSubcriberTopic] = ReqQrySyslogEventSubcriberTopic; 
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
ReqFunc[EVENTS.ReqQryClientPosiLimitChgTopic] = ReqQryClientPosiLimitChgTopic; 
ReqFunc[EVENTS.ReqQrySpecPosiLimitChgTopic] = ReqQrySpecPosiLimitChgTopic; 
ReqFunc[EVENTS.ReqQryHedgeDetailChgTopic] = ReqQryHedgeDetailChgTopic; 
ReqFunc[EVENTS.ReqQryParticipantChgTopic] = ReqQryParticipantChgTopic; 
ReqFunc[EVENTS.ReqQryMarginRateChgTopic] = ReqQryMarginRateChgTopic; 
ReqFunc[EVENTS.ReqQryUserIpChgTopic] = ReqQryUserIpChgTopic; 
ReqFunc[EVENTS.ReqQryHistoryObjectAttrTopic] = ReqQryHistoryObjectAttrTopic; 
ReqFunc[EVENTS.ReqQryFrontInfoTopic] = ReqQryFrontInfoTopic; 
ReqFunc[EVENTS.ReqQrySysUserLoginTopic] = ReqQrySysUserLoginTopic; 
ReqFunc[EVENTS.ReqQrySysUserLogoutTopic] = ReqQrySysUserLogoutTopic; 
ReqFunc[EVENTS.ReqQrySysUserPasswordUpdateTopic] = ReqQrySysUserPasswordUpdateTopic; 
ReqFunc[EVENTS.ReqQrySysUserRegisterTopic] = ReqQrySysUserRegisterTopic; 
ReqFunc[EVENTS.ReqQrySysUserDeleteTopic] = ReqQrySysUserDeleteTopic; 
ReqFunc[EVENTS.ReqQryTradeLogTopic] = ReqQryTradeLogTopic; 
ReqFunc[EVENTS.ReqQryParticipantInitTopic] = ReqQryParticipantInitTopic; 
ReqFunc[EVENTS.ReqQryUserInitTopic] = ReqQryUserInitTopic; 
ReqFunc[EVENTS.ReqQryWarningEventUpdateTopic] = ReqQryWarningEventUpdateTopic; 
ReqFunc[EVENTS.ReqQryTradeUserLoginInfoTopic] = ReqQryTradeUserLoginInfoTopic; 
ReqFunc[EVENTS.ReqQryPartTradeTopic] = ReqQryPartTradeTopic; 
ReqFunc[EVENTS.ReqQryTradepeakTopic] = ReqQryTradepeakTopic; 
ReqFunc[EVENTS.ReqQryHistoryCpuInfoTopic] = ReqQryHistoryCpuInfoTopic; 
ReqFunc[EVENTS.ReqQryHistoryMemInfoTopic] = ReqQryHistoryMemInfoTopic; 
ReqFunc[EVENTS.ReqQryHistoryNetworkInfoTopic] = ReqQryHistoryNetworkInfoTopic; 
ReqFunc[EVENTS.ReqQryMonitorOnlineUser] = ReqQryMonitorOnlineUser; 
ReqFunc[EVENTS.ReqQryFrontStatTopic] = ReqQryFrontStatTopic; 
ReqFunc[EVENTS.ReqQryHistoryTradePeakTopic] = ReqQryHistoryTradePeakTopic; 
ReqFunc[EVENTS.ReqQryTomcatInfoTopic] = ReqQryTomcatInfoTopic; 
ReqFunc[EVENTS.ReqQryDBQueryTopic] = ReqQryDBQueryTopic; 
ReqFunc[EVENTS.ReqQryGetFileTopic] = ReqQryGetFileTopic; 
ReqFunc[EVENTS.ReqQrySyslogEventUpdateTopic] = ReqQrySyslogEventUpdateTopic; 
ReqFunc[EVENTS.ReqQryWarningQueryTopic] = ReqQryWarningQueryTopic; 
ReqFunc[EVENTS.ReqQryWebVisitTopic] = ReqQryWebVisitTopic; 
ReqFunc[EVENTS.ReqQryWarningActiveChange] = ReqQryWarningActiveChange; 
ReqFunc[EVENTS.ReqQryTradeUserLoginStatTopic] = ReqQryTradeUserLoginStatTopic; 
ReqFunc[EVENTS.ReqQryGeneralOperateTopic] = ReqQryGeneralOperateTopic; 
ReqFunc[EVENTS.ReqQryNetDeviceLinkedTopic] = ReqQryNetDeviceLinkedTopic; 
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
ReqFunc[EVENTS.ReqQryNetMonitorTaskResultTopic] = ReqQryNetMonitorTaskResultTopic; 
ReqFunc[EVENTS.ReqQryNetMonitorDeviceGroupTopic] = ReqQryNetMonitorDeviceGroupTopic; 
ReqFunc[EVENTS.ReqQryNetMonitorTaskObjectSetTopic] = ReqQryNetMonitorTaskObjectSetTopic; 
ReqFunc[EVENTS.ReqQryNetMonitorTaskInfoTopic] = ReqQryNetMonitorTaskInfoTopic; 
ReqFunc[EVENTS.ReqQryNetPartyLinkInfoTopic] = ReqQryNetPartyLinkInfoTopic; 
ReqFunc[EVENTS.ReqQryNetMonitorActionAttrTopic] = ReqQryNetMonitorActionAttrTopic; 
ReqFunc[EVENTS.ReqQryNetModuleTopic] = ReqQryNetModuleTopic; 
ReqFunc[EVENTS.ReqQryNetMonitorTaskStatusResultTopic] = ReqQryNetMonitorTaskStatusResultTopic; 
ReqFunc[EVENTS.ReqQryNetCfgFileTopic] = ReqQryNetCfgFileTopic; 
ReqFunc[EVENTS.ReqQryFileGeneralOperTopic] = ReqQryFileGeneralOperTopic; 
ReqFunc[EVENTS.ReqQryNetPartyLinkStatusInfoTopic] = ReqQryNetPartyLinkStatusInfoTopic; 
ReqFunc[EVENTS.ReqQryNetBaseLineTopic] = ReqQryNetBaseLineTopic; 
ReqFunc[EVENTS.ReqQryNetBaseLineResultTopic] = ReqQryNetBaseLineResultTopic; 
ReqFunc[EVENTS.ReqQryNetMonitorDeviceTaskTopic] = ReqQryNetMonitorDeviceTaskTopic; 
ReqFunc[EVENTS.ReqQryNetLocalPingResultInfoTopic] = ReqQryNetLocalPingResultInfoTopic; 
ReqFunc[EVENTS.ReqQryNetRomotePingResultInfoTopic] = ReqQryNetRomotePingResultInfoTopic; 
ReqFunc[EVENTS.ReqQryTradeFrontOrderRttStatTopic] = ReqQryTradeFrontOrderRttStatTopic; 
ReqFunc[EVENTS.ReqQryDiskIOTopic] = ReqQryDiskIOTopic; 
ReqFunc[EVENTS.ReqQryRouterInfoTopic] = ReqQryRouterInfoTopic; 
ReqFunc[EVENTS.ReqQryStatInfoTopic] = ReqQryStatInfoTopic; 
ReqFunc[EVENTS.ReqQryClientInfoTopic] = ReqQryClientInfoTopic; 
ReqFunc[EVENTS.ReqQryParticTradeOrderStatesTopic] = ReqQryParticTradeOrderStatesTopic; 
ReqFunc[EVENTS.ReqQryTradeOrderRttCutLineTopic] = ReqQryTradeOrderRttCutLineTopic; 
ReqFunc[EVENTS.ReqQryEventDescriptionTopic] = ReqQryEventDescriptionTopic; 
ReqFunc[EVENTS.ReqQryFrontUniqueIDTopic] = ReqQryFrontUniqueIDTopic; 
ReqFunc[EVENTS.ReqQryNetPartyLinkAddrChangeTopic] = ReqQryNetPartyLinkAddrChangeTopic; 
ReqFunc[EVENTS.ReqQryNetDelPartyLinkInfoTopic] = ReqQryNetDelPartyLinkInfoTopic; 
ReqFunc[EVENTS.ReqQryInstrumentStatusTopic] = ReqQryInstrumentStatusTopic; 
ReqFunc[EVENTS.ReqQryCurrTradingSegmentAttrTopic] = ReqQryCurrTradingSegmentAttrTopic; 
ReqFunc[EVENTS.ReqQryPerformanceTopTopic] = ReqQryPerformanceTopTopic; 
ReqFunc[EVENTS.ReqQryNetNonPartyLinkInfoTopic] = ReqQryNetNonPartyLinkInfoTopic; 
ReqFunc[EVENTS.ReqQryMonConfigInfo] = ReqQryMonConfigInfo; 
ReqFunc[EVENTS.ReqMonServiceConnect] = ReqMonServiceConnect; 
ReqFunc[EVENTS.ReqQryMonServiceStatus] = ReqQryMonServiceStatus; 
ReqFunc[EVENTS.ReqQryMonProbeTask] = ReqQryMonProbeTask; 
ReqFunc[EVENTS.ReqQryMonObjectAttr] = ReqQryMonObjectAttr; 
ReqFunc[EVENTS.ReqQryMonSyslogEvent] = ReqQryMonSyslogEvent; 
ReqFunc[EVENTS.ReqQryMonFileOffset] = ReqQryMonFileOffset; 
ReqFunc[EVENTS.ReqQryMonFileContent] = ReqQryMonFileContent; 
ReqFunc[EVENTS.ReqQryMonHostCPUAttr] = ReqQryMonHostCPUAttr; 
ReqFunc[EVENTS.ReqQryMonHostMemAttr] = ReqQryMonHostMemAttr; 
ReqFunc[EVENTS.ReqQryMonHostNetworkAttr] = ReqQryMonHostNetworkAttr; 
ReqFunc[EVENTS.ReqQryMonHostStatInfo] = ReqQryMonHostStatInfo; 
ReqFunc[EVENTS.ReqQryMonHostRouterInfo] = ReqQryMonHostRouterInfo; 
ReqFunc[EVENTS.ReqQryMonHostProcessInfo] = ReqQryMonHostProcessInfo; 
ReqFunc[EVENTS.ReqQryMonSPQuery] = ReqQryMonSPQuery; 
ReqFunc[EVENTS.ReqServiceVersion] = ReqServiceVersion; 
ReqFunc[EVENTS.ReqServiceProgram] = ReqServiceProgram; 
ReqFunc[EVENTS.ReqUpdateState] = ReqUpdateState; 
ReqFunc[EVENTS.ReqSubscribe] = ReqSubscribe; 
ReqFunc[EVENTS.ReqCancelSubscribe] = ReqCancelSubscribe; 
ReqFunc[EVENTS.ReqQryMonHostBasicEnv] = ReqQryMonHostBasicEnv; 
ReqFunc[EVENTS.ReqQryMonHostNetworkEnv] = ReqQryMonHostNetworkEnv; 
ReqFunc[EVENTS.ReqQryMonHostFileSysEnv] = ReqQryMonHostFileSysEnv; 
ReqFunc[EVENTS.ReqQryMonHostSwapEnv] = ReqQryMonHostSwapEnv; 
ReqFunc[EVENTS.ReqQryMonitor2ObjectTopic] = ReqQryMonitor2ObjectTopic; 
ReqFunc[EVENTS.ReqQryMonHostCommonEnvTopic] = ReqQryMonHostCommonEnvTopic; 
ReqFunc[EVENTS.ReqQryMonOidHostRationalTopic] = ReqQryMonOidHostRationalTopic; 
ReqFunc[EVENTS.ReqQryMonOidRelationTopic] = ReqQryMonOidRelationTopic; 

process.on ('message', function(data) {
    fileData = "reqData.event: " + data.event + '\n';
    fs.appendFile(fileName, fileData, function (err) {
        if (err) throw err;
    });
    var curReqFunc = ReqFunc[data.event];
    curReqFunc(data.reqField);
});

process.on('beforeExit', function (code) {
    
});

process.on('exit', function (code) {
    
});
