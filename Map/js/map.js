let size = 10;

function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8ec3b9"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1a3646"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c3d8e5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#64779e"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#334e87"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3C7680"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#304a7d"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2c6675"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#255763"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3a4762"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0e1626"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                ]
            }
        ],
        disableDefaultUI: true,
        zoomControl: true
    });

    let bounds = new google.maps.LatLngBounds({lat: 10.187, lng: 70.002}, {lat: 35.388, lng: 96.566});
    map.fitBounds(bounds);

    let delhi = {
        position: {lat: 28.704, lng: 77.102},
        title: "Delhi",
        animation: google.maps.Animation.DROP,
        dir: "Delhi"
    };

    let goa = {
        position: {lat: 15.299, lng: 74.124},
        title: "Goa",
        animation: google.maps.Animation.DROP,
        dir: "Goa"
    };

    let jk = {
        position: {lat: 34.083, lng: 74.797},
        title: "Jammu & Kashmir",
        animation: google.maps.Animation.DROP,
        dir: "JK"
    };

    let tn = {
        position: {lat: 11.127, lng: 78.656},
        title: "Tamil Nadu",
        animation: google.maps.Animation.DROP,
        dir: "TN"
    };

    let up = {
        position: {lat: 26.846, lng: 80.946},
        title: "Uttar Pradesh",
        animation: google.maps.Animation.DROP,
        dir: "UP"
    };

    let places = [delhi, goa, jk, tn, up];
    let size = places.length;

    for (let i=0;i<size;i++) {
        let marker = new google.maps.Marker(places[i]);

        marker.addListener('click', show_pics);

        marker.setMap(map);
    }
}

function show_pics() {
    let pics = document.getElementById('pics');
    let row = document.getElementById('row');

    console.log(this.dir);

    // Remove children first to avoid duplicates
    while (row.firstChild) {
        row.removeChild(row.lastChild);
    }

    let heading = document.getElementById('place');
    heading.innerHTML=this.title + "</br>";

    let num_col=2;
    for (let i=0;i<num_col;i++) {
        let div = document.createElement("div");
        div.classList.add("col");
        row.appendChild(div);
    }

    let columns = document.getElementsByClassName("col");

    let i=1;
    while (i<=size) {
        for (let j=num_col-1; j>-1;j--) {
            let node = document.createElement("img");
            node.src = "img/DataSet/"+ this.dir + "/" + i + ".jpeg";
            node.classList.add("modal-content");
            columns[j].appendChild(node);
            i++;
            if (i>size)
                break;
        }
    }

    pics.style.display = "block";

    // Scroll to pics
    $(function () {
        $('html, body').animate({
            scrollTop: $("#pics").offset().top
        }, 1000);
    });
}

function toTop() {
    $(function () {
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 1000);
    });
}