var IOSLogger = function(){
  var log = function(prefix, msg){
    UIALogger.logMessage('['+prefix+'] ' + msg);
  };
};

IOSLogger.prototype = {
  error: function(msg){ log('Error', msg) },
  warn:  function(msg){ log('Warn', msg) },
  info:  function(msg){ log('Info', msg) }
};

Logger = new IOSLogger();
