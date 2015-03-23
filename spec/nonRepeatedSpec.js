describe("nonRepeated", function() {

  it("should return first non-repeated 1", function() {
    var nonRepeat1 = firstNonRepeatedCharacter("ABA");
    expect(nonRepeat1).to.be.equal("B");
  });

  it("should return first non-repeated 2", function() {
    var nonRepeat2 = firstNonRepeatedCharacter("AACBDB");
    expect(nonRepeat2).to.be.equal("C");
  });

  it("should return first non-repeated 3", function() {
    var nonRepeat3 = firstNonRepeatedCharacter("A");
    expect(nonRepeat3).to.be.equal("A");
  });

  it("should return first non-repeated 4", function() {
    var nonRepeat4 = firstNonRepeatedCharacter("aa11cc2");
    expect(nonRepeat4).to.be.equal("2");
  });

  it("should return first non-repeated 5", function() {
    var nonRepeat4 = firstNonRepeatedCharacter("a1c2");
    expect(nonRepeat4).to.be.equal("a");
  });

  it("should return first non-repeated 6", function() {
    var nonRepeat4 = firstNonRepeatedCharacter("aa11");
    expect(nonRepeat4).to.be.equal(null);
  });
});
