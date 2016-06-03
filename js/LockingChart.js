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

            var parentDiv = d3.select(this)
                .attr('id', 'race-anim')
                .style({
                    'width': '100%',
                    'margin': 'auto'
                });
            var paragraphs = parentDiv.selectAll('p.instruction').data(data.instructions, function(d) {return data.instructions.indexOf(d);});
            
            var thread1 = parentDiv.selectAll('.thread1').data(data.thread1);
            var thread2 = parentDiv.selectAll('.thread2').data(data.thread2);

            var account = parentDiv.selectAll('p.account').data(data.account);
            var headers = parentDiv.selectAll('p.header').data(data.headers);

            headers.enter().append('p')
                .attr('class', 'header')
                .style('text-align', function(d) {return d.align})
                .style({
                    'display': 'inline-block',
                    'width': '50%'
                })
                .text(function(d) {return d.text;});

            paragraphs.enter().append('p')
                .attr('class', 'instruction')
                .style({
                    'border': 'solid black 2px',
                    'margin': '0',
                    'padding': '1em',
                    'background-color': function(d){return d.highlighted ? 'green' : 'none'}
                })
                .text(function(d) {return d.instruction;})
                .style('text-align', function(d) {return d.align;});

            paragraphs.transition().select('p.instruction')
                .duration(500)
                .style({
                    'border': 'solid black 2px',
                    'margin': '0',
                    'padding': '1em',
                    'background-color': function(d){return d.highlighted ? 'green' : 'none'}
                })
                .text(function(d) {return d.instruction;})
                .style('text-align', function(d) {return d.align;});

            paragraphs.exit().select('p.instruction')
                .duration(500)
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
