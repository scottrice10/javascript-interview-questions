describe("quickSort", function() {
  it("should sort unsorted array", function() {
    var unsorted = [4,7,4,3,9,1,2]; //1,2,3,4,4,7,9
    var ans = quickSort(unsorted);
    expect(ans[0]).to.be.equal(1);
    expect(ans[4]).to.be.equal(4);
  });

  it("should sort unsorted array with negative elements", function() {
    var unsorted = [4,7,4,3,9,1,2,-4]; //-4,1,2,3,4,4,7,9
    expect(quickSort(unsorted)[0]).to.be.equal(-4);
    expect(quickSort(unsorted)[4]).to.be.equal(4);
  });

   it("should sort unsorted array 2", function() {
      var unsorted = [5,8,1,3,7,9,2]; //1 2 3 5 7 8 9
      expect(quickSort(unsorted)[0]).to.be.equal(1);
      expect(quickSort(unsorted)[4]).to.be.equal(7);
   });

   it("should sort unsorted array 3", function() {
      var unsorted = [1,3,9,8,2,7,5]; //1 2 3 5 7 8 9
      expect(quickSort(unsorted)[0]).to.be.equal(1);
      expect(quickSort(unsorted)[4]).to.be.equal(5);
   });
});
