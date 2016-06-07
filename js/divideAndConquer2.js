



var TreeChart = function () {
	var width, height, margin, linkColor, bgcolor;
	margin = {top: 100, right: 50, bottom: 100, left: 50},
	width = 900 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;
	
	linkColor = "#000";
	bgcolor = "#2c2c2c"
	
	var chart = function(selection) {
		selection.each(function(root) {
			var margin = {top: 100, right: 50, bottom: 100, left: 50},
				width = 900 - margin.left - margin.right,
				height = 500 - margin.top - margin.bottom;
			
			var tree = d3.layout.tree()
				.separation(function(a, b) { return a.parent === b.parent ? 1 : 1.2; })
				.children(function(d) { return d.parents; })
				.size([width, height]);
			
			var svg = d3.select("#treeExample")
				// .attr("bgcolor", "#2c2c2c")
				.attr("bgcolor", bgcolor)
				.append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			
			///////////////////////////////////
			var nodes = tree.nodes(getData2());
			///////////////////////////////////
			
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
			
		})
	};
	
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