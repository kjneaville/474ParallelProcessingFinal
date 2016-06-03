/**
 * Created by Jason on 06/02/16.
 */

$(document).ready(function() {
    var chart = LockingChart();
    
    var data = {
        instructions: [
            {align: 'left', instruction: 'instruction 1'},
            {align: 'left', instruction: 'instruction 2'},
            {align: 'right', instruction: 'instruction 1'},
            {align: 'left', instruction: 'instruction 3'},
            {align: 'right', instruction: 'instruction 2'},
            {align: 'left', instruction: 'instruction 4'},
            {align: 'right', instruction: 'instruction 3'},
            {align: 'right', instruction: 'instruction 4'}
        ],
        thread1: [{position: 0}],
        thread2: [{position: 0}]
    };
    
    d3.select('body')
        .datum(data)
        .call(chart);
});