describe("rotatedArraySearchSpec", function() {
  it("should find a value in a sorted array", function() {
    expect(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)).to.be.equal(5);
    expect(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)).to.be.equal(null);
  });
});
