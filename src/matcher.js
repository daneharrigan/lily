lily.Matcher = function(subject){
  this.subject = subject;
};

lily.Matcher.prototype = {
  toEqual: function(value){
    if( !(this.subject == value) )
      throw new Error(this.subject + ' does not equal ' + value);
  },
  toBeEmpty: function(){
    if( !(this.subject == '' || this.subject == null) )
      throw new Error(this.subject + ' is not empty');
  }
};
