describe("treeDFSelect", function() {
  var root1 = new DFSelect(1);
  var branch2 = root1.addChild(2);
  var branch3 = root1.addChild(3);
  var leaf4 = branch2.addChild(4);
  var leaf5 = branch2.addChild(5);
  var leaf6 = branch3.addChild(6);
  var leaf7 = branch3.addChild(7);

  it("should return only odd numbers", function() {
    var result = root1.DFSelect(function(value, depth) {
      return value % 2;
    });

    expect(result.length).to.be.equal(4);
    expect(result[3]).to.be.equal(7);
  });

  it("should return nodes at depth 1", function() {
    var result = root1.DFSelect(function(value, depth) {
      return depth === 1;
    });

    expect(result.length).to.be.equal(2);
    expect(result[1]).to.be.equal(3);
  });
});
