describe('After', function(){
  it('stores the after block in lily.afterCallback', function(){
    var afterFunc = new Function;
    lily.After(afterFunc);

    expect(lily.afterCallback).toBe(afterFunc);
  });
});
