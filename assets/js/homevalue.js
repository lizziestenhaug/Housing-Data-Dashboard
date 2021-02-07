// samples code used from https://www.d3-graph-gallery.com/graph/line_basic.html

      var margin = {top: 10, right: 30, bottom: 90, left: 60},
      width = 800 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
  var svg = d3.select("#mi_imagen")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
  
  // Parse the Data
 
d3.csv("./assets/data/State_increase_value.csv").then(function(zillowdata) {
    zillowdata.forEach(function(data) {
     data.StateName = data.StateName;
     data.RegionName = data.RegionName;
     data.Dic_2020 = +data.Dic_2020;
     data.Perc_Increase_5y = +data.Perc_Increase_5y;
   });

   
    var x = d3.scaleBand()
    .domain(zillowdata.map(d => d.StateName ))
    .range([ 0, width ])
    .padding(0.2);
    
    
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
 
    
    svg.append("text")      // text label for the x axis
        .attr("x", 350 )
        .attr("y",  450 )
        .style("text-anchor", "middle")
        .text("States");


  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 100])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));


    svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Percentage Increase");

 
  // Bars
  barGroup = svg.selectAll("mibar")
    .data(zillowdata)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.StateName); })
      .attr("width", x.bandwidth())
      .attr("fill", "#ca1111")
      // no existe bar at the beginning
      .attr("height", function(d) { return height - y(0); }) 
      .attr("y", function(d) { return y(0); })
  
  // Animation
  svg.selectAll("rect")
    .transition()
    .duration(800)
    .attr("y", function(d) { return y(d.Perc_Increase_5y); })
    .attr("height", function(d) { return height - y(d.Perc_Increase_5y); })
    .delay(function(d,i){console.log(i) ; return(i*100)})
    .attr("class", "bar");


    label1 = "Dec-2020: ";
    label2 = "Dec-2015: ";

    var toolTip = d3.tip()
    .attr("class", "d3-tip")
    .offset([80, -60])
    .html(function(d) {
      return (`${d.RegionName}<br>${label1}${d.Dic_2020}<br>${label2}${d.Dic_2015}<br>${'Increase: '}${d.Perc_Increase_5y}${"%"}`);
    });

      barGroup.call(toolTip);
                barGroup.on("mouseover", function(data) {
                    toolTip.show(data);
                })
                    // onmouseout event
                    .on("mouseout", function(data) {
                    toolTip.hide(data);
                    });

    //from here imagen 2
    var svg2 = d3.select("#my_line")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
    
 
     
     var chartGroup = svg2.append("g")
       //.attr("transform", `translate(${margin.left}, ${margin.top})`); // quito este espacio

     var y2 = d3.scaleLinear()
     .domain([90000, d3.max(zillowdata, function(d) { return +d.Dic_2020; })])
     .range([ height, 0 ]);
     svg2.append("g")
     .call(d3.axisLeft(y2));


     var x2 = d3.scaleBand()
    .domain(zillowdata.map(d => d.StateName ))
    .range([ 0, width ])
    .padding(0.2);


  ////aqui Chart group for the the circle hover
        chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(x2);

        chartGroup.append("g")
        .call(y2);

        // line generator
        var line = d3.line()
        .x(d => x2(d.StateName))
        .y(d => y2(d.Dic_2020));

        // append line
        chartGroup.append("path")
        .data([zillowdata])
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "red");

    /////hasta aqui

  
   // y axis label
    svg2.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2)+5)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Value");
    
    
    svg2.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x2))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");
  

   // firts line 2020
    line2020 = svg2.append("path")
            .datum(zillowdata)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
              .x(function(d) { return x2(d.StateName) })
              .y(function(d) { return y2(d.Dic_2020) })
              )
            

    // second line 2015
    line2 = svg2.append("path")
              .datum(zillowdata)
              .attr("fill", "none")
              .attr("stroke", "red")
              .attr("stroke-width", 1.5)
              .attr("d", d3.line()
                .x(function(d) { return x2(d.StateName) })
                .y(function(d) { return y2(d.Dic_2015) })
                )
    
  
// append circles

var circlesGroup2 = svg2.selectAll("circle")
                .data(zillowdata)
                .enter()
                .append("circle")
                .attr("cx", d => x2(d.StateName))
                .attr("cy", d => y2(d.Dic_2020))
                .attr("r", "3")
                .attr("fill", "steelblue")
                .attr("stroke", "blue");


var circlesGroup = chartGroup.selectAll("circle")
                .data(zillowdata)
                .enter()
                .append("circle")
                .attr("cx", d => x2(d.StateName))
                .attr("cy", d => y2(d.Dic_2015))
                .attr("r", "3")
                .attr("fill", "red")
                .attr("stroke-width", "1")
                .attr("stroke", "red");

label = 'Value: '

// Toltip for my line value home 2020
var toolTip2 = d3.tip()
 .attr("class", "d3-tip3")
 .offset([80, -60])
 .html(function(d) {
   return (`<strong>${(d.RegionName)}<strong><hr>${label}${d.Dic_2020}<hr>`);
 });

 circlesGroup2.call(toolTip2);
    circlesGroup2.on("mouseover", function(data) {
                 toolTip2.show(data);
             })
                 // onmouseout event
                 .on("mouseout", function(data) {
                 toolTip2.hide(data);
                 });

// Toltip for my line value home 2015
 var toolTip1 = d3.tip()
 .attr("class", "d3-tip2")
 .offset([80, -60])
 .html(function(d) {
   return (`<strong>${(d.RegionName)}<strong><hr>${label}${d.Dic_2015}<hr>`);
 });

 circlesGroup.call(toolTip1);
    circlesGroup.on("mouseover", function(data) {
                 toolTip1.show(data);
             })
                 // onmouseout event
                 .on("mouseout", function(data) {
                 toolTip1.hide(data);
                 });   
                 
                 
 // Legend created
 svg2.append("circle").attr("cx",500).attr("cy",30).attr("r", 6).style("fill", "blue")
 svg2.append("circle").attr("cx",500).attr("cy",60).attr("r", 6).style("fill", "red")
 svg2.append("text").attr("x", 520).attr("y", 30).text("Dec-2020").style("font-size", "15px").attr("alignment-baseline","middle")
 svg2.append("text").attr("x", 520).attr("y", 60).text("Dec-2015").style("font-size", "15px").attr("alignment-baseline","middle")
 
 })

  