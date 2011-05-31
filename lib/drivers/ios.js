var tapOn = function(label, options) {
  var el = env.appWindow.elements()[label]
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


