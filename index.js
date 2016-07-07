var osmUrl = 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}',
    osm = new L.TileLayer(osmUrl, {
        subdomains: '1234',
        maxZoom: 22,
    });
var map = new L.Map('map', {
    layers: [osm],
    center: new L.LatLng(22.5, 114.5),
    zoom: 9
});

function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}


$.get("test.json", function (data) {
    test = L.geoJson(data,{style:style});

    var sliderControl = L.control.sliderControl({
        layer: test,
        range: false,
        follow:1
    });
    map.addControl(sliderControl);
    sliderControl.startSlider();
});



// $.get("points.json", function (data) {
//     points = L.geoJson(data);
//  var sliderControl = L.control.sliderControl({
//         layer: points,
//         range: false,
//         follow:1
//     });
//     map.addControl(sliderControl);
//     sliderControl.startSlider();
// })

// var layerGroup = L.layerGroup([one,two,three]);