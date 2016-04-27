{View}           = require 'space-pen'
{TextEditorView} = require 'atom-space-pen-views'
SysUserApiStruct = require './SysUserApiStruct.js'
events           = require './events.js'
EVENTS           = new events.EVENTS()
clientMain       = require './client-main.js'
window.userapi   = clientMain;

module.exports =
class LoginView extends View
  @content: ->
    @div class: 'loginView', =>
      @div class: 'modal fade', role: 'dialog', outlet: "login", =>
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
                    @input class: 'form-control native-key-bindings', tabindex: '3', type: 'text', placeholder: '用户名', outlet:'inputText'
                @div class: 'form-group', =>
                  @span class: 'fa fa-key fa-3x col-lg-2'
                  @div class: 'col-lg-10', =>
                    @input class: 'form-control native-key-bindings', tabindex: '4', type: 'password', placeholder: '密码', outlet:'inputPassword'
                @div class: 'form-group', =>
                  @span class: 'fa fa-server fa-3x col-lg-2'
                  @div class: 'col-lg-10', =>
                    @select class: 'form-control', =>
                      @option '165'
                      @option '166'
                    # @div class: 'input-group', =>
                    # #  @div class:'col-lg-7', =>
                    #   @input class: 'form-control', tabindex: '5', type: 'text', placeholder: '服务器'
                    #   @div class: 'input-group-btn', =>
                    #     @button type: 'button', 'Z',class: 'btn btn-default btn-lg dropdown-toggle','data-toggle':'dropdown', =>
                    #       @span class:'caret'
                    #     @ul class: 'dropdown-menu',=>
                    #       @li '163'
                    #       @li '165'
                @div class: 'form-group', =>
                  @div class: 'pull-right col-lg-4', =>
                    @div class: 'checkbox', =>
                      @label '记住我', =>
                        @input type: 'checkbox', tabindex: '6'
            @div class: 'modal-footer',=>
                  @button outlet:'loginSubmit',type: 'button', tabindex: '7', class: 'btn btn-primary btn-lg', '登录'
                  @button type: 'button', tabindex: '8', 'data-dismiss':'modal', class: 'btn btn-primary btn-lg', '退出'

  initialize: ->
    $('body').append(@login.parent())
    $(@login[0]).modal('backdrop': 'static', keyboard: false, show: true) #打开客户端即显示登录界面

    console.log 'initialize!'

    @loginSubmit.click(=>
        console.log '@loginSubmit!'
        userID   = @inputText.val();
        password = @inputPassword.val();

        userinfo           = new SysUserApiStruct.CShfeFtdcReqQrySysUserLoginField();
        userinfo.UserID    = userID;
        userinfo.Password  = password;
        userinfo.VersionID = "2.0.0.0";

        console.log 'login-view: data from dialog'
        console.log userinfo

        # userapi.childProcess.send {event: EVENTS.StartConnectServer, reqField: {} }
        #
        # userapi.emitter.on EVENTS.ConnectServerComplete, (data)->
        #       console.log "ConnectServerComplete"
        #       userapi.childProcess.send {event: EVENTS.NewUserCome, reqField: userinfo }

        userapi.childProcess.send {event: EVENTS.NewUserCome, reqField: userinfo }
    )

  # 在哪处理回调数据，在哪定义;
  userapi.emitter.on "Test Front!", (data)->
      console.log 'login-view: Test Front!'
      console.log data

  console.log 'This is login-view!'

  userapi.emitter.on "RspQrySysUserLoginTopic CallbackData", (data) ->
      console.log "login-view: RspQrySysUserLoginTopic CallbackData"
      console.log data

  show: ->
    $(@login[0]).modal 'backdrop': 'static', keyboard: false, show: true # backdrop 指定背景， true 表示 使除modal外的背景变暗且点击背景会屏蔽modal static 变暗且不屏蔽modal false表示不会使背景变暗。
                                                                         # keyboard 按下esc时是否退出 modal true表示退出
