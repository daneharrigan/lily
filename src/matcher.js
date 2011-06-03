lily.Matcher = function(subject){
  this.subject = subject;
};

lily.Matcher.prototype = {
  toEqual: function(value){
    if( (this.subject == value) )
      lily.callbacks.afterMatch(this.subject + ' equals ' + value);
    else
      throw new Error(this.subject + ' does not equal ' + value);
  },
  toBeEmpty: function(){
    if( (this.subject == '' || this.subject == null) )
      lily.callbacks.afterMatch(this.subject + ' is empty');
    else
      throw new Error(this.subject + ' is not empty');
  },
  toExist: function(){
    if( (this.subject != lily.__undefined__ || this.subject != null) )
      lily.callbacks.afterMatch(this.subject + ' exists');
    else
      throw new Error(this.subject + ' does not exist');
  }
};
