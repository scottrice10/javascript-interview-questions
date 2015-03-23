describe("evenOccurrence", function() {
  var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);

  it("should return only even values", function() {
    var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 11, 4]);
    expect(onlyEven).to.be.equal(4);
  });

  it("should return null if no multiple evens", function() {
    var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 12, 11]);
    expect(onlyEven).to.be.equal(null);
  });

  it("should return first multiple evens if multiple sets", function() {
    var onlyEven = evenOccurrence([1, 7, 2, 6, 5, 4, 8, 9, 6, 4]);
    expect(onlyEven).to.be.equal(6);
  });
});
