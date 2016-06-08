/**
 * Created by Jason on 06/07/16.
 */

var LockingAnim = function() {
    // local property variables
    var color;
    var fontSize;

    var chart = function(selection) {
        selection.each(function(data) {
            console.log(data);
            console.log(data.circle1.position);

            var parentDiv = d3.select(this)
                .attr('height', 600)
                .attr('width', $(window).width() * 0.9);
            
            var square = parentDiv.selectAll('rect').data(data.square, function(d) {return d.id});
            var circle1 = parentDiv.selectAll('circle.left-circle').data(data.circle1, function(d) {return d.id});
            var circle2 = parentDiv.selectAll('circle.right-circle').data(data.circle2, function(d) {return d.id});

            square.enter().append('rect')
                .style('color', 'yellow')
                .attr('height', '50')
                .attr('width', '50')
                .attr('transform', 'translate(' + data.square[0].position + ',' + '100' + ')');

            circle1.enter().append('circle')
                .attr('class', 'left-circle')
                .attr('r', '25')
                .attr('transform', 'translate(' + data.circle1[0].position + ',' + '100' + ')');

            circle2.enter().append('circle')
                .attr('class', 'right-circle')
                .attr('r', '25')
                .attr('transform', 'translate(' + data.circle2[0].position + ',' + '100' + ')');

            square.transition()
                .duration(500)
                .attr('height', '50')
                .attr('width', '50')
                .attr('transform', 'translate(' + data.square[0].position + ',' + '100' + ')');

            circle1.transition()
                .duration(500)
                .attr('r', '25')
                .attr('transform', 'translate(' + data.circle1[0].position + ',' + '100' + ')');

            circle2.transition()
                .duration(500)
                .attr('r', '25')
                .attr('transform', 'translate(' + data.circle2[0].position + ',' + '100' + ')');

            square.exit().selectAll('rect')
                .remove();

            circle1.exit().selectAll('circle.left-circle')
                .remove();

            circle2.exit().selectAll('circle.right-circle')
                .remove();
        })
    };

    // chart.color = function(value) {
    //     if(!arguments.length) return color;
    //     color = value;
    //     return this;
    // };
    //
    // chart.fontSize = function(value) {
    //     if(!arguments.length) return fontSize;
    //     fontSize = value;
    //     return this;
    // };

    return chart;
};
