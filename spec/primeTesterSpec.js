describe("primeTester", function() {
  it("should return true for 11", function() {
    expect(primeTester(11)).to.be.equal(true);
  });

  it("should false for 100", function() {
    expect(primeTester(100)).to.be.equal(false);
  });
});

describe("primeSieve", function() {
  it("should find all prime numbers in the range 0 to 100", function() {
    expect(primeSieve(0,100).length).to.be.equal(25);
  });

  it("should find all prime numbers in the range 1000 to 2000", function() {
    expect(primeSieve(1000,2000).length).to.be.equal(135);
  });
});
