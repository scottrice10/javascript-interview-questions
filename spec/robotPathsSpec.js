describe('robotPaths', function() {
  it('should correctly identify the number of unique paths for a 1x1 grid', function() {
    expect(robotPaths(1)).to.be.equal(1);
  });

  it('should correctly identify the number of unique paths for a 2x2 grid', function() {
    expect(robotPaths(2)).to.be.equal(2);
  });

  it('should correctly identify the number of unique paths for a 3x3 grid', function() {
    expect(robotPaths(3)).to.be.equal(12);
  });

  it('should correctly identify the number of unique paths for a 4x4 grid', function() {
    expect(robotPaths(4)).to.be.equal(184);
  });

  it('should correctly identify the number of unique paths for a 5x5 grid', function() {
    expect(robotPaths(5)).to.be.equal(8512);
  });

  xit('should correctly identify the number of unique paths for 6x6 grid', function() {
    expect(robotPaths(6)).to.be.equal(1262816);
  });
});
