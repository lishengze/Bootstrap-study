{View} = require 'space-pen'
{TextEditorView} = require 'atom-space-pen-views'
module.exports =
class LoginView extends View
  @content: ->
    @div class: 'loginView', =>
      @div class: 'modal', 'data-keyboard': 'false', role: 'dialog', outlet: "login", =>
        @div class: 'modal-dialog modal-sm', =>
          @div class: 'modal-content', =>
            @div class: 'modal-header', =>
              @button type: 'button', tabindex: '-1', class: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close', =>
                @span 'aria-hidden': 'true', 'x'
            @div class: 'modal-body', =>
              @form class: 'form-horizontal', =>
                @div class: 'form-group', =>
                  @span class: 'fa fa-user fa-3x col-lg-2'
                  @div class: 'col-lg-10', =>
                    @input class: 'form-control native-key-bindings', tabindex: '3', type: 'text', placeholder: '用户名'
                @div class: 'form-group', =>
                  @span class: 'fa fa-key fa-3x col-lg-2'
                  @div class: 'col-lg-10', =>
                    @input class: 'form-control native-key-bindings', tabindex: '4', type: 'password', placeholder: '密码'
                @div class: 'form-group', =>
                  @div class: 'col-lg-offset-8 col-lg-4', =>
                    @div class: 'checkbox', =>
                      @label '记住我', =>
                        @input type: 'checkbox', tabindex: '5',
                @div class: 'form-group', =>
                  @div class: 'col-lg-offset-8 col-lg-4', =>
                    @button type: 'submit', tabindex: '6', class: 'btn btn-primary btn-lg', '登录'
            @div class: 'modal-footer'


  initialize: ->
    $('body').append(@login.parent())

  show: ->
    $(@login[0]).modal backdrop: 'static', keyboard: false, show: true
