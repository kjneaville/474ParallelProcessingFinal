// Main JavaScript File for divide-and-conquer

// After the page load
$(function chart1() {
	var data = "./data/top-bottom-tree.json";

	
	d3.json(data, function(error, root) {
		if(error) throw error;
		
		// Create an instance of the tree chart
		var treeChart = TreeChart();
		
		
		// Select the container div, bind the data (datum) to it,
  		// then call the instantiation of the tree chart function
		var chartWrapper = d3.select("#treeExample")
			.datum(root).
			call(treeChart);
	});	
});


$(function chart2() {
	// var data2 = "./data/bottom-to-top.json";

	
	d3.json("./data/bottom-top-tree.json", function(error, root) {
		if(error) throw error;
		
		// Create an instance of the tree chart
		var treeChart2 = TreeChart2();
		
		
		// Select the container div, bind the data (datum) to it,
  		// then call the instantiation of the tree chart function
		var chartWrapper2 = d3.select("#treeExample2")
			.datum(root).
			call(treeChart2);
	});	
});