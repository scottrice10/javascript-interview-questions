describe("asyncMap", function() {
  it("should push results asynchronously", function(done) {
    asyncMap([
      function(cb) {
        setTimeout(function() {
          cb('one');
        }, 20);
      },
      function(cb) {
        setTimeout(function() {
          cb('two');
        }, 10);
      }
    ],
    function(results) {
      // the results array will equal ['one','two'] even though
      // the second function had a shorter timeout.
      expect(results[0]).to.be.equal('one');
      expect(results[1]).to.be.equal('two');
      done()
    });
  });
});
