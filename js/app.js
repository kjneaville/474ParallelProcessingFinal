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
            {color:'red', fontSize:20, filter:function(d){return d}},
            {color:'blue', fontSize:10, filter:function(d){return d.id>2}},
            {color:'orange', fontSize:100, filter:function(d){return d.id<3}},
            {color:'green', fontSize:30, filter:function(d){return d}}
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
        // todo decide how tall sections should be
        $scope.sectionHeight = 400;
    })

    // Scroll directive
    .directive("scroll", function($window) {
        return {
            restrict:'E', // this directive is specified as an html element <scroll>
            scope:false, // use global scope
            // Create a link function that allows dynamic element creation
            link:function(scope, elem) {
                elem.bind("scroll", function() {
                    scope.step = Math.ceil((this.scrollTop - 10)/ scope.sectionHeight);
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

                    // switch chart type depending on step, also apply any specific properties we need to
                    switch(scope.settings[scope.step].chartParams) {
                        case 'blah':
                            var color = scope.settings[scope.step].color;
                            var fontSize = scope.settings[scope.step].fontSize;
                            var myChart = ParagraphChart().color(color).fontSize(fontSize);
                            break;
                        default:
                            // this should never happen. Something went terribly wrong if this ran
                    }


                    // Get the current data
                    var data = scope.data.filter(scope.settings[scope.step].filter);

                    // Wrapper element to put your svg (chart) in
                    wrapper = d3.select(elem[0])
                        .datum(data)
                        .call(chart);
                });
            }
        };
    });
