mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5lYnJvd24xIiwiYSI6ImNrazY1YmVraTAwbzYydnFzejZ0MjBlaDAifQ.9tbcNhp9Qrt_wBrOCAAisg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-100.486052, 37.830348],
    zoom: 2
});
var hoveredStateId = null;

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
})

map.on('load', function () {
    map.addSource('states', {
        'type': 'geojson',
        'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
    });

    // Mapbox does not allow external links other than mapbox.com links 
    // so it couldnt be loaded through the D3 function 
    // so data was hardcoded.
    // Creating a geoJSON layer with the retrieved data
    map.addSource('state_census_data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-86.8287, 32.7794]
                    },
                    "properties": {
                        "State_x": 1,
                        "Name": "AL",
                        "Population": 4864680,
                        "MedianAge": 38.9,
                        "HouseholdIncome": 48486,
                        "PerCapitaIncome": 26846,
                        "PovertyCount": 829400,
                        "PovertyRate": 17.04942566,
                        "UnemploymentRate": 3.040241085,
                        "State_y": "Alabama",
                        "MedianHomeValue": "158939.8333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-152.2782, 64.0685]
                    },
                    "properties": {
                        "State_x": 2,
                        "Name": "AK",
                        "Population": 738516,
                        "MedianAge": 34,
                        "HouseholdIncome": 76715,
                        "PerCapitaIncome": 35874,
                        "PovertyCount": 77865,
                        "PovertyRate": 10.54344117,
                        "UnemploymentRate": 3.800459299,
                        "State_y": "Alaska",
                        "MedianHomeValue": "313130.8333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-111.6602, 34.2744]
                    },
                    "properties": {
                        "State_x": 4,
                        "Name": "AZ",
                        "Population": 6946685,
                        "MedianAge": 37.4,
                        "HouseholdIncome": 56213,
                        "PerCapitaIncome": 29265,
                        "PovertyCount": 1092192,
                        "PovertyRate": 15.7224921,
                        "UnemploymentRate": 3.026105257,
                        "State_y": "Arizona",
                        "MedianHomeValue": "265236.5"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-92.4426, 34.8938]
                    },
                    "properties": {
                        "State_x": 5,
                        "Name": "AR",
                        "Population": 2990671,
                        "MedianAge": 37.9,
                        "HouseholdIncome": 45726,
                        "PerCapitaIncome": 25635,
                        "PovertyCount": 510337,
                        "PovertyRate": 17.06429761,
                        "UnemploymentRate": 2.533678897,
                        "State_y": "Arkansas",
                        "MedianHomeValue": "190196.6667"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-119.4696, 37.1841]
                    },
                    "properties": {
                        "State_x": 6,
                        "Name": "CA",
                        "Population": 39148760,
                        "MedianAge": 36.3,
                        "HouseholdIncome": 71228,
                        "PerCapitaIncome": 35021,
                        "PovertyCount": 5487141,
                        "PovertyRate": 14.01612976,
                        "UnemploymentRate": 3.375590951,
                        "State_y": "California",
                        "MedianHomeValue": "680605.75"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-105.5478, 38.9972]
                    },
                    "properties": {
                        "State_x": 8,
                        "Name": "CO",
                        "Population": 5531141,
                        "MedianAge": 36.6,
                        "HouseholdIncome": 68811,
                        "PerCapitaIncome": 36415,
                        "PovertyCount": 590504,
                        "PovertyRate": 10.67598891,
                        "UnemploymentRate": 2.518937774,
                        "State_y": "Colorado",
                        "MedianHomeValue": "438620.6667"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-72.7273, 41.6219]
                    },
                    "properties": {
                        "State_x": 9,
                        "Name": "CT",
                        "Population": 3581504,
                        "MedianAge": 40.8,
                        "HouseholdIncome": 76106,
                        "PerCapitaIncome": 43056,
                        "PovertyCount": 348449,
                        "PovertyRate": 9.729124971,
                        "UnemploymentRate": 3.515534256,
                        "State_y": "Connecticut",
                        "MedianHomeValue": "249625.5"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-75.505, 38.9896]
                    },
                    "properties": {
                        "State_x": 10,
                        "Name": "DE",
                        "Population": 949495,
                        "MedianAge": 40.2,
                        "HouseholdIncome": 65627,
                        "PerCapitaIncome": 33989,
                        "PovertyCount": 109798,
                        "PovertyRate": 11.5638313,
                        "UnemploymentRate": 3.001700904,
                        "State_y": "Delaware",
                        "MedianHomeValue": "252567.9167"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0147, 38.9101]
                    },
                    "properties": {
                        "State_x": 11,
                        "Name": "DC",
                        "Population": 684498,
                        "MedianAge": 33.9,
                        "HouseholdIncome": 82604,
                        "PerCapitaIncome": 53321,
                        "PovertyCount": 109497,
                        "PovertyRate": 15.99668662,
                        "UnemploymentRate": 4.29117397,
                        "State_y": "District of Columbia",
                        "MedianHomeValue": "429073"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.4497, 28.6305]
                    },
                    "properties": {
                        "State_x": 12,
                        "Name": "FL",
                        "Population": 20598139,
                        "MedianAge": 41.9,
                        "HouseholdIncome": 53267,
                        "PerCapitaIncome": 30197,
                        "PovertyCount": 2983851,
                        "PovertyRate": 14.48602226,
                        "UnemploymentRate": 3.024438276,
                        "State_y": "Florida",
                        "MedianHomeValue": "324978.75"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-83.4426, 32.6415]
                    },
                    "properties": {
                        "State_x": 13,
                        "Name": "GA",
                        "Population": 10297484,
                        "MedianAge": 36.5,
                        "HouseholdIncome": 55679,
                        "PerCapitaIncome": 29523,
                        "PovertyCount": 1607714,
                        "PovertyRate": 15.61268753,
                        "UnemploymentRate": 3.135270713,
                        "State_y": "Georgia",
                        "MedianHomeValue": "222567.4167"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-156.3737, 20.2927]
                    },
                    "properties": {
                        "State_x": 15,
                        "Name": "HI",
                        "Population": 1422029,
                        "MedianAge": 38.9,
                        "HouseholdIncome": 78084,
                        "PerCapitaIncome": 34035,
                        "PovertyCount": 137516,
                        "PovertyRate": 9.670407566,
                        "UnemploymentRate": 2.252837319,
                        "State_y": "Hawaii",
                        "MedianHomeValue": "826567.9167"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-114.613, 44.3509]
                    },
                    "properties": {
                        "State_x": 16,
                        "Name": "ID",
                        "Population": 1687809,
                        "MedianAge": 36.1,
                        "HouseholdIncome": 53089,
                        "PerCapitaIncome": 26772,
                        "PovertyCount": 228882,
                        "PovertyRate": 13.56089463,
                        "UnemploymentRate": 2.23200611,
                        "State_y": "Idaho",
                        "MedianHomeValue": "267573.3333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-89.1965, 40.0417]
                    },
                    "properties": {
                        "State_x": 17,
                        "Name": "IL",
                        "Population": 12821497,
                        "MedianAge": 37.9,
                        "HouseholdIncome": 63575,
                        "PerCapitaIncome": 34463,
                        "PovertyCount": 1635603,
                        "PovertyRate": 12.75672412,
                        "UnemploymentRate": 3.409422472,
                        "State_y": "Illinois",
                        "MedianHomeValue": "243714.3333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-86.2816, 39.8942]
                    },
                    "properties": {
                        "State_x": 18,
                        "Name": "IN",
                        "Population": 6637426,
                        "MedianAge": 37.6,
                        "HouseholdIncome": 54325,
                        "PerCapitaIncome": 28461,
                        "PovertyCount": 908359,
                        "PovertyRate": 13.68541058,
                        "UnemploymentRate": 2.726493674,
                        "State_y": "Indiana",
                        "MedianHomeValue": "173357.8333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-93.496, 42.0751]
                    },
                    "properties": {
                        "State_x": 19,
                        "Name": "IA",
                        "Population": 3132499,
                        "MedianAge": 38.1,
                        "HouseholdIncome": 58580,
                        "PerCapitaIncome": 31085,
                        "PovertyCount": 353634,
                        "PovertyRate": 11.28919754,
                        "UnemploymentRate": 2.081916068,
                        "State_y": "Iowa",
                        "MedianHomeValue": "205755.6667"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-98.3804, 38.4937]
                    },
                    "properties": {
                        "State_x": 20,
                        "Name": "KS",
                        "Population": 2908776,
                        "MedianAge": 36.5,
                        "HouseholdIncome": 57422,
                        "PerCapitaIncome": 30757,
                        "PovertyCount": 350280,
                        "PovertyRate": 12.04217857,
                        "UnemploymentRate": 2.235923289,
                        "State_y": "Kansas",
                        "MedianHomeValue": "137999.75"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-85.3021, 37.5347]
                    },
                    "properties": {
                        "State_x": 21,
                        "Name": "KY",
                        "Population": 4440204,
                        "MedianAge": 38.7,
                        "HouseholdIncome": 48392,
                        "PerCapitaIncome": 26948,
                        "PovertyCount": 772080,
                        "PovertyRate": 17.38839026,
                        "UnemploymentRate": 2.890813125,
                        "State_y": "Kentucky",
                        "MedianHomeValue": "169893.0833"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-91.9968, 31.0689]
                    },
                    "properties": {
                        "State_x": 22,
                        "Name": "LA",
                        "Population": 4663616,
                        "MedianAge": 36.6,
                        "HouseholdIncome": 47942,
                        "PerCapitaIncome": 27027,
                        "PovertyCount": 878394,
                        "PovertyRate": 18.83504131,
                        "UnemploymentRate": 3.213171925,
                        "State_y": "Louisiana",
                        "MedianHomeValue": "202467.25"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-69.2428, 45.3695]
                    },
                    "properties": {
                        "State_x": 23,
                        "Name": "ME",
                        "Population": 1332813,
                        "MedianAge": 44.6,
                        "HouseholdIncome": 55425,
                        "PerCapitaIncome": 31253,
                        "PovertyCount": 161743,
                        "PovertyRate": 12.13546086,
                        "UnemploymentRate": 2.41616791,
                        "State_y": "Maine",
                        "MedianHomeValue": "300812.25"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.7909, 39.055]
                    },
                    "properties": {
                        "State_x": 24,
                        "Name": "MD",
                        "Population": 6003435,
                        "MedianAge": 38.6,
                        "HouseholdIncome": 81868,
                        "PerCapitaIncome": 40517,
                        "PovertyCount": 553496,
                        "PovertyRate": 9.219655081,
                        "UnemploymentRate": 3.016423098,
                        "State_y": "Maryland",
                        "MedianHomeValue": "296044"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-71.8083, 42.2596]
                    },
                    "properties": {
                        "State_x": 25,
                        "Name": "MA",
                        "Population": 6830193,
                        "MedianAge": 39.4,
                        "HouseholdIncome": 77378,
                        "PerCapitaIncome": 41794,
                        "PovertyCount": 710305,
                        "PovertyRate": 10.39948652,
                        "UnemploymentRate": 2.978890933,
                        "State_y": "Massachusetts",
                        "MedianHomeValue": "491517.8333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-85.4102, 44.3467]
                    },
                    "properties": {
                        "State_x": 26,
                        "Name": "MI",
                        "Population": 9957488,
                        "MedianAge": 39.7,
                        "HouseholdIncome": 54938,
                        "PerCapitaIncome": 30336,
                        "PovertyCount": 1457008,
                        "PovertyRate": 14.63228477,
                        "UnemploymentRate": 3.223784955,
                        "State_y": "Michigan",
                        "MedianHomeValue": "171190.3333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-94.3053, 46.2807]
                    },
                    "properties": {
                        "State_x": 27,
                        "Name": "MN",
                        "Population": 5527358,
                        "MedianAge": 37.9,
                        "HouseholdIncome": 68411,
                        "PerCapitaIncome": 36245,
                        "PovertyCount": 547442,
                        "PovertyRate": 9.904225491,
                        "UnemploymentRate": 2.15687133,
                        "State_y": "Minnesota",
                        "MedianHomeValue": "280872.0833"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-89.6678, 32.7364]
                    },
                    "properties": {
                        "State_x": 28,
                        "Name": "MS",
                        "Population": 2988762,
                        "MedianAge": 37.2,
                        "HouseholdIncome": 43567,
                        "PerCapitaIncome": 23434,
                        "PovertyCount": 599795,
                        "PovertyRate": 20.06834268,
                        "UnemploymentRate": 3.681658158,
                        "State_y": "Mississippi",
                        "MedianHomeValue": "137490"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-92.458, 38.3566]
                    },
                    "properties": {
                        "State_x": 29,
                        "Name": "MO",
                        "Population": 6090062,
                        "MedianAge": 38.5,
                        "HouseholdIncome": 53560,
                        "PerCapitaIncome": 29537,
                        "PovertyCount": 837930,
                        "PovertyRate": 13.75897323,
                        "UnemploymentRate": 2.560860628,
                        "State_y": "Missouri",
                        "MedianHomeValue": "172387.8333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-109.6333, 47.0527]
                    },
                    "properties": {
                        "State_x": 30,
                        "Name": "MT",
                        "Population": 1041732,
                        "MedianAge": 39.8,
                        "HouseholdIncome": 52559,
                        "PerCapitaIncome": 29765,
                        "PovertyCount": 139063,
                        "PovertyRate": 13.34921074,
                        "UnemploymentRate": 2.153432937,
                        "State_y": "Montana",
                        "MedianHomeValue": "247953.6667"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-99.7951, 41.5378]
                    },
                    "properties": {
                        "State_x": 31,
                        "Name": "NE",
                        "Population": 1904760,
                        "MedianAge": 36.4,
                        "HouseholdIncome": 59116,
                        "PerCapitaIncome": 31101,
                        "PovertyCount": 213790,
                        "PovertyRate": 11.22398622,
                        "UnemploymentRate": 1.918614419,
                        "State_y": "Nebraska",
                        "MedianHomeValue": "186713.5833"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-116.6312, 39.3289]
                    },
                    "properties": {
                        "State_x": 32,
                        "Name": "NV",
                        "Population": 2922849,
                        "MedianAge": 37.9,
                        "HouseholdIncome": 57598,
                        "PerCapitaIncome": 29961,
                        "PovertyCount": 393431,
                        "PovertyRate": 13.46053115,
                        "UnemploymentRate": 3.481124068,
                        "State_y": "Nevada",
                        "MedianHomeValue": "284716.3333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-71.5811, 43.6805]
                    },
                    "properties": {
                        "State_x": 33,
                        "Name": "NH",
                        "Population": 1343622,
                        "MedianAge": 42.7,
                        "HouseholdIncome": 74057,
                        "PerCapitaIncome": 38548,
                        "PovertyCount": 102352,
                        "PovertyRate": 7.617618646,
                        "UnemploymentRate": 2.261945696,
                        "State_y": "New Hampshire",
                        "MedianHomeValue": "303889.5833"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-74.6728, 40.1907]
                    },
                    "properties": {
                        "State_x": 34,
                        "Name": "NJ",
                        "Population": 8881845,
                        "MedianAge": 39.8,
                        "HouseholdIncome": 79363,
                        "PerCapitaIncome": 40895,
                        "PovertyCount": 904132,
                        "PovertyRate": 10.17955166,
                        "UnemploymentRate": 3.209738517,
                        "State_y": "New Jersey",
                        "MedianHomeValue": "247557.6667"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-106.1126, 34.4071]
                    },
                    "properties": {
                        "State_x": 35,
                        "Name": "NM",
                        "Population": 2092434,
                        "MedianAge": 37.5,
                        "HouseholdIncome": 48059,
                        "PerCapitaIncome": 26085,
                        "PovertyCount": 410389,
                        "PovertyRate": 19.61299616,
                        "UnemploymentRate": 3.267486573,
                        "State_y": "New Mexico",
                        "MedianHomeValue": "196326.25"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-75.5268, 42.9538]
                    },
                    "properties": {
                        "State_x": 36,
                        "Name": "NY",
                        "Population": 19618453,
                        "MedianAge": 38.7,
                        "HouseholdIncome": 65323,
                        "PerCapitaIncome": 37470,
                        "PovertyCount": 2797985,
                        "PovertyRate": 14.26200629,
                        "UnemploymentRate": 3.07178145,
                        "State_y": "New York",
                        "MedianHomeValue": "463690.9167"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-79.3877, 35.5557]
                    },
                    "properties": {
                        "State_x": 37,
                        "Name": "NC",
                        "Population": 10155624,
                        "MedianAge": 38.6,
                        "HouseholdIncome": 52413,
                        "PerCapitaIncome": 29456,
                        "PovertyCount": 1523949,
                        "PovertyRate": 15.00596123,
                        "UnemploymentRate": 3.078195884,
                        "State_y": "North Carolina",
                        "MedianHomeValue": "220415.8333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-100.4659, 47.4501]
                    },
                    "properties": {
                        "State_x": 38,
                        "Name": "ND",
                        "Population": 752201,
                        "MedianAge": 35.1,
                        "HouseholdIncome": 63473,
                        "PerCapitaIncome": 35373,
                        "PovertyCount": 79270,
                        "PovertyRate": 10.53840662,
                        "UnemploymentRate": 1.553972941,
                        "State_y": "North Dakota",
                        "MedianHomeValue": "235631"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.7937, 40.2862]
                    },
                    "properties": {
                        "State_x": 39,
                        "Name": "OH",
                        "Population": 11641879,
                        "MedianAge": 39.3,
                        "HouseholdIncome": 54533,
                        "PerCapitaIncome": 30304,
                        "PovertyCount": 1645986,
                        "PovertyRate": 14.13849087,
                        "UnemploymentRate": 2.948252597,
                        "State_y": "Ohio",
                        "MedianHomeValue": "180064.5833"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-97.4943, 35.5889]
                    },
                    "properties": {
                        "State_x": 40,
                        "Name": "OK",
                        "Population": 3918137,
                        "MedianAge": 36.4,
                        "HouseholdIncome": 51424,
                        "PerCapitaIncome": 27432,
                        "PovertyCount": 607810,
                        "PovertyRate": 15.51272965,
                        "UnemploymentRate": 2.528931479,
                        "State_y": "Oklahoma",
                        "MedianHomeValue": "153998.0833"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-120.5583, 43.9336]
                    },
                    "properties": {
                        "State_x": 41,
                        "Name": "OR",
                        "Population": 4081943,
                        "MedianAge": 39.2,
                        "HouseholdIncome": 59393,
                        "PerCapitaIncome": 32045,
                        "PovertyCount": 565247,
                        "PovertyRate": 13.84749861,
                        "UnemploymentRate": 3.025152483,
                        "State_y": "Oregon",
                        "MedianHomeValue": "405258.3333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.7996, 40.8781]
                    },
                    "properties": {
                        "State_x": 42,
                        "Name": "PA",
                        "Population": 12791181,
                        "MedianAge": 40.7,
                        "HouseholdIncome": 59445,
                        "PerCapitaIncome": 32889,
                        "PovertyCount": 1578949,
                        "PovertyRate": 12.34404392,
                        "UnemploymentRate": 2.968959629,
                        "State_y": "Pennsylvania",
                        "MedianHomeValue": "241913.9167"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-66.6645, 18.2001]
                    },
                    "properties": {
                        "State_x": 72,
                        "Name": "PR",
                        "Population": 3386941,
                        "MedianAge": 40.9,
                        "HouseholdIncome": 20166,
                        "PerCapitaIncome": 12451,
                        "PovertyCount": 1495160,
                        "PovertyRate": 44.14484929,
                        "UnemploymentRate": 6.198808896,
                        "State_y": "Puerto Rico",
                        "MedianHomeValue": "#N/A"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-71.5562, 41.6762]
                    },
                    "properties": {
                        "State_x": 44,
                        "Name": "RI",
                        "Population": 1056611,
                        "MedianAge": 39.9,
                        "HouseholdIncome": 63296,
                        "PerCapitaIncome": 34619,
                        "PovertyCount": 133055,
                        "PovertyRate": 12.59261923,
                        "UnemploymentRate": 3.263168754,
                        "State_y": "Rhode Island",
                        "MedianHomeValue": "313452.8333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-80.8964, 33.9169]
                    },
                    "properties": {
                        "State_x": 45,
                        "Name": "SC",
                        "Population": 4955925,
                        "MedianAge": 39.2,
                        "HouseholdIncome": 51015,
                        "PerCapitaIncome": 27986,
                        "PovertyCount": 770632,
                        "PovertyRate": 15.5497107,
                        "UnemploymentRate": 3.092096834,
                        "State_y": "South Carolina",
                        "MedianHomeValue": "193935.3333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-100.2263, 44.4443]
                    },
                    "properties": {
                        "State_x": 46,
                        "Name": "SD",
                        "Population": 864289,
                        "MedianAge": 36.8,
                        "HouseholdIncome": 56499,
                        "PerCapitaIncome": 29801,
                        "PovertyCount": 113144,
                        "PovertyRate": 13.09099155,
                        "UnemploymentRate": 1.880389546,
                        "State_y": "South Dakota",
                        "MedianHomeValue": "211460.5833"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-86.3505, 35.858]
                    },
                    "properties": {
                        "State_x": 47,
                        "Name": "TN",
                        "Population": 6651089,
                        "MedianAge": 38.7,
                        "HouseholdIncome": 50972,
                        "PerCapitaIncome": 28511,
                        "PovertyCount": 1046508,
                        "PovertyRate": 15.73438575,
                        "UnemploymentRate": 2.879889293,
                        "State_y": "Tennessee",
                        "MedianHomeValue": "266508.1667"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-99.3312, 31.4757]
                    },
                    "properties": {
                        "State_x": 48,
                        "Name": "TX",
                        "Population": 27885195,
                        "MedianAge": 34.4,
                        "HouseholdIncome": 59570,
                        "PerCapitaIncome": 30143,
                        "PovertyCount": 4213938,
                        "PovertyRate": 15.1117394,
                        "UnemploymentRate": 2.664517856,
                        "State_y": "Texas",
                        "MedianHomeValue": "248749.1667"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-111.6703, 39.3055]
                    },
                    "properties": {
                        "State_x": 49,
                        "Name": "UT",
                        "Population": 3045350,
                        "MedianAge": 30.7,
                        "HouseholdIncome": 68374,
                        "PerCapitaIncome": 28239,
                        "PovertyCount": 309904,
                        "PovertyRate": 10.17630157,
                        "UnemploymentRate": 1.936000788,
                        "State_y": "Utah",
                        "MedianHomeValue": "358026.75"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-72.6658, 44.0687]
                    },
                    "properties": {
                        "State_x": 50,
                        "Name": "VT",
                        "Population": 624977,
                        "MedianAge": 42.9,
                        "HouseholdIncome": 60076,
                        "PerCapitaIncome": 33238,
                        "PovertyCount": 67034,
                        "PovertyRate": 10.72583471,
                        "UnemploymentRate": 2.220561717,
                        "State_y": "Vermont",
                        "MedianHomeValue": "307058.8333"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-78.8537, 37.5215]
                    },
                    "properties": {
                        "State_x": 51,
                        "Name": "VA",
                        "Population": 8413774,
                        "MedianAge": 38.1,
                        "HouseholdIncome": 71564,
                        "PerCapitaIncome": 37763,
                        "PovertyCount": 893580,
                        "PovertyRate": 10.62044215,
                        "UnemploymentRate": 2.587067349,
                        "State_y": "Virginia",
                        "MedianHomeValue": "239447"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-120.4472, 47.3826]
                    },
                    "properties": {
                        "State_x": 53,
                        "Name": "WA",
                        "Population": 7294336,
                        "MedianAge": 37.6,
                        "HouseholdIncome": 70116,
                        "PerCapitaIncome": 36888,
                        "PovertyCount": 821621,
                        "PovertyRate": 11.26382168,
                        "UnemploymentRate": 2.718958929,
                        "State_y": "Washington",
                        "MedianHomeValue": "514851.0833"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-80.6227, 38.6409]
                    },
                    "properties": {
                        "State_x": 54,
                        "Name": "WV",
                        "Population": 1829054,
                        "MedianAge": 42.4,
                        "HouseholdIncome": 44921,
                        "PerCapitaIncome": 25479,
                        "PovertyCount": 315464,
                        "PovertyRate": 17.24738581,
                        "UnemploymentRate": 2.93867759,
                        "State_y": "West Virginia",
                        "MedianHomeValue": "98872.5"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-89.9941, 44.6243]
                    },
                    "properties": {
                        "State_x": 55,
                        "Name": "WI",
                        "Population": 5778394,
                        "MedianAge": 39.3,
                        "HouseholdIncome": 59209,
                        "PerCapitaIncome": 32018,
                        "PovertyCount": 668220,
                        "PovertyRate": 11.5641128,
                        "UnemploymentRate": 2.159631205,
                        "State_y": "Wisconsin",
                        "MedianHomeValue": "176730.9167"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-107.5512, 42.9957]
                    },
                    "properties": {
                        "State_x": 56,
                        "Name": "WY",
                        "Population": 581836,
                        "MedianAge": 37.3,
                        "HouseholdIncome": 62268,
                        "PerCapitaIncome": 32295,
                        "PovertyCount": 63311,
                        "PovertyRate": 10.88124489,
                        "UnemploymentRate": 2.352037344,
                        "State_y": "Wyoming",
                        "MedianHomeValue": "266949.8333"
                    }
                }
            ]
        }

    });

    // The feature-state dependent fill-opacity expression will render the hover effect
    // when a feature's hover state is set to true.
    map.addLayer({
        'id': 'state-fills',
        'type': 'fill',
        'source': 'states',
        'layout': {},
        'paint': {
            'fill-color': '#627BC1',
            'fill-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                1,
                0.5]
        }
    });

    map.addLayer({
        'id': 'state-borders',
        'type': 'line',
        'source': 'states',
        'layout': {},
        'paint': {
            'line-color': '#627BC1',
            'line-width': 2
        }
    });

    // When the user moves their mouse over the state-fill layer, we'll update the
    // feature state for the feature under the mouse.
    map.on('mousemove', 'state-fills', function (e) {
        if (e.features.length > 0) {
            if (hoveredStateId) {

                var coordinates = e.features[0].geometry.coordinates;
                var stateName = e.features[0].properties.STATE_NAME;
                const censusData = map.getSource('state_census_data');

                const censusFeatures = censusData._data.features;
                var correctFeature = censusFeatures.find(x => x.properties.State_x === hoveredStateId);
                console.log(hoveredStateId)
                console.log(correctFeature)

                var g = parseInt(hoveredStateId);
                var gString = g - 3;

                popup
                    .setLngLat(coordinates[0][0])
                    .setHTML(
                        'State Name: ' + correctFeature.properties.State_y + '<br>' +
                        'State Pop: ' + correctFeature.properties.Population + '<br>' +
                        'Average House Cost: $' + correctFeature.properties.MedianHomeValue + '<br>' +
                        'Household Income: $' + correctFeature.properties.HouseholdIncome + '<br>' +
                        'Unemployment Rate: ' + correctFeature.properties.UnemploymentRate + '%' + '<br>' 
                    )
                    .addTo(map);
                map.setFeatureState(
                    { source: 'states', id: hoveredStateId },
                    { hover: false }
                );
            }
            hoveredStateId = e.features[0].id;
            map.setFeatureState(
                { source: 'states', id: hoveredStateId },
                { hover: true }
            );
        }
    });

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map.on('mouseleave', 'state-fills', function () {
        if (hoveredStateId) {
            map.getCanvas().style.cursor = '';
            popup.remove();

            map.setFeatureState(
                { source: 'states', id: hoveredStateId },
                { hover: false }
            );
        }
        hoveredStateId = null;
    });

});

