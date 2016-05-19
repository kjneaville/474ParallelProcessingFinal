var rectDemo = d3.select("#basicAnim")
  .append("svg:svg")
  .attr("width", 600)
  .attr("height", 400);

rectDemo.append("svg:rect")
  .attr("x", 200)
  .attr("y", 100)
  .attr("height", 100)
  .attr("width", 200);

rectDemo.append("svg:rect")
  .attr("x", 100)
  .attr("y", 300)
  .attr("height", 100)
  .attr("width", 100);

rectDemo.append("svg:rect")
  .attr("x", 250)
  .attr("y", 300)
  .attr("height", 100)
  .attr("width", 100);

rectDemo.append("svg:rect")
  .attr("x", 400)
  .attr("y", 300)
  .attr("height", 100)
  .attr("width", 100);