describe("commonAncestor", function() {
  var greatGrandma = new commonAncestor('greatGrandma');
  var grandma = new commonAncestor('grandma');
  greatGrandma.addChild(grandma);
  var mom = new commonAncestor('mom');
  var aunt = new commonAncestor('aunt');
  grandma.addChild(mom);
  grandma.addChild(aunt);
  var me = new commonAncestor('me');
  var brother = new commonAncestor('brother');
  mom.addChild(me);
  mom.addChild(brother);
  var cousin = new commonAncestor('cousin');
  aunt.addChild(cousin);

  var notRelated = new Tree();


  it("should find common ancestor path", function() {
    expect(greatGrandma.getAncestorPath(me).length).to.be.equal(4); //-> [greatGrandma, grandma, mom, me]
    expect(greatGrandma.getAncestorPath(me)[2]).to.be.equal('mom');

    expect(grandma.getAncestorPath(me).length).to.be.equal(3); //-> [grandma, mom, me]
    expect(grandma.getAncestorPath(me)[2]).to.be.equal('me');

    expect(mom.getAncestorPath(me).length).to.be.equal(2); //-> [mom, me]
    expect(mom.getAncestorPath(me)[1]).to.be.equal('me');

    expect(me.getAncestorPath(me).length).to.be.equal(1); //-> [me]
    expect(me.getAncestorPath(me)[0]).to.be.equal('me');

    expect(grandma.getAncestorPath(notRelated)).to.be.equal(null); //-> null
  });

  it("should return the lowest common ancestor of the two child nodes", function() {
    expect(greatGrandma.getClosestCommonAncestor(me, brother)).to.be.equal('mom');
    expect(greatGrandma.getClosestCommonAncestor(me, cousin)).to.be.equal('grandma');
    expect(greatGrandma.getClosestCommonAncestor(grandma, grandma)).to.be.equal('grandma');
    expect(greatGrandma.getClosestCommonAncestor(me, notRelated)).to.be.equal(null);
  });
});
