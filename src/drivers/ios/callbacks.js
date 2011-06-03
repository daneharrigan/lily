lily.callbacks.beforeScenario =  function(desc, scenario){ Logger.append(desc); };
lily.callbacks.beforeStep     = function(step){ Logger.append('  ' + step.type + ' ' + step.desc); };
lily.callbacks.afterException = function(msg){ Logger.fail(msg); };
lily.callbacks.afterMatch = function(msg){ Logger.pass(msg); };

// trigger test run
lily.callbacks.afterScenarioAdded = function(desc, block){
  var autorun = new Runner();
  autorun.execute();
};
