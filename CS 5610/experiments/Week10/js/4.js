var app = angular.module("CarsApp", ['ngRoute']);

app.filter('offset', function () {
    return function (input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
});

app.controller('MainCtrl', function ($scope, $http, $rootScope) {
   
    $scope.items = [
        {name: "Item A", no: 1},
        {name: "Item B", no: 2},
        {name: "Item C", no: 3},
        {name: "Item D", no: 4},
        {name: "Item E", no: 5},
        {name: "Item F", no: 6},
        {name: "Item G", no: 7},
        {name: "Item H", no: 8},
        {name: "Item I", no: 9},
        {name: "Item J", no: 10},
        { name: "Item K", no: 11 }
    ];

    $scope.itemsPerPage = 5;
    $scope.currentPage = 0;

    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.prevPageDisabled = function () {
        return $scope.currentPage === 0 ? "disabled" : "";
    };

    $scope.pageCount = function () {
                
        return Math.ceil($scope.items.length / $scope.itemsPerPage) - 1;
    };
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
        }
    };

    $scope.nextPageDisabled = function () {
        return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    };

    $scope.setPage = function (n) {
        $scope.currentPage = n;
    };
        
       
});
