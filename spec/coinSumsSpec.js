describe("coinSumsSpec", function() {
  it("should make change for 1", function() {
    expect(makeChange(1)).to.be.equal(1);
  });

  it("should make change for 2", function() {
    expect(makeChange(2)).to.be.equal(2);
  });

  it("should make change for 3", function() {
    expect(makeChange(3)).to.be.equal(2);
  });

  it("should make change for 5", function() {
    expect(makeChange(5)).to.be.equal(4);
  });
});
