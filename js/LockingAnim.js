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
            var parentDiv = d3.select(this);

            console.log('called');

            var svg;

            parentDiv.selectAll('svg').remove();
            svg = parentDiv.append('svg').attr('class', 'lockingAnim').attr('width', 800).attr('height', 400);
            
            var square = svg.selectAll('rect').data(data.square, function(d) {return d.id});
            var circle1 = svg.selectAll('circle.left-circle').data(data.circle1, function(d) {return d.id});
            var circle2 = svg.selectAll('circle.right-circle').data(data.circle2, function(d) {return d.id});

            square.enter().append('rect')
                .style('color', 'yellow')
                .attr('height', '50')
                .attr('width', '50')
                .attr('fill', data.square[0].colorSquare)
                .attr('opacity', data.square[0].opac)
                .attr('transform', 'translate(' + data.square[0].prePosition + ',' + '77' + ')');

            circle1.enter().append('circle')
                .attr('class', 'left-circle')
                .attr('r', '25')
                .attr('opacity', data.circle1[0].opac)
                .attr('transform', 'translate(' + data.circle1[0].prePosition + ',' + '100' + ')');

            circle2.enter().append('circle')
                .attr('class', 'right-circle')
                .attr('r', '25')
                .attr('opacity', data.circle2[0].opac)
                .attr('transform', 'translate(' + data.circle2[0].prePosition + ',' + '100' + ')');

            square.transition()
                .duration(1000)
                .attr('height', '50')
                .attr('width', '50')
                .attr('fill', data.square[0].colorSquare)
                .attr('transform', 'translate(' +  data.square[0].position + ',' + '77' + ')');

            circle1.transition()
                .duration(1000)
                .attr('r', data.circle1[0].circRad)
                .attr('transform', 'translate(' + data.circle1[0].position + ',' + '100' + ')');

            circle2.transition()
                .duration(1000)
                .attr('r', '20')
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
