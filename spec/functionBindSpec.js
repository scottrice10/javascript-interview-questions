describe("functionBind", function() {

  var alice = {
    name: 'alice',
    shout: function() {
      return (this.name);
    }
  };

  it("should return proper function 1", function() {
    var boundShout = bind(alice.shout, alice);
    expect(boundShout()).to.be.equal('alice');
  });

  it("should return proper function 2", function() {
    var boundShout = bind(alice.shout, {name: 'bob'});
    expect(boundShout()).to.be.equal('bob');
  });

  it("should return proper function 3", function() {
    var func = function(a, b) {
      return a + b
    };
    var boundFunc = bind(func, null, 'foo');
    var result = boundFunc('bar');
    expect(result).to.be.equal('foobar'); // true
  });

  it("should work using prototype inheritance 1", function() {
    var boundShout = alice.shout.bind(alice);
    expect(boundShout()).to.be.equal('alice');
  });

  it("should work using prototype inheritance 2", function() {
    var boundShout = alice.shout.bind({name: 'bob'});
    expect(boundShout()).to.be.equal('bob');
  });
});
