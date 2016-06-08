// function that returns a bottom-to-top tree

var TreeChart2 = function () {
	// Sets default values
	var width, height, margin, linkColor, bgcolor;
	
	// Margin: how much space to put in the SVG for axes/titles
	margin = {top: 100, right: 50, bottom: 100, left: 50};
	
	// Height/width of the drawing area for data symbols
	width = 900 - margin.left - margin.right;
	height = 500 - margin.top - margin.bottom;
	
	// Color of the edges
	linkColor = "#000";
	
	// Background color of the node
	bgcolor = "#2c2c2c"
	
	// Internal function that gets returned
	var chart = function(selection) {
		// Loop through selections and data bound to each element
		selection.each(function(root) {
			// Select `this` as the element in which you want to render your chart
     		var div = d3.select(this);		// container			 
			
			margin = {top: 100, right: 50, bottom: 100, left: 50};
			width = 900 - margin.left - margin.right;
			height = 500 - margin.top - margin.bottom;
			
			var tree = d3.layout.tree()
				.separation(function(a, b) { return a.parent === b.parent ? 1 : 1.2; })
				.children(function(d) { return d.parents; })
				.size([width, height]);			
					
	        // Selection of SVG elements in DIV (making sure not to re-append svg)		 
			var svg = div.append("svg")
				.attr("bgcolor", bgcolor)
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
			
			// var nodes = tree.nodes(getData2());
			var nodes = tree.nodes(root[0]);

			var node = svg.selectAll(".node").data(nodes);

//			
			node.exit()
				.transition()
				.duration(400)
				.style("opacity", 0)
				.delay(400)
				.remove();

			node
				.transition()
				.delay(400)
				.duration(800)
				.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; });
//
			node.enter()
				.append("g");
				
			node.append("rect")
				.attr("width", 140)
				.attr("height", 80)
				.attr("fill", "tan")
				.attr("x", function(d) { return d.x - 70; })
				.attr("y", function(d) { return height - d.y - 40; })
				//
				.style("opacity", 0)
				.transition()
				.duration(600)
				.delay(function(d,i) {
					return 24*i;
				})
				.style("opacity", 1);
				
			node.append("text")
				.attr("font-size", "12px")
				.attr("x", function(d) { return d.x; })
				.attr("y", function(d) { return 10 + height - d.y; })
				.style("text-anchor", "middle")
				.text(function(d) { return d.text ;})
                .style("opacity", 0)
				.transition()
				.duration(600)
				.delay(function(d,i) {
					return 24*i;
				})
				.style("opacity", 1);
			
			var link = svg.selectAll(".link").data(tree.links(nodes));

			link.transition()
				.delay(400)
				.duration(600)
				.attr("d", connect);
				
			link.enter()
				.insert("path", "g")
				.attr("fill", "none")
				.attr("stroke", linkColor)
				.attr("shape-rendering", "crispEdges")
				.attr("d", connect)
				.style("opacity", 0)
				.transition()
				.duration(1600)
				.delay(function(d,i) {
					return 24*i;
				})
				.style("opacity", 1);       
            
			function connect(d, i) {
				return     "M" + d.source.x + "," + (height - d.source.y)
						+ "V" + (height -(3*d.source.y + 4*d.target.y)/7)
						+ "H" + d.target.x
						+ "V" + (height - d.target.y);
			};
            			
			link.exit()
				.transition()
				.duration(600)
				.style("opacity", 0)
				.delay(400)
     			.remove();     
			
			// Use the .exit() and .remove() methods to remove elements that are no longer in the data
			// node.exit().remove();
            // link.exit().remove();           
			// test
			console.log(root[0]);
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