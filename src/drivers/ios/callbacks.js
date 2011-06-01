lily.callbacks = {
    beforeScenario: function(desc, scenario){
      Logger.append(desc);
    },
    afterScenario: function(desc, scenario){},
    beforeStep: function(step){
      Logger.append('  ' + step.type + ' ' + step.desc);
    },
    afterStep: function(step){},
    afterException: function(msg){
      Logger.fail(msg);
    }
};
