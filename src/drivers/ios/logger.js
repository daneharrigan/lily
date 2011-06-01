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
