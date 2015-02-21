var app = angular.module("MyApp", [])

app.controller("myController", function ($scope) {
    $scope.count = 0;
    $scope.click = function () {
        alert("button clicked");
    }
});


