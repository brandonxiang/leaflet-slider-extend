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

// var one, two, three, points;
// $.get("1.json", function (data) {
//     one = L.geoJson(data);
//     $.get("2.json", function (data) {
//         two = L.geoJson(data);
//         $.get("3.json", function (data) {

//             three = L.geoJson(data);

//         })

//     })
// })

// $.get("test.json", function (data) {
//     test = L.geoJson(data);

//     var sliderControl = L.control.sliderControl({
//         layer: test,
//         range: false
//     });
//     map.addControl(sliderControl);
//     sliderControl.startSlider();
// });



$.get("points.json", function (data) {
    points = L.geoJson(data);
 var sliderControl = L.control.sliderControl({
        layer: points,
        range: false
    });
    map.addControl(sliderControl);
    sliderControl.startSlider();
})

// var layerGroup = L.layerGroup([one,two,three]);