describe("insertionSort", function() {
  it("should be implemented", function() {
    // insertionSort([{value: 2}, {value: 1}, {value: 3}]);
    // yields [{value: 1}, {value: 2}, {value: 3}]

    expect(insertionSort([2,1,3])[0]).to.be.equal(1);
    expect(insertionSort([2,1,3])[1]).to.be.equal(2);
    expect(insertionSort([2,1,3])[2]).to.be.equal(3);
  });
});
