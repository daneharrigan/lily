describe('Before', function(){
  it('stores the before block in lily.beforeCallback', function(){
    var beforeFunc = new Function;
    lily.Before(beforeFunc);

    expect(lily.beforeCallback).toBe(beforeFunc);
  });
});
