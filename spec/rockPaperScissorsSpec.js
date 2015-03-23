describe("rockPaperScissors", function() {
  it("should return all possible values for 5 throws", function() {
    var result = rockPaperScissors(5);
    expect(result.length).to.be.equal(243);
  });

  it("should return all possible values for 3 throws", function() {
    var result = rockPaperScissors(3);
    expect(result.length).to.be.equal(27);
  });
});
