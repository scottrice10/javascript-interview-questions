describe("spiralTraversal", function() {
  it("should be implemented", function() {
    var array = spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]); // [1, 2, 3, 6, 9, 8, 7, 4, 5]

    expect(array.length).to.be.equal(9);
    expect(array[3]).to.be.equal(6);
    expect(array[7]).to.be.equal(4);
  });
});
