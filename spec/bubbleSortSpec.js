describe("bubbleSort", function() {
  it("should sort unsorted array", function() {
    var before = [2, 1, 3];
    var after = [1, 2, 3];
    var sorted = bubbleSort(before);
    for(var i=0;i< after.length;i++){
      expect(sorted[i]).to.be.equal(after[i]);
    }

  });

  it("should sort sorted array 1", function() {
    var before = [1, 2, 3];
    var after = [1, 2, 3];
    var sorted = bubbleSort(before);
    for(var i=0;i< after.length;i++){
      expect(sorted[i]).to.be.equal(after[i]);
    }

  });

  it("should recurse through unsorted array", function() {
    var before = [5 ,4 , 3 ,2, 1];
    var after = [1, 2, 3, 4, 5];
    var sorted = bubbleSort(before);
    for(var i=0;i< after.length;i++){
      expect(sorted[i]).to.be.equal(after[i]);
    }

  });
});
