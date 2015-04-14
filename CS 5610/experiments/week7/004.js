var app = angular.module("StarApp", ['ngRoute' , 'ui.bootstrap']);

app.directive('rate', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
        '<li ng-repeat="star in stars" ng-class="star">' +
        '\u2605' +
        '</li>' +
        '</ul>',
        scope: {
            ratingValue: '=',
            max: '='
        },
        link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.ratingValue
                });
            }
        }
    }
});


app.controller("MainCtrl", function ($scope, $http) {
    $scope.rate1 = '1';
    $scope.rate2 = '3';
    $scope.rate3= '5';
})