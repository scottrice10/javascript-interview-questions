describe("deepEquality", function() {
  it("should return true when objects deeply equal", function() {

    expect(deepEquals({a: 1, b: {c: 3}}, {a: 1, b: {c: 3}})).to.be.equal(true);

  });

  it("should return false when objects not deeply equal", function() {

    expect(deepEquals({a: 1, b: {c: 5}}, {a: 1, b: {c: 6}})).to.be.equal(false);

  });
});
