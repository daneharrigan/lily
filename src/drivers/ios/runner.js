var Runner = function(){};

Runner.prototype.execute = function(){
  var self = this;
  while( block = lily.blocks.shift() )
    block.execute();
};
