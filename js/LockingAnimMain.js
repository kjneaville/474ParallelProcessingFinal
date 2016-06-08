/**
 * Created by Jason on 06/07/16.
 */

$(document).ready(function() {
    var chart = LockingAnim();

    var data = {
            circle1: [{id: 0}],
            circle2: [{id: 1}],
            square: [{id: 2}]
        };

    
    $('#button0').click(function() {
        data.circle1[0].position = 100;
        data.circle2[0].position = 500;
        data.square[0].position = 300;
        
        console.log(data);

        d3.select('#chart')
            .datum(data)
            .call(chart);
    });
    
    $('#button1').click(function() {
        data.circle1[0].position = 200;
        data.circle2[0].position = 400;
        data.square[0].position = 300;

        d3.select('#chart')
            .datum(data)
            .call(chart);
    });
    
    $('#button2').click(function() {
        data.circle1[0].position = 300;
        data.circle2[0].position = 300;
        data.square[0].position = 300;

        d3.select('#chart')
            .datum(data)
            .call(chart);
    });
    
    $('#button3').click(function() {
        data.circle1[0].position = 100;
        data.circle2[0].position = 500;
        data.square[0].position = 300;

        d3.select('#chart')
            .datum(data)
            .call(chart);
    });
});