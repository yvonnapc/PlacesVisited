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
  var placeSeason = $("input#placeSeason").val();
  var placeNotes = $("input#placeNotes").val();
  var newPlace = new Place(placeName, placeLocation, placeSeason, placeNotes);
console.log(newPlace);
  $("ul#listResults").append("<li><span class='clickable'>" + newPlace.name + "</span></li>");
  $("#showResults").show();

$(".clickable").last().click(function(){
  $("#showResults2").show();
  $("#showResults2 h3").text(newPlace.name);
  $(".viewLocation").text(newPlace.location);
  $(".viewSeason").text(newPlace.season);
  $(".viewNotes").text(newPlace.notes);
});
});


});
