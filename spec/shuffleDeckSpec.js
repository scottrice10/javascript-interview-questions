describe("shuffleDeck", function() {
  it("should randomly shuffle deck", function() {
    var newDeck = orderedDeck();
    expect(shuffleDeck(newDeck).length).to.be.equal(52);
  });
});
