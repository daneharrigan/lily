lily.assigns = function(label){
  return env.appWindow.elements()[label];
};

assigns = lily.assigns;
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
var tapOn = function(label, options) {
  var el = assigns(label);

  if(options.seconds)
    el.touchAndHold(options.seconds);
  else
    el.tap();
}

var doubleTapOn = function(label) {
  env.appWindow.elements()[label].doubleTap();
}

var clickOn = tapOn;
var doubleClickOn = doubleTapOn;
