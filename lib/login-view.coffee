{View}           = require 'space-pen'
{TextEditorView} = require 'atom-space-pen-views'
SysUserApiStruct = require './SysUserApiStruct.js'
events           = require './events.js'
EVENTS           = new events.EVENTS()
reconnectLimits  = 10;
isFirstConnect   = true;
window.userApiStruct = SysUserApiStruct;
window.EVENTS    = EVENTS;
RequestIDFunc    = require './window-requestid.js'

failedLoginUserID = ""
bLoginFailed = false
LoginTimes = 1;

module.exports =
class LoginView extends View
  @content: ->
    @div class: 'loginView', =>
      @div class: 'modal fade', outlet: "login", id:"loginModal", =>
        @div class: 'modal-dialog modal-sm', =>
          @div class: 'modal-content', =>
            @div class: 'modal-header', =>
              @button type: 'button', tabindex: '-1', class: 'icon icon-remove-close close ', 'data-dismiss': 'modal', 'aria-label': 'Close'
              @h4 class:'modal-title pull-left', '用户登录'
            @div class: 'modal-body', =>
              @form class: 'form-horizontal', role : 'form', =>
                @div class: 'form-group', =>
                  @span class: 'fa fa-user fa-3x col-lg-2'
                  @div class: 'col-lg-10', =>
                    @input class: 'form-control native-key-bindings ',disabled:'disabled',tabindex: '3',type: 'text', placeholder: '用户名', id:'inputText', outlet:'inputText'
                @div class: 'form-group', =>
                  @span class: 'fa fa-key fa-3x col-lg-2'
                  @div class: 'col-lg-10', =>
                    @input class: 'form-control native-key-bindings', disabled:'disabled',tabindex: '4',type: 'password', placeholder: '密码', id:'inputPassword', outlet:'inputPassword'
                @div class: 'form-group', =>
                  @span class: 'fa fa-server fa-3x col-lg-2'
                  @div class: 'col-lg-10', =>
                    @select class: 'form-control',outlet:'selectPort',disabled:'disabled', =>
                      @option '165'
                      @option '166'
                @div class: 'form-group', =>
                  @div class:'row', =>
                    @div class: 'pull-right col-lg-4', =>
                      @div class: 'checkbox', =>
                        @label '记住我', =>
                          @input type: 'checkbox', tabindex: '6'
                @div class: 'form-group', =>
                  @div class: 'col-md-12', =>
                    @p  class:'text-info', id:'connectinfo', outlet:'connectinfo', '正在连接服务器......'
            @div class: 'modal-footer',=>
                  @button type: 'button', id:'loginBtn', outlet:'loginBtn',  tabindex: '7',class: 'btn btn-primary btn-lg', disabled:'disabled','登录'
                  @button type: 'button', id:'logoutBtn', outlet:'logoutBtn', tabindex: '8',class: 'btn btn-primary btn-lg', 'data-dismiss':'modal','退出'
      @div class: 'modal fade', outlet: "connectError", =>
        @div class: 'modal-dialog modal-sm', =>
          @div class: 'modal-content', =>
            @div class: 'modal-body', =>
               @h3 class:'text-center text-danger', '服务器连接断开,无法连接。'
               @div class:'row', =>
                 @div class:'col-sm-8 col-sm-offset-4', =>
                   @button type: 'button', class:'btn-default btn-lg','data-dismiss':'modal', id:'connectErrorLogout', '退出程序'

  initialize: ->
    $('body').append(@login.parent())
    $(@login[0]).modal('backdrop': 'static', keyboard: false, show: true)
    # $("#loginBtn").click(loginFunc)
    # $("#logoutBtn").click(logoutFunc)

    @loginBtn.click(loginFunc)
    @logoutBtn.click(logoutFunc)

    $("#connectErrorLogout").click(logoutFunc)
    $(".loginView").keydown(enterFunc)

    console.log "loginView pid: " + process.pid

  enterFunc = (event) ->
      if event.keyCode == 13
        console.log 'Hello Enter!'
        loginFunc();

  loginFunc = ->
        userID   = $("#inputText").val()
        password = $("#inputPassword").val()

        if userID == ""
          alert '用户名不可为空，请重新输入'
          return

        userinfo           = new userApiStruct.CShfeFtdcReqQrySysUserLoginField()
        userinfo.UserID    = userID
        userinfo.Password  = password
        userinfo.VersionID = "2.0.0.0"
        loginReqField           = {}
        loginReqField.reqObject = userinfo
        loginReqField.RequestId = ++window.ReqQrySysUserLoginTopicRequestID
        loginReqField.message   = EVENTS.RspQrySysUserLoginTopic + loginReqField.RequestId

        if bLoginFailed==true && failedLoginUserID == userID
          userApi.emitter.emit EVENTS.ReqQrySysUserLoginTopic, loginReqField
        else
          userApi.emitter.emit EVENTS.SocketIONewUserCome, loginReqField

        # registerNewUser();
        # reqQryMonitorObject()

        userApi.emitter.on loginReqField.message, (data) =>
            console.log loginReqField.message
            console.log data

            if data.hasOwnProperty 'pRspQrySysUserLogin'
              userApi.emitter.emit EVENTS.RspQyrUserLoginSucceed,{}

              # # 测试同一个客户端是否可以同时两次登录同一个用户, 结果是可以。
              # console.log 'LoginTimes: ' + LoginTimes++
              # if LoginTimes < 3
              #   userApi.emitter.emit EVENTS.ReqQrySysUserLoginTopic, loginReqField

              $("#loginModal").modal('hide') # 登录成功隐藏对话框
              if $('.checkbox')
                window.userInfo = userinfo
            else
               failedLoginUserID = userID
               bLoginFailed = true
               $("#connectinfo").attr 'class', 'text-danger'
               $("#connectinfo").text '登录错误， 错误消息为: ' + data.pRspInfo.ErrorMsg

  logoutFunc = ->
      atom.close()

  attached: ->
      connectServer(this)
      serverMsgFunc(this)

  connectServer = (_this)->
      clientMain     = require './client-main.js'
      window.userApi = clientMain

  serverMsgFunc = (_this)->
      userApi.emitter.on EVENTS.RootSocketConnect, (data)->
          console.log EVENTS.RootSocketConnect
          _this.connectinfo.text('服务器连接成功')
          isFirstConnect = false
          _this.inputText.removeAttr("disabled")
          _this.inputPassword.removeAttr("disabled")
          _this.selectPort.removeAttr("disabled")
          _this.loginBtn.removeAttr("disabled")

      userApi.emitter.on EVENTS.RootSocketConnectError, (data) ->
          console.log EVENTS.RootSocketConnectError

      userApi.emitter.on EVENTS.RootSocketDisconnect, (data) ->
          console.log EVENTS.RootSocketDisconnect

      userApi.emitter.on EVENTS.RootSocketReconnect, (data) ->
          console.log EVENTS.RootSocketReconnect

      userApi.emitter.on EVENTS.RootSocketReconnectAttempt, (data) ->
          console.log EVENTS.RootSocketReconnectAttempt

      userApi.emitter.on EVENTS.RootSocketReconnecting, (Number) ->
          console.log EVENTS.RootSocketReconnecting
          console.log Number
          if Number > reconnectLimits
            # 确定链接失败.
            if isFirstConnect
                _this.connectinfo.attr 'class', 'text-success'
                _this.connectinfo.text '连接服务器失败, 正在重连......'
            else
                $(_this.connectError[0]).modal('backdrop': 'static', keyboard: false, show: true)  #服务器断开，弹出对话框.

      userApi.emitter.on EVENTS.RootSocketReconnectError, (data) ->
          console.log EVENTS.RootSocketReconnectError
          console.log data

      userApi.emitter.on EVENTS.RootSocketReconnectFailed, (data) ->
          console.log EVENTS.RootSocketReconnectFailed
          console.log data

      userApi.emitter.on EVENTS.RspQrySysUserLoginTopic, (data) ->
          console.log "login-view2: RspQrySysUserLoginTopic CallbackData"
          console.log data

  reqQryMonitorObject = ->
    console.log 'reqQryMonitorObject!'
    reqMonitorObjectTopicData = new userApiStruct.CShfeFtdcReqQryMonitorObjectField()
    MonitorObjectTopicNumb    = 10;

    ReqQryMonitorObjectTopicField = new Array(MonitorObjectTopicNumb)
    for index in ReqQryMonitorObjectTopicField
        ReqQryMonitorObjectTopicField[index] = {}
        ReqQryMonitorObjectTopicField[index].reqObject  = reqMonitorObjectTopicData
        ReqQryMonitorObjectTopicField[index].RequestId  = ++ window.ReqQryMonitorObjectTopicRequestID
        ReqQryMonitorObjectTopicField[index].rspMessage =  EVENTS.RspQryMonitorObjectTopic + ReqQryMonitorObjectTopicField[index].RequestId

        userApi.emitter.on ReqQryMonitorObjectTopicField[index].rspMessage, (data) ->
            console.log "loginView pid: " + process.pid

     userApi.emitter.on EVENTS.RspQyrUserLoginSucceed, (data) ->
         for index in ReqQryMonitorObjectTopicField
             userApi.emitter.emit EVENTS.ReqQryMonitorObjectTopic, ReqQryMonitorObjectTopicField[index]

  registerNewUser = ->
     console.log 'registerNewUser!'
     SysUserRegisterInfo                 = new userApiStruct.CShfeFtdcReqQrySysUserRegisterField()
     SysUserRegisterInfo.UserID          = "NewReUserID" + 0;
     SysUserRegisterInfo.UserName        = "AdminName" + 0;
     SysUserRegisterInfo.UserInfo        = "Man";
     SysUserRegisterInfo.Password        = "1234567";
     SysUserRegisterInfo.Privilege       = 63;
     SysUserRegisterInfo.EMail           = "9328921@qq.com ";
     SysUserRegisterInfo.EMailFlag       = 1;
     SysUserRegisterInfo.HomePhone       = "15151803379 ";
     SysUserRegisterInfo.HomePhoneFlag   = 1;
     SysUserRegisterInfo.MobilePhone     = "051584106623 ";
     SysUserRegisterInfo.MobilePhoneFlag = 1;

     SysUserRegisterField           = {}
     SysUserRegisterField.reqObject = SysUserRegisterInfo
     SysUserRegisterField.RequestId = ++ReqQrySysUserRegisterTopicRequestID
     SysUserRegisterField.message   = EVENTS.RspQrySysUserRegisterTopic + SysUserRegisterField.RequestId

     userApi.emitter.on EVENTS.RspQyrUserLoginSucceed, (data) ->
       console.log 'RegisterNewUser: ' + EVENTS.RspQyrUserLoginSucceed
       userApi.emitter.emit EVENTS.ReqQrySysUserRegisterTopic, SysUserRegisterField

     userApi.emitter.on SysUserRegisterField.message, (data) ->
       console.log 'RegisterNewUser: '+ SysUserRegisterField.message
       console.log data
