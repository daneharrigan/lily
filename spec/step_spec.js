describe('Given', function(){
  it('stores the step block in lily.steps', function(){
    var count = lily.steps.length;
    lily.Given('A step', function(){});

    expect(lily.steps.length).toEqual(++count);
  });
});

describe('When', function(){
  it('stores the step block in lily.steps', function(){
    var count = lily.steps.length;
    lily.When('A step', function(){});

    expect(lily.steps.length).toEqual(++count);
  });
});

describe('Then', function(){
  it('stores the step block in lily.steps', function(){
    var count = lily.steps.length;
    lily.Then('A step', function(){});

    expect(lily.steps.length).toEqual(++count);
  });
});

describe('And', function(){
  it('stores the step block in lily.steps', function(){
    var count = lily.steps.length;
    lily.And('A step', function(){});

    expect(lily.steps.length).toEqual(++count);
  });
});
