LoginView = require './login-view'
{CompositeDisposable} = require 'atom'
HelloWorld = require 'helloworld'
module.exports =
  activate: (state) ->
    @loginView = new LoginView()
    @subscriptions = new CompositeDisposable
    HelloWorld();

  deactivate: ->
    @subscriptions.dispose()
