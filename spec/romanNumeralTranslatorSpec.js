describe("romanNumeralTranslator", function() {
  it("should return correct value for 'LX'", function() {
    expect(translateRomanNumeral("LX")).to.be.equal(60);
  });

  it("should return correct value for 'IV'", function() {
    expect(translateRomanNumeral("IV")).to.be.equal(4);
  });
});
