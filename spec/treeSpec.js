describe("tree", function() {
  var tree = treeMaker();
  tree.addChild(1);
  tree.addChild(2);

  it("should find number in tree", function() {
    expect( tree.contains(2)).to.be.equal(true);
  });
});
