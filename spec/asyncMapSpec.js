describe("asyncMap", function() {
  it("should push results asynchronously", function() {
    asyncMap([
      function(cb) {
        setTimeout(function() {
          cb('one');
        }, 800);
      },
      function(cb) {
        setTimeout(function() {
          cb('two');
        }, 100);
      }
    ],
    function(results) {
      // the results array will equal ['one','two'] even though
      // the second function had a shorter timeout.
      console.log(results); // ['one', 'two']
      expect(results[0]).to.be.equal('one');
      expect(results[1]).to.be.equal('two');
    });
  });
});
