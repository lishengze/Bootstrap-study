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

   // 手动添加的请求事件。
   this.emitter.on(EVENTS.StartConnectServer,  (function(_this) {
     return function(reqData) {
       var data={};
       data.event = EVENTS.StartConnectServer;
       data.reqField = reqData;
       console.log (data)
       _this.childProcess.send(data);
     };
   })(this));

   this.emitter.on(EVENTS.NewUserCome,  (function(_this) {
     return function(reqData) {
       var data={};
       data.event = EVENTS.NewUserCome;
       data.reqField = reqData;
       console.log (data)
       _this.childProcess.send(data);
     };
   })(this));

    this.emitter.on(EVENTS.ReqQryTopMemInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryTopMemInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryTopProcessInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryTopProcessInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryFileSystemInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryFileSystemInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetworkInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetworkInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryMonitorObjectTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryMonitorObjectTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryObjectRationalTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryObjectRationalTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySyslogInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySyslogInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySubscriberTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySubscriberTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryOidRelationTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryOidRelationTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryUserInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryUserInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryOnlineUserInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryOnlineUserInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryWarningEventTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryWarningEventTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryObjectAttrTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryObjectAttrTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryInvalidateOrderTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryInvalidateOrderTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryOrderStatusTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryOrderStatusTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryBargainOrderTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryBargainOrderTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryInstPropertyTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryInstPropertyTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryMarginRateTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryMarginRateTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryPriceLimitTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryPriceLimitTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryPartPosiLimitTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryPartPosiLimitTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryClientPosiLimitTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryClientPosiLimitTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySpecialPosiLimitTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySpecialPosiLimitTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryTransactionChgTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryTransactionChgTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryClientChgTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryClientChgTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryPartClientChgTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryPartClientChgTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryPosiLimitChgTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryPosiLimitChgTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryHedgeDetailChgTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryHedgeDetailChgTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryParticipantChgTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryParticipantChgTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryMarginRateChgTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryMarginRateChgTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryUserIpChgTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryUserIpChgTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryClientPosiLimitChgTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryClientPosiLimitChgTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySpecPosiLimitChgTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySpecPosiLimitChgTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryHistoryObjectAttrTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryHistoryObjectAttrTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryFrontInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryFrontInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySysUserLoginTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySysUserLoginTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySysUserLogoutTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySysUserLogoutTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySysUserPasswordUpdateTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySysUserPasswordUpdateTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySysUserRegisterTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySysUserRegisterTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySysUserDeleteTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySysUserDeleteTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryTradeLogTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryTradeLogTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryWarningEventUpdateTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryWarningEventUpdateTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryTradeUserLoginInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryTradeUserLoginInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryPartTradeTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryPartTradeTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryTradepeakTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryTradepeakTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryParticipantInitTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryParticipantInitTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryUserInitTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryUserInitTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryHistoryCpuInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryHistoryCpuInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryHistoryMemInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryHistoryMemInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryHistoryNetworkInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryHistoryNetworkInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryHistoryTradePeakTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryHistoryTradePeakTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySyslogEventTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySyslogEventTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySyslogEventSubcriberTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySyslogEventSubcriberTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryTomcatInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryTomcatInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryDBQueryTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryDBQueryTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryGetFileTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryGetFileTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQrySyslogEventUpdateTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQrySyslogEventUpdateTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryWarningQueryTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryWarningQueryTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryWebVisitTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryWebVisitTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryGeneralOperateTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryGeneralOperateTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetDeviceLinkedTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetDeviceLinkedTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryTradeUserLoginStatTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryTradeUserLoginStatTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryTradeFrontOrderRttStatTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryTradeFrontOrderRttStatTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryParticTradeOrderStatesTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryParticTradeOrderStatesTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryRouterInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryRouterInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryDiskIOTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryDiskIOTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryStatInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryStatInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryTradeOrderRttCutLineTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryTradeOrderRttCutLineTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryClientInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryClientInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryEventDescriptionTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryEventDescriptionTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryFrontUniqueIDTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryFrontUniqueIDTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetPartyLinkAddrChangeTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetPartyLinkAddrChangeTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetDelPartyLinkInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetDelPartyLinkInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryPerformanceTopTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryPerformanceTopTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryInstrumentStatusTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryInstrumentStatusTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryCurrTradingSegmentAttrTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryCurrTradingSegmentAttrTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryRealTimeNetObjectAttrTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryRealTimeNetObjectAttrTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetAreaTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetAreaTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetSubAreaTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetSubAreaTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetSubAreaIPTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetSubAreaIPTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetDeviceDetectTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetDeviceDetectTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetDeviceRequestTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetDeviceRequestTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetBuildingTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetBuildingTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetRoomTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetRoomTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetCabinetsTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetCabinetsTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetOIDTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetOIDTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetTimePolicyTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetTimePolicyTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetGatherTaskTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetGatherTaskTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetDeviceChgTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetDeviceChgTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetDeviceTypeTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetDeviceTypeTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetDeviceCategoryTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetDeviceCategoryTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetManufactoryTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetManufactoryTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetCommunityTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetCommunityTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetPortTypeTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetPortTypeTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetPartAccessSpotTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetPartAccessSpotTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetInterfaceTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetInterfaceTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetGeneralOIDTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetGeneralOIDTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetMonitorTypeTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetMonitorTypeTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetMonitorAttrScopeTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetMonitorAttrScopeTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetMonitorAttrTypeTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetMonitorAttrTypeTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetMonitorObjectAttrTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetMonitorObjectAttrTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetMonitorDeviceGroupTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetMonitorDeviceGroupTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetMonitorTaskInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetMonitorTaskInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetMonitorTaskResultTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetMonitorTaskResultTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetMonitorTaskObjectSetTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetMonitorTaskObjectSetTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetPartyLinkInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetPartyLinkInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetMonitorActionAttrTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetMonitorActionAttrTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetModuleTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetModuleTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetMonitorTaskStatusResultTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetMonitorTaskStatusResultTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetCfgFileTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetCfgFileTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetMonitorDeviceTaskTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetMonitorDeviceTaskTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryFileGeneralOperTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryFileGeneralOperTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetBaseLineTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetBaseLineTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetBaseLineResultTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetBaseLineResultTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetPartyLinkStatusInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetPartyLinkStatusInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetLocalPingResultInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetLocalPingResultInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetRomotePingResultInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetRomotePingResultInfoTopic;
            data.reqField = reqData;
            _this.childProcess.send(data);
        };
    })(this));

    this.emitter.on(EVENTS.ReqQryNetNonPartyLinkInfoTopic,  (function(_this) {
        return function(reqData) {
            var data={};
            data.event = EVENTS.ReqQryNetNonPartyLinkInfoTopic;
            data.reqField = reqData;
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
