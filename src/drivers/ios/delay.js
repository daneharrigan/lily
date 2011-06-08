var delay = function(duration){
  application.target.delay(duration);
};

var optionalDelay = function(duration){
  if(enableOptionalDelay)
    application.target.delay(duration);
};
