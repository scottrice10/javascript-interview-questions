describe("longestRun", function() {
  it("should find longest run 1", function() {
    expect(longestRun("abbbcc")[1]).to.be.equal(3);
  });

  it("should find longest run 2", function() {
    expect(longestRun("aabbc")[1]).to.be.equal(1);
  });

  it("should find longest run 3", function() {
    expect(longestRun("abcd")[1]).to.be.equal(0);
  });
});
