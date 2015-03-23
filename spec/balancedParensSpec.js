describe("balancedParensArray", function() {
  it("should works for just parens", function() {
    expect(balancedParens('(')).to.be.equal(false);
    expect(balancedParens('()')).to.be.equal(true);
    expect(balancedParens(')(')).to.be.equal(false);
    expect(balancedParens('(())')).to.be.equal(true);
  });

  it("should work for all types of brackets", function() {
    expect(balancedParens('[](){}')).to.be.equal(true);
    expect(balancedParens('[({})]')).to.be.equal(true);
    expect(balancedParens('[(]{)}')).to.be.equal(false);
  });

  it("should ignore non-bracket characters", function() {
    expect(balancedParens(' var wow  = { yo: thisIsAwesome() }')).to.be.equal(true);
    expect(balancedParens(' var hubble = function() { telescopes.awesome();')).to.be.equal(false);
  });
});
