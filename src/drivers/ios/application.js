var IOSApplication = function(){
  var target  = UIATarget.localTarget();
  this.window = target.frontMostApp().mainWindow();
};
IOSApplication.prototype.getElementByLabel = function(label){
  return this.window.buttons()[label] || this.window.elements()[label] || this.window.textFields()[label];
};
IOSApplication.prototype.getElementsByType = function(type){
  var collection = [],
      elements   = this.window.elements();
  for(var key in elements)
  {
    if(elements[key] instanceof type)
      collection.push(elements[key]);
  }

  return collection;
};

application = new IOSApplication();
