var IOSApplication = function(){
  var target  = UIATarget.localTarget();
  this.window = target.frontMostApp().mainWindow();
};
IOSApplication.prototype.getElementByLabel = function(label){
  return this.window.elements()[label];
};

application = new IOSApplication();
