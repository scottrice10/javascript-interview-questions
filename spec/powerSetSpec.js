describe("powerSet", function() {
  it("should find powerSet for 'abc'", function() {
    var array = [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ];
    var newSet = powerSet("abc");
    expect(newSet.length).to.be.equal(array.length);
    expect(newSet[0]).to.be.equal("");
  });

  it("should find powerSet for 'jump'", function() {
    var array = ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"];
    var newSet = powerSet("jump");
    expect(newSet.length).to.be.equal(array.length);
    expect(newSet[0]).to.be.equal("");
  });

  it("should find powerSet for 'jumpp'", function() {
    var array = ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"];
    var newSet = powerSet("jumpp");
    expect(newSet.length).to.be.equal(array.length);
    expect(newSet[0]).to.be.equal("");
  });
});
