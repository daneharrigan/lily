describe('step.js', function(){
  it('appends the step to lily.steps', function(){
    var count = lily.steps.length;
    lily.Step('A step', function(){});

    expect(lily.steps.length).toEqual(++count);
  });

  it('is assigned to lily.Given', function(){
    expect(lily.Given).toBe(lily.Step);
  });

  it('is assigned to lily.When', function(){
    expect(lily.When).toBe(lily.Step);
  });

  it('is assigned to lily.Then', function(){
    expect(lily.Then).toBe(lily.Step);
  });

  it('is assigned to lily.And', function(){
    expect(lily.And).toBe(lily.Step);
  });
});
