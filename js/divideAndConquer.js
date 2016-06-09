/**
 * Created by Jason on 5/27/2016.
 */

$(document).ready(function() {   
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
    
    node.append("text")
        .attr("font-size", "12px")
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return 10 + d.y; })
        .style("text-anchor", "middle")
        .text(function(d) { return d.text ;});
        
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
    
    node.append("text")
        .attr("font-size", "12px")
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return 10 + height - d.y; })
        .style("text-anchor", "middle")
        .text(function(d) { return d.text ;});
        
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
                    "text" : "solution to subproblem"
                },
                {
                    "name": "2B",
                    "text" : "solution to subproblem"
                }
                ]
            },
            {
                "name": "1B",
                "text" : "solution to subproblem",

                "parents": [
                {
                    "name": "2C",
                    "text" : "solution to subproblem"
                },
                {
                    "name": "2D",
                    "text" : "solution to subproblem"
                }
                ]
            }
            ]
        };
    };
});