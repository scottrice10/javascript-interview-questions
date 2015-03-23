describe("telephoneWords", function() {
  it("should find all possible words for telephone number 2745", function() {
    expect(telephoneWords('2745').length).to.be.equal(108);
  });
});
