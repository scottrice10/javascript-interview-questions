describe("isSubsetOf", function() {
  it("should find subset of inputted array 1", function() {
    var b = ['merge','reset','reset'];
    var bool = b.isSubsetOf(['reset','merge','add','commit']);
    expect(bool).to.be.equal(true);
  });

  it("should find subset of inputted array 2", function() {
    var a = ['commit','push'];
    var bool = a.isSubsetOf(['commit','rebase','push','blame']);
    expect(bool).to.be.equal(true);
  });

  it("should find subset of inputted array numbers", function() {
    var a = [1,3];
    var bool = a.isSubsetOf([1,3,2,2,4]);
    expect(bool).to.be.equal(true);
  });
});
