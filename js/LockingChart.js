/**
 * Created by Jason on 06/02/16.
 */
// Create a function LockingChart that will be your reusable function
var LockingChart = function() {
    // local property variables
    var color;
    var fontSize;
    
    var chart = function(selection) {
        selection.each(function(data) {

            var parentDiv = d3.select(this);
            var paragraphs = parentDiv.selectAll('p.instruction').data(data.instructions, function(d) {return data.instructions.indexOf(d);});
            
            var thread1 = parentDiv.selectAll('.thread1').data(data.thread1);
            var thread2 = parentDiv.selectAll('.thread2').data(data.thread2);

            paragraphs.enter().append('p')
                .attr('class', 'instruction')
                .text(function(d) {return d.instruction;})
                .style('text-align', function(d) {return d.align;});

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
