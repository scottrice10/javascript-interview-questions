describe("implementingOperators", function() {
  it("should multiply integers", function() {
    expect(multiply(2,2)).to.be.equal(4);
  });

  it("should divide integers", function() {
    expect(divide(4,2)).to.be.equal(2);
  });

  it("should find modulus of integers", function() {
    expect(modulo(5,3)).to.be.equal(2);
  });
});
