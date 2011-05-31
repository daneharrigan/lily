var lily = {
	beforeCallback: null,
	afterCallback: null,
	steps: [],
	blocks: []
};
lily.Scenario = function(desc, block){
  lily.blocks.push(new lily.Block(desc, block));
};

lily.Before = function(block){
  lily.beforeCallback = block;
};

lily.After = function(block){
  lily.afterCallback = block;
};

Scenario = lily.Scenario;
Before   = lily.Before;
After    = lily.After;
lily.Step = function(desc, block){
  lily.steps.push(block);
};

lily.Given  = lily.Step;
lily.When   = lily.Step;
lily.Then   = lily.Step;
lily.And    = lily.Step;

Given  = lily.Given;
When   = lily.When;
Then   = lily.Then;
And    = lily.And;
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
