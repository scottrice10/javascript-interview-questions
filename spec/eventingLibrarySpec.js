describe("eventingLibrary", function() {
  it("should trigger age changed event", function() {
    var obj = mixEvents({ name: 'Alice', age: 30 });
    obj.on('ageChange', function(){
      return 'age changed';
    });
    obj.age++;

    expect(obj.trigger('ageChange')).to.be.equal('age changed');
  });
});
