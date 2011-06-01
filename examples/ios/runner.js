// should have a better runner.
// would love to have something that runs
// on a "dom ready"-ish style of instruments
while( block = lily.blocks.shift() )
  block.execute();
