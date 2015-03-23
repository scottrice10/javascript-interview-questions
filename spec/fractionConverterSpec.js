describe("fractionConverter", function() {
  it("should convert to '1/2'", function() {
    expect(toFraction(0.5)).to.be.equal('1/2');
  });

  it("should convert to '3/1'", function() {
    expect(toFraction(3.0)).to.be.equal('3/1');
  });

  it("should convert to '5/2'", function() {
    expect(toFraction(2.5)).to.be.equal('5/2');
  });
});
