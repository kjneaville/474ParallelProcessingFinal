/**
 * Created by Jason on 5/27/2016.
 */

$(document).ready(function() {
    // create data
    var instructions = [
        {align: 'left', instruction: 'instruction 1'},
        {align: 'left', instruction: 'instruction 2'},
        {align: 'right', instruction: 'instruction 1'},
        {align: 'left', instruction: 'instruction 3'},
        {align: 'right', instruction: 'instruction 2'},
        {align: 'left', instruction: 'instruction 4'},
        {align: 'right', instruction: 'instruction 3'},
        {align: 'right', instruction: 'instruction 4'}
    ];

    var parentDiv = d3.select('#race-anim');
    var paragraphs = parentDiv.selectAll('p.instruction').data(instructions, function(d) {return instructions.indexOf(d);});

    paragraphs.enter().append('p')
        .attr('class', 'instruction')
        .text(function(d) {return d.instruction;})
        .style('text-align', function(d) {return d.align;});
});