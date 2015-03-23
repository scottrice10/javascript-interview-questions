describe("commonCharacters", function() {
  it("should find common characters", function() {
    var common = commonCharacters('acexivou', 'aegihobu');
    expect(common).to.be.equal("aeiou");
  });

  it("should ignore spaces", function() {
    var common = commonCharacters('acex ivou', 'aeg ihobu');
    expect(common).to.be.equal("aeiou");
  });
});
