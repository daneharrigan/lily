lily.Step = function(desc, block, type){
  lily.steps.push({ desc: desc, block: block, type: type });
};

lily.Given = function(desc, block) {
  lily.Step(desc, block, 'Given');
};

lily.When = function(desc, block) {
  lily.Step(desc, block, 'When');
};

lily.Then = function(desc, block) {
  lily.Step(desc, block, 'Then');
};

lily.And = function(desc, block) {
  lily.Step(desc, block, 'And');
};

Given  = lily.Given;
When   = lily.When;
Then   = lily.Then;
And    = lily.And;
