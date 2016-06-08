/**
 * Created by Jason on 06/02/16.
 */

// based on module 15 example

var app = angular.module('app', [])

// Main controller
    .controller('Controller', function($scope) {

        // Data for the chart
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // todo add 'data' or whatever you need to make your chart run. Make sure it lines up with the section you chart exists in //
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $scope.data = [
            [
                {id:0, text:'Paragraph 0'},
                {id:1, text:'Paragraph 1'},
                {id:2, text:'Paragraph 2'},
                {id:3, text:'Paragraph 3'}
            ],
            [],
            [
                {id:0, text:'Paragraph 0'},
                {id:1, text:'Paragraph 1'},
                {id:2, text:'Paragraph 2'},
                {id:3, text:'Paragraph 3'}
            ],
            [],
            [],
            [],
            []
        ];

        $scope.animData = {
            circle1: [{id: 0}],
            circle2: [{id: 1}],
            square: [{id: 2}]
        };

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // todo parameters for the chart directive. This will tell the directive which chart to display and what properties that chart will have //
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $scope.chartParams = [
            {chart: 'empty', color:'red', fontSize:20, filter:function(d){return d}},
            {chart: 'empty', color:'blue', fontSize:10, filter:function(d){return d.id>2}},
            {chart: 'empty', color:'orange', fontSize:100, filter:function(d){return d.id<3}},
            {chart: 'empty', color:'green', fontSize:30, filter:function(d){return d}},
            {chart: 'empty', color:'green', fontSize:30, filter:function(d){return d}},
            {chart: 'lockingAnim'},
            {chart: 'lockingAnim'},
            {chart: 'lockingAnim'},
            {chart: 'lockingAnim'}
        ];

        $scope.step = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////
        //            todo Text for each section, this is where descriptions should go.            //
        // todo this can be changed to html if you want, you need to modiy index for that to work. //
        /////////////////////////////////////////////////////////////////////////////////////////////
        $scope.sectionText = [
            {text:'Divide and Conquer is an algorithm design paradigm based on multi-branched recursion. A divide and conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.'},
            {text:'A data race occurs when: two or more threads in a single process access the same memory location concurrently, and. at least one of the accesses is for writing, and. the threads are not using any exclusive locks to control their accesses to that memory.'},
            {text:"Parallelism is when tasks literally run at the same time, eg. on a multicore processor. Concurrency is when two or more tasks can start, run, and complete in overlapping time periods. It doesn't necessarily mean they'll ever both be running at the same instant. Problems arise when two parallel processes attempt to alter the same data. The output can be different than expected when parallel processes happen out of the expected order. One solution to this problem is locking, which prevents processes from accesing data until the first process has finished."},
            {text:'In the real world, many complex, interrelated events are all occuring independently at the same time. Parallel computing gives us a much better model to simulate and understand real world phenomenon.'},
            {text: "Scroll down to see an animation of locking and why it's important. The orange square represents data and the black circles represent parallel processes."},
            {text: "In this case, 2 parallel processes attempt to alter the same data at once. This can cause serious problems."},
            {text: "One solution to this problem is locking, which prevents additional processes from accesing data until the first process has finished."},
            {text: "Now that the first process has finished, the second process can now alter the data."},
            {text:'Problems arise when two parallel processes attempt to alter the same data. The output can be different than expected when parallel processes happen at the same time.'},
            {text:'One solution to this problem is locking, which prevents additional processes from accesing data until the first process has finished.'},
            {text:'One solution to this problem is locking, which prevents additional processes from accesing data until the first process has finished.'},
            {text:'Created by Kenneth Neaville, Jason Ho, Omar Rojas, and Sophie Zeng for Informatics 474 Spring 2016.'},
        ];

        // Desired section height
        // todo decide how tall sections should be and what header we want before charts start appearing
        $scope.sectionHeight = 600;
        $scope.headerHeight = 1400;
    })

    // Scroll directive
    .directive("scroll", function($window) {
        return {
            restrict:'E', // this directive is specified as an html element <scroll>
            scope:false, // use global scope
            // Create a link function that allows dynamic element creation
            link:function(scope, elem) {
                angular.element($window).bind("scroll", function() {
                    scope.step = Math.ceil((this.pageYOffset - scope.headerHeight) / scope.sectionHeight);
                    if(scope.step < 0) {
                        scope.step = 0;
                    } else if (scope.step > scope.sectionText.length - 1) {
                        scope.step = scope.sectionText.length - 1;
                    }
                    scope.$apply();
                });
            }
        };
    })

    // Create a directive 'scatter' that creates scatterplots
    .directive('charts', function($filter, $compile) {
        // Return your directive element
        return {
            restrict:'E', // this directive is specified as an html element <scatter>
            scope:false,
            // Create a link function that allows dynamic element creation
            link:function(scope,elem,attrs){
                // Use the scope.$watch method to watch for changes to the step, then re-draw your chart
                scope.$watch('step', function() {
                    var chart = null;
                    var data = null;

                    // todo cases for all chart types
                    // switch chart type depending on step, also apply any specific properties we need to
                    // you set the data inside the case for your chart. It can be set to anything, doesn't have to be from the data array
                    console.log(scope.step);
                    switch(scope.chartParams[scope.step].chart) {
                        case 'lockingAnim':
                            var initStep = 5
                            switch(scope.step) {
                                case initStep:
                                    scope.animData.circle1[0].prePosition = scope.animData.circle1[0].position;
                                    scope.animData.circle2[0].prePosition = scope.animData.circle2[0].position;
                                    scope.animData.square[0].prePosition = scope.animData.square[0].position;
                                    scope.animData.circle1[0].position = 150;
                                     scope.animData.circle1[0].circRad = 20;
                                    scope.animData.circle2[0].position = 400;
                                    scope.animData.square[0].position = 250;
                                    scope.animData.square[0].colorSquare = 'orange';
                                    break;
                                case initStep + 1:
                                    scope.animData.circle1[0].prePosition = 150;
                                    scope.animData.circle2[0].prePosition = 400;
                                    scope.animData.square[0].prePosition = 250;
                                    scope.animData.circle1[0].position = 240;
                                     scope.animData.circle1[0].circRad = 20;
                                    scope.animData.circle2[0].position = 310;
                                    scope.animData.square[0].position = 250;
                                    scope.animData.square[0].colorSquare = 'red';
                                    break;
                                case initStep + 2:
                                    scope.animData.circle1[0].prePosition = 150;
                                    scope.animData.circle2[0].prePosition = 400;
                                    scope.animData.square[0].prePosition = 250;
                                    scope.animData.circle1[0].position = 240;
                                     scope.animData.circle1[0].circRad = 20;
                                    scope.animData.circle2[0].position = 350;
                                    scope.animData.square[0].position = 250;
                                    scope.animData.square[0].colorSquare = 'green';
                                    break;
                                case initStep + 3:
                                    scope.animData.circle1[0].prePosition = scope.animData.circle1[0].position;
                                    scope.animData.circle2[0].prePosition = scope.animData.circle2[0].position;
                                    scope.animData.square[0].prePosition = scope.animData.square[0].position;
                                    scope.animData.circle1[0].circRad = 0;
                                    scope.animData.circle2[0].position = 310;
                                    scope.animData.square[0].position = 250;
                                    scope.animData.square[0].colorSquare = 'green';
                                    break;
                                default:
                                    break;
                            }
                            data = scope.animData;
                            chart = LockingAnim();
                            break;
                        case 'empty':
                            data = [];
                            chart = EmptyChart();
                            break;
                        case 'tree':
                            
                        default:
                            // this should never happen. Something went terribly wrong if this ran
                    }

                    // Wrapper element to put your svg (chart) in
                    wrapper = d3.select(elem[0])
                        .datum(data)
                        .call(chart);
                });
            }
        };
    });
