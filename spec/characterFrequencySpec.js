describe("characterFrequency", function() {
  it("should sort unsorted mississippi", function() {
    var result = characterFrequency('mississippi');
    expect(result[1][0]).to.be.equal('s');
    expect(result[1][1]).to.be.equal(4);
  });

  it("should sort unsorted miaaiaaippi", function() {
    var result = characterFrequency('miaaiaaippi');
    expect(result[1][0]).to.be.equal('i');
    expect(result[1][1]).to.be.equal(4);
  });

  it("should sort unsorted mmmaaaiiibbb", function() {
    var result = characterFrequency('mmmaaaiiibbb');
    expect(result[1][0]).to.be.equal('b');
    expect(result[1][1]).to.be.equal(3);
  });
});