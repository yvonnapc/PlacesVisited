describe("Place", function(){
  it("collects information about a destination", function() {
    var testPlace = new Place("Grand Canyon", "Arizona","Autumn","Remember hiking boots");
    expect(testPlace.name).to.equal("Grand Canyon");
    expect(testPlace.location).to.equal("Arizona");
    expect(testPlace.season).to.equal("Autumn");
    expect(testPlace.notes).to.equal("Remember hiking boots");
  });

});
