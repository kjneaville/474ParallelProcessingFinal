$(document).ready(function() {
    var rectDemo = d3.select("#basicAnim")
        .append("svg:svg")
        .attr("width", 600)
        .attr("height", 800);

    rectDemo.append("svg:rect")
        .attr("x", 100)
        .attr("y", 100)
        .attr("height", 100)
        .attr("width", 170);

    rectDemo.append("svg:rect")
        .attr("x", 340)
        .attr("y", 100)
        .attr("height", 100)
        .attr("width", 170);

    rectDemo.append("svg:rect")
        .attr("x", 100)
        .attr("y", 300)
        .attr("height", 100)
        .attr("width", 70);

    rectDemo.append("svg:rect")
        .attr("x", 210)
        .attr("y", 300)
        .attr("height", 100)
        .attr("width", 70);

    rectDemo.append("svg:rect")
        .attr("x", 390)
        .attr("y", 300)
        .attr("height", 100)
        .attr("width", 70);

    var flow;
    var flow2;
    var flow3;
    var bar;
    var bar2;
    var bar3;

    var foo = null;
    var foo2 = null;

    flow = document.getElementById("flowDiv");
    flow2 = document.getElementById("flowDiv2");
    flow3 = document.getElementById("flowDiv3");
    bar = document.getElementById("barDiv");
    bar2 = document.getElementById("barDiv2");
    bar3 = document.getElementById("barDiv3");
    flow.style.left = 110 + 'px';
    flow2.style.left = 220 + 'px';
    flow3.style.left = 400 + 'px';
    bar.style.left = 165 + 'px';
    bar2.style.left = 400 + 'px';
    bar3.style.left = 165 + 'px';
    flow.style.top = 300 + 'px';
    flow2.style.top = 300 + 'px';
    flow3.style.top = 300 + 'px';
    bar.style.top = 150 + 'px';
    bar2.style.top = 150 + 'px';
    bar3.style.top = 240 + 'px';
    bar.style.opacity = "0.1";
    bar2.style.opacity = "0.1";
    bar3.style.opacity = "0.6";
    doUpHelper();

    foo = document.getElementById("testDiv");
    foo.style.left = 700  + 'px';
    foo2 = document.getElementById("testDiv2");
    foo2.style.left = 700 + 'px';
    foo.style.top = 1300 + 'px';
    foo2.style.top = 1300 + 'px';
    doMoveHelper();

    function doMoveHelper() {
        foo.style.left = parseInt(foo.style.left) + 1 + 'px';
        foo2.style.left = parseInt(foo2.style.left) + 1 + 'px';
        if (parseInt(foo.style.left) < 1100) {
            setTimeout(doMoveHelper, 20);
        } else {
            clearTimeout(doMoveHelper);
        }
    }

    function doUpHelper() {
        flow.style.top = parseInt(flow.style.top) + 1 + 'px';
        flow2.style.top = parseInt(flow2.style.top) + 1 + 'px';
        flow3.style.top = parseInt(flow3.style.top) + 1 + 'px';
        bar.style.top = parseInt(bar.style.top) + 1 + 'px';
        bar.style.opacity = "" + (parseInt(bar.style.top) - 150) / 200;
        bar2.style.opacity = "" + (parseInt(bar2.style.top) - 150) / 200 ;
        bar3.style.opacity = "" + (parseInt(bar3.style.top) - 150) / 200 ;
        if (parseInt(bar.style.top) > 330) {
            bar.style.opacity = "0.1";
            bar.style.top = 150 + 'px';
        }
        bar2.style.top = parseInt(bar2.style.top) + 1 + 'px';
        bar3.style.top = parseInt(bar3.style.top) + 1 + 'px';
        if (parseInt(bar3.style.top) > 330) {
            bar3.style.opacity = "0.1";
            bar3.style.top = 150 + 'px';
        }
        if (parseInt(flow.style.top) < 480) {
            setTimeout(doUpHelper, 20);
        } else {
            flow.style.top = 300 + 'px';
            flow2.style.top = 300 + 'px';
            flow3.style.top = 300 + 'px';
            bar.style.top = 150 + 'px';
            bar2.style.top = 150 + 'px';
            clearTimeout(doUpHelper);
            doUpHelper();
        }
    }
});

// todo this needs to be encapsulated.
//Make an SVG Container
 var svgContainer = d3.select("#timeLine").append("svg")
                                     .attr("width", 400)
                                     .attr("height", 300);

 //Draw the Rectangle
 var time1 = svgContainer.append("rect")
                             .attr("x", 10)
                             .attr("y", 30)
                             .attr("width", 50)
                             .attr("height", 50)
                             .style("fill", 'green');

var time2 = svgContainer.append("rect")
                             .attr("x", 100)
                             .attr("y", 30)
                             .attr("width", 50)
                             .attr("height", 50)
                             .style("fill", 'green');
var time2 = svgContainer.append("rect")
                            .attr("x", 190)
                            .attr("y", 30)
                            .attr("width", 50)
                            .attr("height", 50)
                            .style("fill", 'green');
var lineData = [ { "x": 1,   "y": 25},  { "x": 245,  "y": 25}, { "x": 245,  "y": 5},
    { "x": 270,  "y": 55}, { "x": 245,  "y": 105}, { "x": 245,  "y": 85}, { "x": 1,   "y": 85}];

//This is the accessor function we talked about above
var lineFunction = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .interpolate("linear");

//The line SVG Path we draw
var lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
