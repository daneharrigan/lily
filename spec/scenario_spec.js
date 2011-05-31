describe('Scenario', function(){
  beforeEach(function(){
    lily.blocks = [];
  });

  it('stores scenarios in lily.blocks', function(){
    var count = lily.blocks.length;
    lily.Scenario('Foo Block', function(){});

    expect(lily.blocks.length).toEqual(++count);
  });

  it('returns an object with the scenario description and a success of true', function(){
    lily.Scenario('Foo Block', function(){});
    results = lily.blocks[0].execute();

    expect(results.description).toEqual('Foo Block');
    expect(results.success).toEqual(true);
  });

  it('returns an object with the scenario description, a success of false and the error message', function(){
    lily.Scenario('Bad Block', function(){ throw new Error('Failed') });
    results = lily.blocks[0].execute();

    expect(results.description).toEqual('Bad Block');
    expect(results.success).toEqual(false);
    expect(results.error).toEqual('Failed');
  });

  it('always runs the before block, steps and after block in that order', function(){
    var letters = '';
    lily.Scenario('Foo Block', function(){
      lily.Before(function(){ letters += 'A' });
      lily.After(function(){ letters += 'C' });

      lily.Given('I add B', function(){ letters += 'B' });
    });

    lily.blocks[0].execute();

    expect(letters).toEqual('ABC');
  });
});
