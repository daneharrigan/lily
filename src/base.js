var lily = {
	beforeCallback: null,
	afterCallback: null,
	steps: [],
	blocks: [],
  callbacks: {
    beforeScenario: function(desc, scenario){},
    afterScenario: function(desc, scenario){},
    afterScenarioAdded: function(desc, scenario){},
    beforeStep: function(step){},
    afterStep: function(step){},
    afterException: function(msg){},
    afterMatch: function(msg){}
  }
};
