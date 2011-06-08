var fillIn = function(obj, options){
  if(typeof obj == 'string')
    obj = application.getElementByLabel(obj);

  obj.setValue(options.with);
};
