function Place(name, location, season,notes) {
  this.name = name;
  this.location = location;
  this.season = season;
  this.notes = notes;
}


$(document).ready(function() {

$("form#placeCollector").submit(function(event){
  event.preventDefault();
  var placeName = $("input#placeName").val();
  var placeLocation = $("input#placeLocation").val();
  var placeSeason = $("input#placeName").val();
  var placeNote = $("input#placeNote").val();
  var newPlace = new Place{placeName, placeLocation, placeSeason, placeNote};

  $("ul#listResults").append("<li><span class='clickable'>" + newPlace.name + "</span></li>");
})


});
