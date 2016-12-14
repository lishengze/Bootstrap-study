LoginView = require './login-view'
{CompositeDisposable} = require 'atom'

module.exports =
  activate: (state) ->
    @loginView = new LoginView()
    @subscriptions = new CompositeDisposable

  deactivate: ->
    @subscriptions.dispose()
