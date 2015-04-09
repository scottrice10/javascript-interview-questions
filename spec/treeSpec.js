describe("tree", function() {
  var tree = new treeMaker(3);
  tree.addChild(1);
  tree.addChild(2);

  it("should find number in tree", function() {
    expect( tree.contains(2)).to.be.equal(true);
  });
});
