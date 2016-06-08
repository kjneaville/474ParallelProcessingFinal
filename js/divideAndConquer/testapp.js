var myApp = angular.module('myApp', [])

// Main controller
.controller('MainController', function($scope) {
    // Data for the chart (top-bottom)
    $scope.data = [
    {   
        "name": "0",
        "text" : "problem",
        "parents": [
        {
            "name": "1A",
            "text" : "subproblem",
            "parents": [
            {
                "name": "2A",
                "text" : "subproblem"
            },
            {
                "name": "2B",
                "text" : "subproblem"
            }
            ]
        },
        {
            "name": "1B",
            "text" : "subproblem",
            "parents": [
            {
                "name": "2C",
                "text" : "subproblem"
            },
            {
                "name": "2D",
                "text" : "subproblem"
            }
            ]
        }
        ]
    }
    ];
    
    // todo parameters for the chart directive. This will tell the directive which chart to display and what properties that chart will have //
    $scope.chartParams = [
        {chart: 'tree'}
            // {chart: 'tree', color:'red', fontSize:20, filter:function(d){return d}},
            // {chart: 'empty', color:'blue', fontSize:10, filter:function(d){return d.id>2}},
            // {chart: 'empty', color:'orange', fontSize:100, filter:function(d){return d.id<3}},
            // {chart: 'empty', color:'green', fontSize:30, filter:function(d){return d}},
            // {chart: 'empty', color:'green', fontSize:30, filter:function(d){return d}},
            // {chart: 'empty', color:'green', fontSize:30, filter:function(d){return d}},
            // {chart: 'empty', color:'green', fontSize:30, filter:function(d){return d}}
    ];
    
    $scope.step = 0;
    
    $scope.sectionText = [
    {text:'Divide and Conquer is an algorithm design paradigm based on multi-branched recursion. A divide and conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.'},
    // {text:'A data race occurs when: two or more threads in a single process access the same memory location concurrently, and. at least one of the accesses is for writing, and. the threads are not using any exclusive locks to control their accesses to that memory.'},
    // {text:"Parallelism is when tasks literally run at the same time, eg. on a multicore processor. Concurrency is when two or more tasks can start, run, and complete in overlapping time periods. It doesn't necessarily mean they'll ever both be running at the same instant. Problems arise when two parallel processes attempt to alter the same data. The output can be different than expected when parallel processes happen out of the expected order. One solution to this problem is locking, which prevents processes from accesing data until the first process has finished."},
    // {text:'In the real world, many complex, interrelated events are all occuring independently at the same time. Parallel computing gives us a much better model to simulate and understand real world phenomenon.'},
    // {text:'Created by Kenneth Neaville, Jason Ho, Omar Rojas, and Sophie Zeng for Informatics 474 Spring 2016.'}
    ];
    
    // Desired section height
    // todo decide how tall sections should be and what header we want before charts start appearing
    $scope.sectionHeight = 600;
    $scope.headerHeight = 1400;

})

    // // Scroll directive
    // .directive("scroll", function($window) {
    //     return {
    //         restrict:'E', // this directive is specified as an html element <scroll>
    //         scope:false, // use global scope
    //         // Create a link function that allows dynamic element creation
    //         link:function(scope, elem) {
    //             angular.element($window).bind("scroll", function() {
    //                 scope.step = Math.ceil((this.pageYOffset - scope.headerHeight) / scope.sectionHeight);
    //                 if(scope.step < 0) {
    //                     scope.step = 0;
    //                 } else if (scope.step > scope.sectionText.length - 1) {
    //                     scope.step = scope.sectionText.length - 1;
    //                 }
    //                 scope.$apply();
    //             });
    //         }
    //     };
    // })

    // Create a directive 'scatter' that creates scatterplots
    .directive('treeChart', function() {
        // Return your directive element
        return {
            restrict: 'E', // this directive is specified as an html element <scatter>
            scope: false,
            link:function(scope,elem,attrs){
                // Use the scope.$watch method to watch for changes to the step, then re-draw your chart
                scope.$watch('step', function() {
                    // // Define you chart function and chart element
                    // var myChart = TreeChart();
        
                    // // Wrapper element to put your chart in
                    // var chart = d3.select(elem[0]);
                        
                    // todo cases for all chart types
                    // switch chart type depending on step, also apply any specific properties we need to
                    // you set the data inside the case for your chart. It can be set to anything, doesn't have to be from the data array
                    console.log("step: " + scope.step);
                    switch(scope.chartParams[scope.step].chart) {
                        // case 'example':
                        //     data = scope.data[scope.step];
                        //     var color = scope.chartParams[scope.step].color;
                        //     var fontSize = scope.chartParams[scope.step].fontSize;
                        //     chart = ParagraphChart().color(color).fontSize(fontSize);
                        //     break;
                        // case 'empty':
                        //     data = scope.data[scope.step];
                        //     chart = EmptyChart();
                        //     break;
                        case 'tree':
                            
                        // default:
                        //     // this should never happen. Something went terribly wrong if this ran
                    }
    
                    // Wrapper element to put your svg (chart) in
                    // wrapper = d3.select(elem[0])
                    chart.datum(scope.data)
                        .call(myChart);
                });
            }
            // Create a link function that allows dynamic element creation
            // link: function(scope, elem) {
            //     // Define you chart function and chart element
            //     var myChart = TreeChart();
    
            //     // Wrapper element to put your chart in
            //     var chart = d3.select(elem[0]);
    
            //     // Use the scope.$watch method to watch for changes to the step, then re-draw your chart
            //     scope.$watch('data', function() {
            //         // Instantiate your chart with given settings
            //         // myChart.xVar('name')
            //         //     .yVar('concerts')
            //         //     .xAxisLabel('Name')
            //         //     .yAxisLabel('Concerts Attended');
    
            //         // Bind data and call the chart function
            //         chart.datum(scope.data)
            //             .call(myChart);
            //     }, true); // Watch for object consistency!
            // }
        };
    });
