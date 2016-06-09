var myApp = angular.module('myApp', [])

// Main controller
.controller('MainController', function($scope) {
    // Data for the chart (top-bottom)
    $scope.data = [
    {   
        "name": "0",
        "text" : "Problem",
        "text2" : "[1, 2, 4, 6, 7, 9, 14, 15]"
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
    
    $scope.chartParams = [
        {chart: 'tree'}
    ];
    
    $scope.step = 0;
    
    $scope.sectionText = [
    {text:'Divide and Conquer is an algorithm design paradigm based on multi-branched recursion. A divide and conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.'},
    ];
    
    $scope.sectionHeight = 600;
    $scope.headerHeight = 1400;

})

    // Create a directive 'scatter' that creates scatterplots
    .directive('treeChart', function() {
        // Return your directive element
        return {
            restrict: 'E', // this directive is specified as an html element <scatter>
            scope: false,
            link:function(scope,elem,attrs){
                // Use the scope.$watch method to watch for changes to the step, then re-draw your chart
                scope.$watch('step', function() {
            
                    console.log("step: " + scope.step);
                    switch(scope.chartParams[scope.step].chart) {
 
                        case 'tree':
                            
                        // default:
                        //     // this should never happen. Something went terribly wrong if this ran
                    }
    
                    chart.datum(scope.data)
                        .call(myChart);
                });
            }
        };
    });
