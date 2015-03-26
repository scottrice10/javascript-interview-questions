describe("treeDiameter", function() {
  //     2
  //    / \
  //   1   4
  //  /    / \
  // 3    5   6

  var leaf4 = new treeDiameter(3);
  var leaf6 = new treeDiameter(5);
  var leaf7 = new treeDiameter(6);
  var branch2 = new treeDiameter(1, leaf4, null);
  var branch3 = new treeDiameter(4, leaf6, leaf7);
  var root = new treeDiameter(2, branch2, branch3);

  it("should find diameter of tree when widest path from root", function() {
    expect( findDiameter(root)).to.be.equal(4);
  });

  //     2
  //    /
  //   1
  //  / \
  // 3    4
  //      / \
  //     5   6
  var leaf6 = new treeDiameter(5);
  var leaf7 = new treeDiameter(6);
  var leaf3 = new treeDiameter(3);
  var leaf4 = new treeDiameter(4, leaf6, leaf7);
  branch2 = new treeDiameter(1, leaf3, leaf4);
  var root2 = new treeDiameter(2, branch2, null);

  it("should find diameter of tree when widest path not from root", function() {
    expect( findDiameter(root2)).to.be.equal(3);
  });
});