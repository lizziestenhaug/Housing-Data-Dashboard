Plotly.d3.csv("./assets/data/inventario.csv", function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

var allregionsNames = unpack(rows, 'RegionName').sort(),


//var allregionsNames = allregionsName.sort((a, b) => b.RegionName - a.RegionName);

    allYear = unpack(rows, 'Attribute'),
    inv = unpack(rows, 'Value'),
    regions = [],

    currentInv = [],
    currentYear = [];
    console.log(allregionsNames)
  for (var i = 0; i < allregionsNames.length; i++ ){
    if (regions.indexOf(allregionsNames[i]) === -1 ){
      regions.push(allregionsNames[i]);
    }
  }
  
  function regionData(regiontoreturn) {
    currentInv = [];
    currentYear = [];
    for (var i = 0 ; i < allregionsNames.length ; i++){
      if ( allregionsNames[i] === regiontoreturn ) {
        currentInv.push(inv[i]);
        currentYear.push(allYear[i]);
      } 
    } 
  };

  function SecondregionData(secondregionreturn) {
    currentInv = [];
    currentYear = [];
    for (var i = 0 ; i < allregionsNames.length ; i++){
      if ( allregionsNames[i] === secondregionreturn ) {
        currentInv.push(inv[i]);
        currentYear.push(allYear[i]);
      } 
    } 
  };

// Default Country Data
setBubblePlot('Atlanta, GA', 'Atlanta, GA');
  
function setBubblePlot(regiontoreturn, secondregionreturn) {
    regionData(regiontoreturn);  
   
    //line graph
    var trace1 = {
      x: currentYear,
      y: currentInv,
      mode: 'lines+markers',
      name: regiontoreturn,
      line: {color: '#17BECF'},

      marker: {
        size: 12, 
        opacity: 0.5
        
      }
    };

    SecondregionData(secondregionreturn);  

    //line graph
    var trace2 = {
      x: currentYear, 
      y: currentInv, 
      mode: 'lines+markers',
      
      name: secondregionreturn,
      line: {color: '#7F7F7F'},
      marker: {
        size: 12, 
        opacity: 0.75
      }
    };


     //line plot
    var data = [trace1,trace2];
    var layout = {
      title: 'House Inventory per Month over the Last Three Years <br>'+ regiontoreturn +' and '+secondregionreturn,
      titlefont: {
        size: 16,
        color: '#ca1111'
      },
      xaxis: {
       
        titlefont: {
          size: 16,
          color: '#ca1111'
        },
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }},
      yaxis: {
        title: 'Total Inventory',
        titlefont: {
          size: 16,
          color: '#ca1111'
        },
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }
      },
    };
    Plotly.newPlot('plotdiv', data, layout);

};
  
var innerContainer = document.querySelector('[data-num="1"'),
    plotEl = innerContainer.querySelector('.plot'),
    countrySelector = innerContainer.querySelector('.regiondata');


function assignOptions(textArray, selector) {
  for (var i = 0; i < textArray.length;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
  }
}
assignOptions(regions, countrySelector);

function updateregiondata(){
   setBubblePlot(countrySelector.value,secondregionSelector.value);
}
  
countrySelector.addEventListener('change', updateregiondata, false);


var secondinnerContainer = document.querySelector('[data-num="2"'),
plotE2 = secondinnerContainer.querySelector('.secondplot'),
secondregionSelector = secondinnerContainer.querySelector('.secondregiondata');

assignOptions(regions, secondregionSelector);

function updateSecondregiondata(){
    setBubblePlot(countrySelector.value,secondregionSelector.value);
}
  
secondregionSelector.addEventListener('change', updateSecondregiondata, false);

});


Plotly.d3.csv("./assets/data/newToPending.csv", function(err, rows){

  function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
  }

  var allregionsNames = unpack(rows, 'RegionName').sort(),
  //var allregionsNames = allregionsName.sort((a, b) => b.RegionName - a.RegionName);

  allYear = unpack(rows, 'Date'),
  inv = unpack(rows, 'Value'),
  regions = [],

  currentInv = [],
  currentYear = [];

for (var i = 0; i < allregionsNames.length; i++ ){
  if (regions.indexOf(allregionsNames[i]) === -1 ){
    regions.push(allregionsNames[i]);
  }
}

function regionData(regiontoreturn) {
  currentInv = [];
  currentYear = [];
  for (var i = 0 ; i < allregionsNames.length ; i++){
    if ( allregionsNames[i] === regiontoreturn ) {
      currentInv.push(inv[i]);
      currentYear.push(allYear[i]);
    } 
  } 
};

function SecondregionData(secondregionreturn) {
  currentInv = [];
  currentYear = [];
  for (var i = 0 ; i < allregionsNames.length ; i++){
    if ( allregionsNames[i] === secondregionreturn ) {
      currentInv.push(inv[i]);
      currentYear.push(allYear[i]);
    } 
  } 
};

// Default Regions Data
setBubblePlot('Atlanta, GA', 'Atlanta, GA');
function setBubblePlot(regiontoreturn, secondregionreturn) {
  regionData(regiontoreturn);  

  // bar graph
  var trace3 = {
    x: currentYear, 
    y: currentInv,
    name: regiontoreturn,
    marker: {color: '#10800c'},
    type: 'bar'
  };

  SecondregionData(secondregionreturn);  

  // bar graph
  var trace4 = {
    x: currentYear, 
    y: currentInv, 
    name:secondregionreturn,
    marker: {color: 'rgb(26, 118, 255)'},
    type: 'bar'
  };


 // bar plot
 var data2 = [trace3, trace4];
 var layout2 = {
  title: 'Newly Pending Listings ',
  titlefont: {
    size: 16,
    color: '#ca1111'
  },
  xaxis: {
    //title: 'Date',
    titlefont: {
      size: 16,
      color: '#ca1111'
    },
    tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    }},
  yaxis: {
    title: 'Total Pending',
    titlefont: {
      size: 16,
      color: '#ca1111'
    },
    tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    }
  },
  legend: {
    x: 0,
    y: 1.0,
    bgcolor: 'rgba(255, 255, 255, 0)',
    bordercolor: 'rgba(255, 255, 255, 0)'
  },
  barmode: 'group',
  bargap: 0.15,
  bargroupgap: 0.1
};

Plotly.newPlot('bar', data2, layout2);


};

var innerContainer = document.querySelector('[data-num="1"'),
  plotEl = innerContainer.querySelector('.plot'),
  countrySelector = innerContainer.querySelector('.regiondata');


function assignOptions(textArray, selector) {
for (var i = 0; i < textArray.length;  i++) {
    var currentOption = document.createElement('option');
    currentOption.text = textArray[i];
    selector.appendChild(currentOption);
}
}
assignOptions(regions, countrySelector);

function updateregiondata(){
 setBubblePlot(countrySelector.value,secondregionSelector.value);
}

countrySelector.addEventListener('change', updateregiondata, false);


var secondinnerContainer = document.querySelector('[data-num="2"'),
plotE2 = secondinnerContainer.querySelector('.secondplot'),
secondregionSelector = secondinnerContainer.querySelector('.secondregiondata');

assignOptions(regions, secondregionSelector);

function updateSecondregiondata(){
  setBubblePlot(countrySelector.value,secondregionSelector.value);
}

secondregionSelector.addEventListener('change', updateSecondregiondata, false);

});

