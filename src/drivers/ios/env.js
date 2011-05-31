var IOSEnvironment = function()
{
  var target  = UIATarget.localTarget();
  this.window = target.frontMostApp().mainWindow();
}
IOSEnvironment.prototype.logger = {
  error: function(msg){ UIALogger.logMessage('[Error]: '+ msg) },
  warn:  function(msg){ UIALogger.logMessage('[Warn]: ' + msg) },
  info:  function(msg){ UIALogger.logMessage('[Info]: ' + msg) }
};

var env = new IOSEnvironment();
