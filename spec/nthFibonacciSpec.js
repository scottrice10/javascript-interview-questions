describe("nthFibonacci", function() {

  it("should return correct value for 2", function() {
    var value = nthFibonacci(2);
    expect(value).to.be.equal(1);
  });

  it("should return correct value for 3", function() {
    var value = nthFibonacci(3);
    expect(value).to.be.equal(2);
  });

  it("should return correct value for 4", function() {
    var value = nthFibonacci(4);
    expect(value).to.be.equal(3);
  });

  it("should return correct value for 5", function() {
    var value = nthFibonacci(5);
    expect(value).to.be.equal(5);
  });

  it("should return correct value for 6", function() {
    var value = nthFibonacci(6);
    expect(value).to.be.equal(8);
  });
});
