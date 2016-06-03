/**
 * Created by Jason on 5/27/2016.
 */

$(document).ready(function() {
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

    var margin = {top: 15, right: 0, bottom: 10, left: 0},
    // var margin = {top: 140, right: 10, bottom: 140, left: 10},
    width = 500 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;
        // width = 400,
        // height = 400;
        
    var orientations = {
        "bottom-to-top": {
            
        }
    }    

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

    var root = treeData[0];

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
// The second reverse tree


    var reverse_margin = {top: 15, right: 0, bottom: 10, left: 0},
        reverse_width = 400,
        reverse_height = 400;

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

    var root = reverse_treeData[0];

    update(root);
});

