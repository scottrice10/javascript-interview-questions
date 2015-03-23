describe("hashTable", function() {
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
});
