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

    var foo = null;
    var foo2 = null;

    flow = document.getElementById("flowDiv");
    flow2 = document.getElementById("flowDiv2");
    flow3 = document.getElementById("flowDiv3");
    bar = document.getElementById("barDiv");
    bar2 = document.getElementById("barDiv2");
    flow.style.left = 110 + 'px';
    flow2.style.left = 220 + 'px';
    flow3.style.left = 400 + 'px';
    bar.style.left = 165 + 'px';
    bar2.style.left = 400 + 'px';
    flow.style.top = 300 + 'px';
    flow2.style.top = 300 + 'px';
    flow3.style.top = 300 + 'px';
    bar.style.top = 150 + 'px';
    bar2.style.top = 150 + 'px';
    bar.style.opacity = "0.1";
    bar2.style.opacity = "0.1";
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
        bar.style.top = parseInt(bar.style.top) + 2 + 'px';
        bar.style.opacity = "" + (parseInt(bar.style.top) - 150) / 200;
        bar2.style.opacity = "" + (parseInt(bar2.style.top) - 150) / 200 ;
        if (parseInt(bar.style.top) > 330) {
            bar.style.opacity = "0.1";
            bar.style.top = 150 + 'px';
        }
        bar2.style.top = parseInt(bar2.style.top) + 1 + 'px';
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
