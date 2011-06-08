var drag = function(obj, options){
  var to   = options.to,
      from = obj;

  if(obj instanceof UIASlider)
    obj.dragToValue(to);
  else
  {
    if(!options.duration)
      options.duration = 2;

    if(to instanceof UIAElement)
      to = to.rect().origin;

    if(from instanceof UIAElement)
      from = from.rect().origin;

    application.target.dragFromToForDuration(from, to , options.duration);
  }
};
