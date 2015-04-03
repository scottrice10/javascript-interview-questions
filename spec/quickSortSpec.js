describe("quickSort", function() {
  it("should sort unsorted array", function() {
    var unsorted = [4,7,4,3,9,1,2]; //1,2,3,4,4,7,9
    expect(quickSort(unsorted)[0]).to.be.equal(1);
    expect(quickSort(unsorted)[4]).to.be.equal(4);
  });

  it("should sort unsorted array with negative elements", function() {
    var unsorted = [4,7,4,3,9,1,2,-4]; //-4,1,2,3,4,4,7,9
    expect(quickSort(unsorted)[0]).to.be.equal(-4);
    expect(quickSort(unsorted)[4]).to.be.equal(4);
  });
});
