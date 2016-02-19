{View} = require 'space-pen'
{TextEditorView} = require 'atom-space-pen-views'
module.exports =
class LoginView extends View
  @content: ->
    @div class: 'loginView', =>
      @div class: 'modal fade', tabindex: '-1', role: 'dialog', outlet: "login", =>
        @div class: 'modal-dialog modal-sm', =>
          @div class: 'modal-content', =>
            @div class: 'input-group', =>
              @span class: 'input-group-addon', =>
                @i class: 'fa fa-user fa-fw'
              @input class: 'form-control native-key-bindings', type: 'text', placeholder: '用户名'
            @div class: 'input-group', =>
              @span class: 'input-group-addon', =>
                @i class: 'fa fa-key fa-fw'
              @input class: 'form-control native-key-bindings', type: 'password', placeholder: '密码'
            @div class: 'checkbox', =>
              @label =>
                  @input type: 'checkbox'
            @button class: 'btn btn-primary', "登录"

  initialize: ->
    $('body').append(@login.parent())

  show: ->
    $(@login[0]).modal('show')
