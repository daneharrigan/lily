var IOSApplication = function(){
  this.target = UIATarget.localTarget();
  this.window = this.target.frontMostApp().mainWindow();
};
IOSApplication.prototype.getElementByLabel = function(label){
  return this.window.buttons()[label] || this.window.elements()[label] || this.window.textFields()[label];
};
IOSApplication.prototype.getElementsByType = function(type){
  var collection = [],
      elements   = this.window.elements();
  for(var key in elements)
  {
    if(elements[key] instanceof type)
      collection.push(elements[key]);
  }

  return collection;
};

application = new IOSApplication();
lily.callbacks.beforeScenario =  function(desc, scenario){ Logger.append(desc); };
lily.callbacks.beforeStep     = function(step){ Logger.append('  ' + step.type + ' ' + step.desc); };
lily.callbacks.afterException = function(msg){ Logger.fail(msg); };
lily.callbacks.afterMatch = function(msg){ Logger.pass(msg); };

// trigger test run
lily.callbacks.afterScenarioAdded = function(desc, block){
  var autorun = new Runner();
  autorun.execute();
};
var IOSLogger = function(){
  this.log = function(prefix, msg){
    if(prefix.length)
      prefix = '['+prefix+'] ';
    UIALogger.logMessage(prefix + msg);
  };
};

IOSLogger.prototype = {
  error:  function(msg){ this.log('Error', msg) },
  warn:   function(msg){ this.log('Warn', msg) },
  info:   function(msg){ this.log('Info', msg) },
  fail:   function(msg){ UIALogger.logFail(msg) },
  pass:   function(msg){ UIALogger.logPass(msg) },
  append: function(msg) { this.log('', msg) },
  start:  function(msg) { UIALogger.logStart(msg) }
};

Logger = new IOSLogger();
var Runner = function(){};

Runner.prototype.execute = function(){
  var self = this;
  while( block = lily.blocks.shift() )
    block.execute();
};
var tapOn = function(obj, options) {
  if(!options)
    options = {};

  var el = obj;
  if(typeof obj == 'string')
    el = application.getElementByLabel(obj);

  if(options.seconds)
    el.touchAndHold(options.seconds);
  else
    el.tap();
};

var doubleTapOn = function(obj) {
  var el = obj;
  if(typeof obj == 'string')
    el = application.getElementByLabel(obj);

  el.doubleTap();
};

var clickOn = tapOn;
var doubleClickOn = doubleTapOn;
