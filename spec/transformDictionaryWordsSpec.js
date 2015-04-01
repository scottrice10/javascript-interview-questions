describe("allAnagrams", function() {
  it("should produce all possible anagrams of 'abc'", function() {
    // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
    expect(allAnagrams('abc').length).to.be.equal(6);
    expect(allAnagrams('abc').indexOf('cba') > -1).to.be.equal(true);
  });
});
