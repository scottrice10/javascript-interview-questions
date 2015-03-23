describe("queueStack", function() {
  it("should dequeue properly", function() {
    var queue = new Queue();
    queue.enqueue('a');
    var item = queue.dequeue();
    // `dequeue()` should return the item that was just dequeued
    expect(item).to.be.equal('a');
    // queue.size() should be 0 since we just tried to add, then removed an,
    // an item from the queue.
    expect(queue.size()).to.be.equal(0);
  });

  it("should dequeue properly", function() {
    var queue = new Queue();
    queue.enqueue('1');
    queue.enqueue('2');
    var item = queue.dequeue();

    // aka, `dequeue()` should return the item that was just dequeued
    // aka, the item just dequeued should be the first item we added
    expect(item).to.be.equal('1');
    item = queue.dequeue();
    // aka, the item dequeued after the first should be the second
    // item we added
    expect(item).to.be.equal('2');
  });
});
