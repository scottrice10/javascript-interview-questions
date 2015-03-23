describe("linkedList", function() {
  var list = new LinkedList();

  it("should return correct linked list values", function() {
    expect(list.tail.value).to.be.equal(null);
    list.addToTail(4);
    list.addToTail(5);
    expect(list.head.value).to.be.equal(4);
    expect(list.contains(5)).to.be.equal(true);
    expect(list.contains(6)).to.be.equal(false);
    expect(list.removeHead()).to.be.equal(4);
    expect(list.tail.value).to.be.equal(5);
  });
});
