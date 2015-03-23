describe("numberToEnglish", function() {
  it("should translate 7 to english", function() {
    expect((7).toEnglish()).to.be.equal("seven");
  });

  it("should translate 575 to english", function() {
    expect((575).toEnglish()).to.be.equal("five hundred seventy-five");
  });

  it("should translate 78193512 to english", function() {
    expect((78193512).toEnglish()).to.be.equal("seventy-eight million one hundred ninety-three thousand five hundred twelve");
  });
});
