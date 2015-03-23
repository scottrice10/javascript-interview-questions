describe("binarySearchArray", function() {
  it("should sort unsorted array", function() {
    var index = binarySearch([1, 2, 3, 4, 5], 4);
    expect(index).to.be.equal(3);
  });

  it("should sort unsorted array 2", function() {
    var index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9);
    expect(index).to.be.equal(8);
  });

  it("should return null for no solution", function() {
    var index = binarySearch([4], 5);
    expect(index).to.be.equal(null);
  });

  it("should return 1 for index 0", function() {
    var index = binarySearch([1, 2, 3, 4, 5], 1);
    expect(index).to.be.equal(0);
  });
});
