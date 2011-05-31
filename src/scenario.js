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
