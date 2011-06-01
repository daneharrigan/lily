var tapOn = function(obj, options) {
  if(!options)
    options = {};

  var el = obj;
  if(typeof obj == 'string')
    el = application.getElementByLabel(obj);

  if(options.seconds)
    el.touchAndHold(options.seconds);
  else
    el.tap();
};

var doubleTapOn = function(obj) {
  var el = obj;
  if(typeof obj == 'string')
    el = application.getElementByLabel(obj);

  el.doubleTap();
};

var clickOn = tapOn;
var doubleClickOn = doubleTapOn;
