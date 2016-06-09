/**
 * Created by Jason on 06/02/16.
 */

// based on module 15 example

var app = angular.module('app', [])

// Main controller
    .controller('Controller', function($scope) {

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

        $scope.chartParams = [
            {chart: 'empty'},
            {chart: 'lockingAnim'},
            {chart: 'lockingAnim'},
            {chart: 'lockingAnim'},
            {chart: 'lockingAnim'},
            {chart: 'lockingAnim'},
            {chart: 'lockingAnim'},
            {chart: 'lockingAnim'},
            {chart: 'empty'}
        ];

        $scope.step = 0;

        $scope.sectionText = [
            {text:'Divide and Conquer is an algorithm design paradigm based on multi-branched recursion. A divide and conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.'},
            {id: 'raceLock', head:'Data Races & Locking', cla:'leftLock', text:"A data race occurs when: two or more threads in a single process access the same memory location concurrently. Here we will illustrate this occurence. Scroll down to see an animation of locking and why it's important. The orange square represents data and the black circles represent parallel processes."},
            {cla:'leftLock', text: "Problems arise when two parallel processes attempt to alter the same data at once. The output can be different than expected when parallel processes happen out of the expected order. This can cause serious problems, such as data corruption."},
            {cla:'leftLock', text: "One solution to this problem is locking, which prevents additional processes from accesing data until the first process has finished."},
            {cla:'leftLock', text: "Now that the first process has finished, the second process can now alter the data."},
            {divId:'why', id: 'important', head: 'Why is this important?', text:'Many companies are investing millions into expanding their large-scale parallel computing capabilities.'},
            {text:""}
        ];
        // Desired section height
        // todo decide how tall sections should be and what header we want before charts start appearing
        $scope.sectionHeight = 400;
        $scope.headerHeight = 2800;
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
                    switch(scope.chartParams[scope.step].chart) {
                        case 'lockingAnim':
                            var initStep = 1
                            switch(scope.step) {
                                case initStep:
                                    scope.animData.circle1[0].prePosition = scope.animData.circle1[0].position;
                                    scope.animData.circle2[0].prePosition = scope.animData.circle2[0].position;
                                    scope.animData.square[0].prePosition = scope.animData.square[0].position;
                                    scope.animData.circle1[0].position = 150;
                                     scope.animData.circle1[0].circRad = 20;
                                    scope.animData.circle2[0].position = 400;
                                    scope.animData.square[0].position = 250;
                                    scope.animData.square[0].opac = 1.0;
                                    scope.animData.circle1[0].opac = 1.0;
                                    scope.animData.circle2[0].opac = 1.0;
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
                                    scope.animData.square[0].opac = 1.0;
                                    scope.animData.circle1[0].opac = 1.0;
                                    scope.animData.circle2[0].opac = 1.0;
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
                                    scope.animData.square[0].opac = 1.0;
                                    scope.animData.circle1[0].opac = 1.0;
                                    scope.animData.circle2[0].opac = 1.0;
                                    scope.animData.square[0].colorSquare = 'green';
                                    break;
                                case initStep + 3:
                                    scope.animData.circle1[0].prePosition = scope.animData.circle1[0].position;
                                    scope.animData.circle2[0].prePosition = scope.animData.circle2[0].position;
                                    scope.animData.square[0].prePosition = scope.animData.square[0].position;
                                    scope.animData.circle1[0].circRad = 0;
                                    scope.animData.circle2[0].position = 310;
                                    scope.animData.square[0].position = 250;
                                    scope.animData.square[0].opac = 1.0;
                                    scope.animData.circle1[0].opac = 1.0;
                                    scope.animData.circle2[0].opac = 1.0;
                                    scope.animData.square[0].colorSquare = 'green';
                                    break;
                                case initStep + 4:
                                    scope.animData.circle1[0].prePosition = scope.animData.circle1[0].position;
                                    scope.animData.circle2[0].prePosition = scope.animData.circle2[0].position;
                                    scope.animData.square[0].prePosition = scope.animData.square[0].position;
                                    scope.animData.circle1[0].circRad = 0;
                                    scope.animData.circle2[0].position = 310;
                                    scope.animData.square[0].position = 250;
                                    scope.animData.square[0].opac = 0;
                                    scope.animData.circle1[0].opac = 0;
                                    scope.animData.circle2[0].opac = 0;
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
