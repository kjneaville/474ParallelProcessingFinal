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
  
var foo = null;
var foo2 = null;

$(document).ready(function() {
    foo = document.getElementById("testDiv");
    foo.style.left = 0 + 'px';
    foo2 = document.getElementById("testDiv2");
    foo2.style.left = 0 + 'px';
    foo2.style.top = foo.style.top + 400 + 'px';
    doMoveHelper();
});

function doMoveHelper() {
    foo.style.left = parseInt(foo.style.left) + 1 + 'px';
    foo2.style.left = parseInt(foo2.style.left) + 1 + 'px';
    if (parseInt(foo.style.left) < 200) {
	setTimeout(doMoveHelper, 20);
    } else {
	clearTimeout(doMoveHelper);
    }
}


