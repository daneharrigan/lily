var tapOn = function(obj, options) {
  if(!options)
    options = {};

  var el = obj;
  if(typeof obj == 'string')
    el = application.getElementByLabel(obj);

  if(el instanceof UIASlider)
    el.dragInsideWithOptions({ touchCount: 1 });
  else if(el instanceof UIAElement)
  {
    if(options.seconds)
      el.touchAndHold(options.seconds);
    else
      el.tap();
  }
  else
  {
    if(options.seconds)
      application.target.touchAndHold(el, options.seconds);
    else
      application.target.tap(el);
  }
};

var doubleTapOn = function(obj) {
  var el = obj;
  if(typeof obj == 'string')
    el = application.getElementByLabel(obj);

  el.doubleTap();
};

var clickOn = tapOn;
var doubleClickOn = doubleTapOn;
