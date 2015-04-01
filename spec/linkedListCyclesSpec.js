describe("linkedListCycles", function() {
  it("should determine whether linked list is circular", function() {
    /**
     * A -> B -> C
     *      ^    |
     *      |    v
     *      E <- D
     **/

    var nodeA = Node('A');
    var nodeB = nodeA.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    expect(hasCycle(nodeA)).to.be.equal(false);
    nodeE.next = nodeB;
    expect(hasCycle(nodeA)).to.be.equal(true);
  });
});
