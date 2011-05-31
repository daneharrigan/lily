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
