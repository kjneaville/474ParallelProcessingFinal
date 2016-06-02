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
            {id:0, text:'Paragraph 0'},
            {id:1, text:'Paragraph 1'},
            {id:2, text:'Paragraph 2'},
            {id:3, text:'Paragraph 3'}
        ];

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // todo parameters for the chart directive. This will tell the directive which chart to display and what properties that chart will have //
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $scope.chartParams = [
            {chart: 'example', color:'red', fontSize:20, filter:function(d){return d}},
            {chart: 'example', color:'blue', fontSize:10, filter:function(d){return d.id>2}},
            {chart: 'example', color:'orange', fontSize:100, filter:function(d){return d.id<3}},
            {chart: 'example', color:'green', fontSize:30, filter:function(d){return d}}
        ];

        $scope.step = 0;

        ///////////////////////////////////////////////////////////////////////
        // todo Text for each section, this is where descriptions should go. //
        ///////////////////////////////////////////////////////////////////////
        $scope.sectionText = [
            {text:'Section 0'},
            {text:'Section 1'},
            {text:'Section 2'},
            {text:'Section 3'}
        ];

        // Desired section height
        // todo decide how tall sections should be and what header we want before charts start appearing
        $scope.sectionHeight = 400;
        $scope.headerHeight = 0;
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

                    // switch chart type depending on step, also apply any specific properties we need to
                    switch(scope.chartParams[scope.step].chart) {
                        case 'example':
                            var color = scope.chartParams[scope.step].color;
                            var fontSize = scope.chartParams[scope.step].fontSize;
                            chart = ParagraphChart().color(color).fontSize(fontSize);
                            break;
                        default:
                            // this should never happen. Something went terribly wrong if this ran
                    }
                    
                    // todo data needs to change, not filter on what is already there.
                    // todo data will need to be an array indexed on step.
                    var data = scope.data.filter(scope.chartParams[scope.step].filter);

                    // Wrapper element to put your svg (chart) in
                    wrapper = d3.select(elem[0])
                        .datum(data)
                        .call(chart);
                });
            }
        };
    });
