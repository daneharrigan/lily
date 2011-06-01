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
    lily.callbacks.beforeScenario(self.desc, self.block);

    self.block.call(self);
    self.callback('before');

    while(step = lily.steps.shift())
    {
      var args = step.desc.match(/('[^']*')|("[^"]*")/g);
      if(!args)
        args = [];
      for(var i=0;i<args.length;i++)
        args[i] = args[i].replace(/^("|')|("|')$/g,'');

      lily.callbacks.beforeStep(step);
      step.block.apply(self, args);
      lily.callbacks.afterStep(step);
    }

    self.callback('after');
    lily.callbacks.afterScenario(self.desc, self.block);
    return response;
  }
  catch(e)
  {
    response.success = false;
    response.error = e.message;
    lily.callbacks.afterException(e.message);
    return response;
  }
};
