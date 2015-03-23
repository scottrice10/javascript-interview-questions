describe("composePipe", function() {
  it("should use compose to pass return value sequentially to functions", function() {
    var greet = function(name){ return 'hi: ' + name;};
    var exclaim = function(statement) { return statement.toUpperCase() + '!';};
    var welcome = compose(greet, exclaim);
    expect(welcome('phillip')).to.be.equal('hi: PHILLIP!');
  });

  it("should use pipe to pass return value sequentially to functions", function() {
    var add2 = function(number){ return number + 2; };
    var multiplyBy3 = function(number){ return number * 3; };
    expect(pipe(add2, multiplyBy3)(5)).to.be.equal(21);
    expect(pipe(add2, multiplyBy3, multiplyBy3)(5)).to.be.equal(63);
  });
});
