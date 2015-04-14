var app = angular.module("CarsApp", ["ngRoute"]);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.years = [];
    $scope.models = [];
    $scope.makes = [];
    $scope.fetchMakes = function () {
        $scope.years = [];
        $scope.models = [];
        $http.get("http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
       .success(function (response) {
           $scope.makes = response.makes;
           console.log(response);
       });
    };
}]);