lily.expect = function(subject){
	return new lily.Matcher(subject);
};

expect = lily.expect;
