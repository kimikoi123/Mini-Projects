const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia2ltdWVsMTIzIiwiYSI6ImNremRrc3BuOTJ5eXUycHAxczR2ZW53d3cifQ.P_Ce0wgLpnOBbpoX04ALrA"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15,
  })

  map.addControl(new mapboxgl.NavigationControl())

  map.addControl(
    new MapboxDirections({
      accessToken: MAPBOX_TOKEN,
    }),
    "top-left"
  )
}
