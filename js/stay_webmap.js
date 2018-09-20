mapboxgl.accessToken = "pk.eyJ1IjoiYWhqYWRhbm4iLCJhIjoiMVQ1aEpCTSJ9.pTqtxxvqc_wn3P7s0SGAAw";

var map = new mapboxgl.Map({
  container: "map", // HTML container id
  // style: "mapbox://styles/mapbox/streets-v9", // style URL
  // style: "mapbox://styles/mapbox/light-v9",
  style: "mapbox://styles/ahjadann/cjl95qal01b422rnyzua5cn48",
  center: [35.5, -0.10], // starting position as [lng, lat]
  zoom: 5
});

// var popup = new mapboxgl.Popup()
//   .setHTML("<h3>Reykjavik Roasters</h3><p>A good coffee shop</p>");
//
// var marker = new mapboxgl.Marker()
//   .setLngLat([-21.92661562, 64.14356426])
//   .setPopup(popup)
//   .addTo(map);

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-left");

map.on("load", function() {
  // Add a layer showing the places.
  map.addLayer({
    "id": "places",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": "/js/stay_projects.geojson"
    },
    "layout": {
      "icon-image": "{icon}-15",
      "icon-allow-overlap": true
    }
  });

  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on("click", "places", function(e) {
    // Brauchen wir das? Wenn Feature keine Attribute hat, soll nichts
    // angezeigt werden.
    if (!e.features.length) {
      return;
    }

    var coordinates = e.features[0].geometry.coordinates.slice();
    // var description = e.features[0].properties.description;
    var details = e.features[0].properties.details;
    var heading = e.features[0].properties.name_organisation;
    var url = e.features[0].properties.contact_homepage;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    // }

    new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(coordinates)
      // .setHTML(description)
      .setHTML("<h2>" + heading + "</h2><p>" + details + "</p><hr><a href='" + url + "'>" + url + "</a>")
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on("mouseenter", "places", function() {
    map.getCanvas().style.cursor = "pointer";
  });

  // Change it back to a pointer when it leaves.
  map.on("mouseleave", "places", function() {
    map.getCanvas().style.cursor = "";
  });

  // Center the map on the coordinates of any clicked symbol from the "symbols" layer.
  map.on("click", "places", function(e) {
    map.flyTo({
      center: e.features[0].geometry.coordinates
    });
  });
});
