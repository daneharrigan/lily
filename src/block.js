lily.Block = function(desc, block){
  this.desc  = desc;
  this.block = block;
};

lily.Block.prototype.callback = function(name){
  var self = this,
      key = name+'Callback';

  if(lily[key])
  {
    lily[key].call(self);
    lily[key] = null;
  }
};

lily.Block.prototype.execute = function(){
  var self = this;
  var response = { description: self.desc, success: true };

  try
  {
    self.block.call(self);
    self.callback('before');

    while(step = lily.steps.shift())
      step.call(self);

    self.callback('after');
    return response;
  }
  catch(e)
  {
    response.success = false;
    response.error = e.message;
    return response;
  }
};
