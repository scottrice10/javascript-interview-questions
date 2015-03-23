describe("rotateMatrix", function() {
  var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 'A', 'B', 'C'],
    ['D', 'E', 'F', 'G']
  ];

  it("should rotate matrix right", function() {
    var rotated = rotateMatrix(matrix);
    expect(rotated[0][0]).to.be.equal('D');
    expect(rotated[3][2]).to.be.equal(8);
  });
});
