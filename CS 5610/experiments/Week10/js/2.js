var app = angular.module("CarsApp", ["ngRoute"]);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.years = [];
    $scope.models = [];
    $scope.fetchMakes = function () {
        $scope.years = [];
        $http.get("http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
       .success(function (response) {
           $scope.makes = response.makes;
           console.log(response);
       });
    };

    $scope.makeName = '';
    $scope.fetchModels = function (make) {
        $scope.makeName = make;
        $scope.years = [];
        console.log($scope.makeName);
        console.log(make);
        $http.get("http://api.edmunds.com/api/vehicle/v2/" + make + "/models?fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
        .success(function (response) {
            console.log(response.models);
            $scope.models = response.models;
        });
    };

    $scope.fetchYears = function (model, make) {
        $http.get("http://api.edmunds.com/api/vehicle/v2/" + make + "/" + model + "/years?fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
        .success(function (response) {
            console.log(response.years);
            $scope.years = response.years;
        });
    };
}]);
