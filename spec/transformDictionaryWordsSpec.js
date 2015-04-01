describe("transformDictionaryWords", function() {


  it("should produce word path from 'salt' to 'sift'", function() {
    var dictionary = {
      "SALT": true,
      "SILT": true,
      "SIFT": true,

      "SAFE": true,
      "SOFT":true
    };

    var path = transformDictionaryWords('SALT', 'SIFT', dictionary);
    expect(path[0]).to.be.equal('SALT');
    expect(path[1]).to.be.equal('SILT');
    expect(path[2]).to.be.equal('SIFT');
  });

  it("should return null when no path between 'BAT' and 'ABC'", function() {
    var dictionary = {
      "BAT": true,
      "CAT": true
    };

    var path = transformDictionaryWords('BAT', 'ABC', dictionary);
    expect(path).to.be.equal(null);
  });
});
