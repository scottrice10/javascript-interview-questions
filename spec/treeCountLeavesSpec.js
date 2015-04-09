describe("treeCountLeaves", function() {
  it("should return all leaves from the tree", function() {
    var root = new CountLeaves();
    expect(root.countLeaves()).to.be.equal(1);
    root.addChild(new CountLeaves());
    expect(root.countLeaves()).to.be.equal(1);
    root.addChild(new CountLeaves());
    root.children[0].addChild(new CountLeaves());
    root.children[0].addChild(new CountLeaves());
    root.children[0].children[0].addChild(new CountLeaves());
    expect(root.countLeaves()).to.be.equal(3);
  });
});
