describe("treeMap", function() {
  it("should return transformed tree from Tree.prototype.map", function() {
    var root1 = new treeMap(1);
    var branch2 = root1.addChild(2);
    var branch3 = root1.addChild(3);
    var leaf4 = branch2.addChild(4);
    var leaf5 = branch2.addChild(5);
    var leaf6 = branch3.addChild(6);
    var leaf7 = branch3.addChild(7);
    var newTree = root1.map(function (value) {
      return value * 2;
    });

    expect(newTree.value).to.be.equal(2);
    expect(newTree.children[0].value).to.be.equal(4);
    expect(newTree.children[1].value).to.be.equal(6);
    expect(newTree.children[0].children[1].value).to.be.equal(10);
    expect(newTree.children[1].children[1].value).to.be.equal(14);
    expect(root1.value).to.be.equal(1);
  });

  it("should return transformed tree from Tree.prototype.mapInPlace", function() {
    var root2 = new treeMap(1);
    var branch2 = root2.addChild(2);
    var branch3 = root2.addChild(3);
    var leaf4 = branch2.addChild(4);
    var leaf5 = branch2.addChild(5);
    var leaf6 = branch3.addChild(6);
    var leaf7 = branch3.addChild(7);
    root2.mapInPlace(function (value) {
      return value * 2;
    });

    expect(root2.value).to.be.equal(2);
    expect(root2.children[0].value).to.be.equal(4);
    expect(root2.children[1].value).to.be.equal(6);
    expect(root2.children[0].children[1].value).to.be.equal(10);
    expect(root2.children[1].children[1].value).to.be.equal(14);
  });
});
