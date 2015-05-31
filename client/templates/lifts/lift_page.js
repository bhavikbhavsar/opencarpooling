Template.liftPage.rendered = function() {
  map = new Mapping('lift-map', { polyline: true, deactivateZoom: true });

  map.setAsBackground();

  map.mapDirection(
    this.data.fromLoc[0], this.data.fromLoc[1], 
    this.data.toLoc[0], this.data.toLoc[1]
  );
  console.log(this.data);
}

Template.liftPage.helpers({
  seatsCount: function() {
    var seatsCount = [];

    for (var i = 0; i < this.seats; i++) seatsCount.push('');

    return seatsCount;
  }
});
