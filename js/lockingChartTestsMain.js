/**
 * Created by Jason on 06/02/16.
 */

$(document).ready(function() {
    var chart = LockingChart();
    
    var data = [{
        headers: [{align: 'left', text: 'Withdraw'}, {align: 'right', text: 'Deposit'}],
        instructions: [
            {align: 'left', instruction: 'Check balance', highlighted: false},
            {align: 'left', instruction: 'Add 50 to internal balance', highlighted: false},
            {align: 'right', instruction: 'Check balance', highlighted: false},
            {align: 'left', instruction: 'Save to account balance', highlighted: false},
            {align: 'right', instruction: 'Remove 50 from internal balance', highlighted: false},
            {align: 'right', instruction: 'Save to account balance', highlighted: false}
        ],
        thread1: [{position: 0}],
        thread2: [{position: 0}],
        account: 100
    }];
    
    d3.select('body')
        .datum(data[0])
        .call(chart);
});