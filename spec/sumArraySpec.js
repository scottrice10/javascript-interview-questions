describe("sumArray", function() {
  it("should sum array 1", function() {
    expect(sumArray([1, 2, 3])).to.be.equal(6);
  });

  it("should sum array 2", function() {
    expect(sumArray([1, 2, 3, -4])).to.be.equal(6);
  });

  it("should sum array 3", function() {
    var index = binarySearch([4], 5);
    expect(sumArray([1, 2, 3, -4, 5])).to.be.equal(7);
  });

  it("should sum array 4", function() {
    expect( sumArray([4, -1, 5])).to.be.equal(8);
  });

  it("should sum array 5", function() {
    expect(sumArray([10, -11, 11])).to.be.equal(11);
  });
});
