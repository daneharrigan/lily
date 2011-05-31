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
  lily.steps.push({ desc: desc, block: block });
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
    {
      var args = step.desc.match(/('[^']*')|("[^"]*")/g);
      if(!args)
        args = [];
      for(var i=0;i<args.length;i++)
        args[i] = args[i].replace(/^("|')|("|')$/g,'');

      step.block.apply(self, args);
    }

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
lily.expect = function(subject){
	return new lily.Matcher(subject);
};

expect = lily.expect;
lily.Matcher = function(subject){
  this.subject = subject;
};

lily.Matcher.prototype = {
  toEqual: function(value){
    if( !(this.subject == value) )
      throw new Error(this.subject + ' does not equal ' + value);
  },
  toBeEmpty: function(){
    if( !(this.subject == '' || this.subject == null) )
      throw new Error(this.subject + ' is not empty');
  }
};
