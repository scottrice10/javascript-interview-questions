describe("largestProductOfThree", function() {
  it("should find largest product of three in array of positive integers", function() {
    expect(largestProductOfThree([2, 1, 3, 7])).to.be.equal(42);
  });

  it("should find largest product of three in array of negative integers", function() {
    expect(largestProductOfThree([-2, -1, -3, -7])).to.be.equal(-6);
  });

  it("should find largest product of three in array with some negative integers", function() {
    expect(largestProductOfThree([-2, -1, -3, 7])).to.be.equal(42);
  });
});
