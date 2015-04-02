describe("lruCache", function() {
  it("should be implemented", function() {
    var cache = new LRUCache(3); // limit of 3 items
    cache.set("item1", 1);
    cache.set("item2", 2);
    cache.set("item3", 3);
    cache.set("item4", 4);

    expect(cache.get("item3")).to.be.equal(3);
    expect(cache.get("item2")).to.be.equal(2);

     // item1 was removed because it was the oldest item by insertion/usage
    expect(cache.get("item1")).to.be.equal(null);

    // item4 is removed to make room, because it is the oldest by usage,
    // which takes priority.
    cache.set("item5");
    expect(cache.get("item4")).to.be.equal(null);

    // item3 is also removed, because it was retrieved before item2 was
    // last retrieved.
    expect(cache.set("item6"));
    expect(cache.get("item3")).to.be.equal(null);
  });
});
