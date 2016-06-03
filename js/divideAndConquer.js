/**
 * Created by Jason on 5/27/2016.
 */

$(document).ready(function() {
    // Example of the divide-n-conquer approach
    
    // Temp data
    // TO BE MODIFIED AND SEPERATED AS ANOTHER JS FILE 
//     var treeData = [
//         {
//             "name": "Root",
//             "parent": "null",
//             "children": [
//                 {
//                     "name": "Level 2: A",
//                     "parent": "Root",
//                     "children": [
//                         {
//                             "name": "Level 3: A1",
//                             "parent": "Level 2: A"
//                         },
//                         {
//                             "name": "Level 3: A2",
//                             "parent": "Level 2: A"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "Level 2: B",
//                     "parent": "Root",
//                     "children": [
//                         {
//                             "name": "Level 3: B1",
//                             "parent": "Level 2: A"
//                         },
//                         {
//                             "name": "Level 3: B2",
//                             "parent": "Level 2: A"
//                         }
//                     ]
//                 }
//             ]
//         }
//     ];

//     var margin = {top: 15, right: 0, bottom: 10, left: 0},
//     // var margin = {top: 140, right: 10, bottom: 140, left: 10},
//     width = 500 - margin.right - margin.left,
//     height = 500 - margin.top - margin.bottom;
//         // width = 400,
//         // height = 400;
   
//     // orientations for the tree layout     
//     var orientations = {
//         "top-to-bottom": {
//             size: [width, height],
//             x: function(d) { return d.x; },
//             y: function(d) { return d.y; }
//         },
//         "bottom-to-top": {
//             size: [width, height],
//             x: function(d) { return d.x; },
//             y: function(d) { return height - d.y; }
//         }
//     }    

//     var i = 0;
    
//     // compute the layout
//     var tree = d3.layout.tree()
//         .size([height, width]);


//     var diagonal = d3.svg.diagonal()
//         .projection(function(d) { return [d.x, d.y]; });

//     var treeChart = d3.select("#treeExample")
//         .append("svg")
//         .attr("width", width + margin.right + margin.left)
//         .attr("height", height + margin.top + margin.bottom)
//         .append("g")
//         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//     var root = treeData[0];

//     update(root);

// // Credit to d3noob's tutorial on creating tree nodes with D3

//     function update(source) {

//         // Compute the new tree layout.
//         var nodes = tree.nodes(root).reverse(),
//             links = tree.links(nodes);

//         // Normalize for fixed-depth.
//         nodes.forEach(function(d) { d.y = d.depth * 100; });

//         // Declare the nodes…
//         var node = treeChart.selectAll("g.node")
//             .data(nodes, function(d) { return d.id || (d.id = ++i); });

//         // Enter the nodes.
//         // Create the node circles.
//         var nodeEnter = node.enter().append("g")
//             .attr("class", "node")
//             .attr("transform", function(d) {
//                 return "translate(" + d.x + "," + d.y + ")"; });
                
//         nodeEnter.append("circle")
//             .attr("r", 10)
//             .style("fill", "#fff");

//         // Declare the links…
//         var link = treeChart.selectAll("path.link")
//             .data(links, function(d) { return d.target.id; });

//         // Enter the links.
//         link.enter().insert("path", "g")
//             .attr("class", "link")
//             .attr("d", diagonal);
//     }

// TO DO: add nodes with multiple parents to show the complete divide-n-conquer process
// The second reverse tree


    // var reverse_margin = {top: 15, right: 0, bottom: 10, left: 0},
    //     reverse_width = 400,
    //     reverse_height = 400;

    // var i = 0;

    // var tree = d3.layout.tree()
    //     .size([height, width]);

    // var diagonal = d3.svg.diagonal()
    //     .projection(function(d) { return [d.x, d.y]; });

    // var treeChart = d3.select("#treeExample")
    //     .append("svg")
    //     .attr("width", width + margin.right + margin.left)
    //     .attr("height", height + margin.top + margin.bottom)
    //     .append("g")
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // var root = reverse_treeData[0];

    // update(root);
    
    // top-to-bottom tree
    var margin = {top: 100, right: 50, bottom: 100, left: 50},
        width = 900 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    
    var tree = d3.layout.tree()
        .separation(function(a, b) { return a.parent === b.parent ? 1 : 1.2; })
        .children(function(d) { return d.parents; })
        .size([width, height]);
    
    var svg = d3.select("#treeExample")
        .attr("bgcolor", "#2c2c2c")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var nodes = tree.nodes(getData2());
    
    var node = svg.selectAll(".node")
        .data(nodes)
    .enter()
        .append("g");
        
    node.append("rect")
        .attr("width", 140)
        .attr("height", 80)
        .attr("fill", "tan")
        .attr("x", function(d) { return d.x - 70; })
        .attr("y", function(d) { return d.y - 40; });
    
    // text that shows the name (for testing)
    // node.append("text")
    //     .attr("font-size", "16px")
    //     .attr("fill", "black")
    //     .attr("x", function(d) { return d.x; })
    //     .attr("y", function(d) { return height - d.y - 15; })
    //     .style("text-anchor", "middle")
    //     .text(function(d) { return d.name; });
    
    node.append("text")
        .attr("font-size", "12px")
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return 10 + d.y; })
        .style("text-anchor", "middle")
        .text(function(d) { return d.text ;});
    
    // node.append("text")
    //     .attr("font-size", "11px")
    //     .attr("x", function(d) { return d.x; })
    //     .attr("y", function(d) { return 28 + height - d.y; })
    //     .style("text-anchor", "middle")
    //     .text(function(d) { return d.text; });
        
    var link = svg.selectAll(".link")
        .data(tree.links(nodes))
    .enter()
        .insert("path", "g")
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("stroke", "#000")
        .attr("shape-rendering", "crispEdges")
        .attr("d", connect2);
    
    function connect2(d, i) {
        return     "M" + d.source.x + "," + ( d.source.y)
                + "V" + ((3*d.source.y + 4*d.target.y)/7)
                + "H" + d.target.x
                + "V" + (d.target.y);
    };
    
    function getData2() {
        return {  
            "name": "0",
            "text" : "problem",
            "parents": [
            {
                "name": "1A",
                "text" : "subproblem",
                "parents": [
                {
                    "name": "2A",
                    "text" : "subproblem",
                },
                {
                    "name": "2B",
                    "text" : "subproblem",
                }
                ]
            },
            {
                "name": "1B",
                "text" : "subproblem",

                "parents": [
                {
                    "name": "2C",
                    "text" : "subproblem",
                },
                {
                    "name": "2D",
                    "text" : "subproblem",
                }
                ]
            }
            ]
        };
    };
    
    
    // bottom-to-top tree
    var margin = {top: 100, right: 50, bottom: 100, left: 50},
        width = 900 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    
    var tree = d3.layout.tree()
        .separation(function(a, b) { return a.parent === b.parent ? 1 : 1.2; })
        .children(function(d) { return d.parents; })
        .size([width, height]);
    
    var svg = d3.select("#treeExample")
        .attr("bgcolor", "#2c2c2c")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var nodes = tree.nodes(getData());
    
    var node = svg.selectAll(".node")
        .data(nodes)
    .enter()
        .append("g");
        
    node.append("rect")
        .attr("width", 140)
        .attr("height", 80)
        .attr("fill", "tan")
        .attr("x", function(d) { return d.x - 70; })
        .attr("y", function(d) { return height - d.y - 40; });
    
    // text that shows the name (for testing)
    // node.append("text")
    //     .attr("font-size", "16px")
    //     .attr("fill", "black")
    //     .attr("x", function(d) { return d.x; })
    //     .attr("y", function(d) { return height - d.y - 15; })
    //     .style("text-anchor", "middle")
    //     .text(function(d) { return d.name; });
    
    node.append("text")
        .attr("font-size", "12px")
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return 10 + height - d.y; })
        .style("text-anchor", "middle")
        .text(function(d) { return d.text ;});
    
    // node.append("text")
    //     .attr("font-size", "11px")
    //     .attr("x", function(d) { return d.x; })
    //     .attr("y", function(d) { return 28 + height - d.y; })
    //     .style("text-anchor", "middle")
    //     .text(function(d) { return d.text; });
        
    var link = svg.selectAll(".link")
        .data(tree.links(nodes))
    .enter()
        .insert("path", "g")
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("stroke", "#000")
        .attr("shape-rendering", "crispEdges")
        .attr("d", connect);
    
    function connect(d, i) {
        return     "M" + d.source.x + "," + (height - d.source.y)
                + "V" + (height - (3*d.source.y + 4*d.target.y)/7)
                + "H" + d.target.x
                + "V" + (height - d.target.y);
    };
    
    
    function getData() {
        return {  
            "name": "0",
            "text" : "solution to problem",
            "parents": [
            {
                "name": "1A",
                "text" : "solution to subproblem",
                "parents": [
                {
                    "name": "2A",
                    "text" : "solution to subproblem",
                },
                {
                    "name": "2B",
                    "text" : "solution to subproblem",
                }
                ]
            },
            {
                "name": "1B",
                "text" : "solution to subproblem",

                "parents": [
                {
                    "name": "2C",
                    "text" : "solution to subproblem",
                },
                {
                    "name": "2D",
                    "text" : "solution to subproblem",
                }
                ]
            }
            ]
        };
    };
  
});

