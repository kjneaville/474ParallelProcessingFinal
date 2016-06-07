$(function() {
	d3.json("./data/top-bottom-tree.json", function(error, root) {
		if(error) throw error;
		
		// Create an instance of the tree chart
		var chart1 = TreeChart();
		
		// Select the container div, bind the data (datum) to it,
  		// then call the instantiation of the tree chart function
		var chartWrapper = d3.select("#treeExample")
			.datum(root).
			call(chart1);
	});
});


// function that returns a top-to-bottom tree
var TreeChart = function () {
	var width, height, margin, linkColor, bgcolor;
	
	// Margin: how much space to put in the SVG for axes/titles
	margin = {top: 100, right: 50, bottom: 100, left: 50};
	
	// Height/width of the drawing area for data symbols
	width = 900 - margin.left - margin.right;
	height = 500 - margin.top - margin.bottom;
	
	// margin = {top: 100, right: 50, bottom: 100, left: 50},
	// width = 900 - margin.left - margin.right,
	// height = 500 - margin.top - margin.bottom;
	
	linkColor = "#000";
	bgcolor = "#2c2c2c"
	
	var chart = function(selection) {
		// Loop through selections and data bound to each element
		selection.each(function(root) {
			// Select `this` as the element in which you want to render your chart
     		var div = d3.select(this);		// container	
			
			var margin = {top: 100, right: 50, bottom: 100, left: 50},
				width = 900 - margin.left - margin.right,
				height = 500 - margin.top - margin.bottom;
			
			var tree = d3.layout.tree()
				.separation(function(a, b) { return a.parent === b.parent ? 1 : 1.2; })
				.children(function(d) { return d.parents; })
				.size([width, height]);			
					
	        // Selection of SVG elements in DIV (making sure not to re-append svg)		 
			var svg = div.append("svg")
				//d3.select("#treeExample")
				//.append("svg")
				// .attr("bgcolor", "#2c2c2c")
				.attr("bgcolor", bgcolor)
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			
			// var nodes = tree.nodes(getData2());
			var nodes = tree.nodes(root);
			
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
				.attr("stroke", "linkColor")
				.attr("shape-rendering", "crispEdges")
				.attr("d", connect2);
    
			function connect2(d, i) {
				return     "M" + d.source.x + "," + ( d.source.y)
						+ "V" + ((3*d.source.y + 4*d.target.y)/7)
						+ "H" + d.target.x
						+ "V" + (d.target.y);
			};
			
			// Use the .exit() and .remove() methods to remove elements that are no longer in the data
			node.exit().remove();
            link.exit().remove();
		})
	};
	
	// Getter/setter methods
    chart.height = function(value) {
        if(!arguments.length) return height;
        height = value;
        return this;
    };

    chart.width = function(value) {
        if(!arguments.length) return width;
        width = value;
        return this;
    };

    chart.margin = function(value) {
        if(!arguments.length) return margin;
        margin = value;
        return this;
    };
	 
	 chart.linkColor = function(value) {
		if(!arguments.length) return linkColor;
		linkColor = value;
		return this; 
	 };
	 
	 chart.bgcolor = function(value) {
		 if(!arguments.length) return linkColor;
		 linkColor = value;
		 return this;
	 }
	 
	return chart;
};