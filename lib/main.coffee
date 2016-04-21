LoginView = require './login-view'
{CompositeDisposable} = require 'atom'

module.exports =
  activate: (state) ->
    @loginView = new LoginView()
    @subscriptions = new CompositeDisposable
    # @subscriptions.add atom.commands.add('atom-workspace', {
    #   'monitor-login:show': => @loginView.show()
    # })

  deactivate: ->
    # @sidebarPanel.destroy()
    @subscriptions.dispose()
    # @sidebar.destroy()
