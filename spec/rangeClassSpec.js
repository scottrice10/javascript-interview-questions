describe("rangeClass", function() {
  it("should find range of 0 - 10", function() {
    var myRange = new Range(0,10);
    expect(myRange.size()).to.be.equal(11);
  });

  it("should find range 2-8 when skip is 2", function() {
    var evenNumbers = new Range(2,8,2);
    expect(evenNumbers.size()).to.be.equal(4);

    expect(evenNumbers.includes(2)).to.be.equal(true);

    expect(evenNumbers.includes(3)).to.be.equal(false);

    var str = "";
    evenNumbers.each(function(val){
      str += val+"! ";
    });
    str += "Who do we appreciate!?";

    expect(str).to.be.equal("2! 4! 6! 8! Who do we appreciate!?");
  });
});
