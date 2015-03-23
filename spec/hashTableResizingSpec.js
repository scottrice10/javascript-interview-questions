describe("hashTableResizing", function() {
  it("should create a hash table", function() {
    var hashTable = makeHashTable();
    hashTable.insert("firstName", "Alan");
    hashTable.insert("lastName", "Stevens");

    expect(hashTable.retrieve("firstName")).to.be.equal("Alan");
    expect(hashTable.retrieve("lastName")).to.be.equal("Stevens");

    hashTable.insert("firstName", "Bob");
    expect(hashTable.retrieve("firstName")).to.be.equal("Bob");

    hashTable.remove("firstName");
    expect(hashTable.retrieve("firstName")).to.be.equal(null);
  });

  it("should resize when greater than 3 / 4 and less than 1 / 4 capacity", function() {
    var hashTable = makeHashTable();
    hashTable.insert("firstName", "Alan");
    hashTable.insert("lastName", "Stevens");
    hashTable.insert("dog", "Fido");
    hashTable.insert("cat", "Sammi");

    expect(hashTable.retrieve("firstName")).to.be.equal("Alan");
    expect(hashTable.retrieve("lastName")).to.be.equal("Stevens");

    hashTable.remove("firstName");
    hashTable.remove("lastName");
    hashTable.remove("dog");
    hashTable.remove("cat");
    expect(hashTable.retrieve("firstName")).to.be.equal(null);
  });
});
