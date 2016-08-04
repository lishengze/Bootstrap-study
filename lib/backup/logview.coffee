        # userinfo2           = new userApiStruct.CShfeFtdcReqQrySysUserLoginField()
        # userinfo2.VersionID = "2.0.0.0"
        # userinfo2.UserID    = "NewUserIDJ_1"
        # userinfo2.Password  = "1234567"
        # loginViewReqQrySysUserLoginTopicRequestID = 2  #++window.ReqQrySysUserLoginTopicRequestID
        # loginReqField2           = {}
        # loginReqField2.reqObject = userinfo2
        # loginReqField2.RequestId = loginViewReqQrySysUserLoginTopicRequestID
        # loginReqField2.message   = EVENTS.RspQrySysUserLoginTopic + loginViewReqQrySysUserLoginTopicRequestID

                # netMonitorAttrerScope               = new userApiStruct.CShfeFtdcReqQryNetMonitorAttrScopeField()
                # netMonitorAttrerScope.OperationType = 0;
                # netMonitorAttrerScope.ID            = 0;
                # netMonitorAttrerScope.CName         = " ";
                # netMonitorAttrerScope.EName         = " ";
                # netMonitorAttrerScope.Comments      = " ";
                # netMonitorAttrerScopeField1            = {}
                # netMonitorAttrerScopeField1.reqObject  = netMonitorAttrerScope
                # netMonitorAttrerScopeField1.RequestId  = ++window.ReqQryNetMonitorAttrScopeTopicRequestID;
                # netMonitorAttrerScopeField1.rspMessage = EVENTS.RspQryNetMonitorAttrScopeTopic + netMonitorAttrerScopeField1.RequestId
                #
                # netMonitorAttrerScopeField2            = {}
                # netMonitorAttrerScopeField2.reqObject  = netMonitorAttrerScope
                # netMonitorAttrerScopeField2.RequestId  = ++window.ReqQryNetMonitorAttrScopeTopicRequestID;
                # netMonitorAttrerScopeField2.rspMessage = EVENTS.RspQryNetMonitorAttrScopeTopic + netMonitorAttrerScopeField2.RequestId
                #
                # netMonitorAttrerScopeField3            = {}
                # netMonitorAttrerScopeField3.reqObject  = netMonitorAttrerScope
                # netMonitorAttrerScopeField3.RequestId  = ++window.ReqQryNetMonitorAttrScopeTopicRequestID;
                # netMonitorAttrerScopeField3.rspMessage = EVENTS.RspQryNetMonitorAttrScopeTopic + netMonitorAttrerScopeField3.RequestId

                            # userApi.emitter.emit EVENTS.ReqQryNetMonitorAttrScopeTopic, netMonitorAttrerScopeField1
                            # userApi.emitter.emit EVENTS.ReqQryNetMonitorAttrScopeTopic, netMonitorAttrerScopeField2
                            # userApi.emitter.emit EVENTS.ReqQryNetMonitorAttrScopeTopic, netMonitorAttrerScopeField3

                                    #
                                    # userApi.emitter.on loginReqField2.message, (data) =>
                                    #     console.log loginReqField2.message
                                    #     console.log data
                                    #
                                    # userApi.emitter.on netMonitorAttrerScopeField1.rspMessage, (data) =>
                                    #   console.log netMonitorAttrerScopeField1.rspMessage
                                    #   console.log data
                                    #
                                    # userApi.emitter.on netMonitorAttrerScopeField2.rspMessage, (data) =>
                                    #   console.log netMonitorAttrerScopeField2.rspMessage
                                    #   console.log data
                                    #
                                    # userApi.emitter.on netMonitorAttrerScopeField3.rspMessage, (data) =>
                                    #   console.log netMonitorAttrerScopeField3.rspMessage
                                    #   console.log data
