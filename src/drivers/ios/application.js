var IOSApplication = function(){
  this.target = UIATarget.localTarget();
};
IOSApplication.prototype.currentWindow = function(){
  return this.target.frontMostApp().mainWindow();
};
IOSApplication.prototype.getElementByLabel = function(label){
  return this.currentWindow().buttons()[label] || this.currentWindow().elements()[label] || this.currentWindow().textFields()[label];
};
IOSApplication.prototype.getElementsByType = function(type){
  var collection = [],
      elements   = this.currentWindow().elements();
  for(var key in elements)
  {
    if(elements[key] instanceof type)
      collection.push(elements[key]);
  }

  return collection;
};

application = new IOSApplication();
