/**
 * Created by Jason on 06/02/16.
 */
// Create a function LockingChart that will be your reusable function
var EmptyChart = function() {
    
    var chart = function(selection) {
        $('.chart').empty();
    };

    return chart;
};
