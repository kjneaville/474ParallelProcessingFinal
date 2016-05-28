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


// Example of the divide-n-conquer approach

// Temp data
// TO BE MODIFIED AND SEPERATED AS ANOTHER JS FILE 
var treeData = [
  {
    "name": "Root",
    "parent": "null",
    "children": [
      {
        "name": "Level 2: A",
        "parent": "Root",
        "children": [
          {
            "name": "Level 3: A1",
            "parent": "Level 2: A"
          },
          {
            "name": "Level 3: A2",
            "parent": "Level 2: A"
          }
        ]
      },
      {
        "name": "Level 2: B",
        "parent": "Root",
        "children": [
            {
            "name": "Level 3: B1",
            "parent": "Level 2: A"           
            },
            {
            "name": "Level 3: B2",
            "parent": "Level 2: A"
            }
        ]
      }
    ]
  }
];

var margin = {top: 350, right: 0, bottom: 10, left: 0},
	// width = 1200 - margin.right - margin.left,
	// height = 900 - margin.top - margin.bottom;
    width = 400,
    height = 400;
    
var i = 0;

var tree = d3.layout.tree()
	.size([height, width]);
    
var diagonal = d3.svg.diagonal()
	.projection(function(d) { return [d.x, d.y]; });
    
var treeChart = d3.select("#treeExample")
    .append("svg")
	.attr("width", width + margin.right + margin.left)
	.attr("height", height + margin.top + margin.bottom)
    .append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
  
update(root);

// Credit to d3noob's tutorial on creating tree nodes with D3

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
	  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 100; });

  // Declare the nodes…
  var node = treeChart.selectAll("g.node")
	  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter the nodes.
  var nodeEnter = node.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) { 
		  return "translate(" + d.x + "," + d.y + ")"; });

  nodeEnter.append("circle")
	  .attr("r", 10)
	  .style("fill", "#fff");

  // Declare the links…
  var link = treeChart.selectAll("path.link")
	  .data(links, function(d) { return d.target.id; });

  // Enter the links.
  link.enter().insert("path", "g")
	  .attr("class", "link")
	  .attr("d", diagonal);
}

// TO DO: add nodes with multiple parents to show the complete divide-n-conquer process

