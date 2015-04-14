var app = angular.module("CarsApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'partials/home.html'
    })
        .when('/make/model/year', {
            templateUrl: 'partials/selectedNewCarStyle.html',
            controller: 'selectedNewCarStyleCtrl'
        })
     .when('/myCarousel', {
         templateUrl: 'partials/selectedNewCarStyle.html',
         controller: 'MediaCtrl'
     })
    .otherwise({
        redirectTo: '/home'
    });
});

var res = $.get("http://ipinfo.io", function (response) {
    console.log(response.postal);
}, "json");

app.controller('MainCtrl', function ($scope, $http, $rootScope) {
    $scope.postal = '';
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

    $rootScope.selectedMake=[];
    $scope.fetchModels = function (make) {
        $rootScope.selectedMake = make;
        $scope.years = [];
        $http.get("http://api.edmunds.com/api/vehicle/v2/" + make.name + "/models?fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
        .success(function (response) {
            console.log(response.models);
            $rootScope.post = res.responseJSON.postal;
            $scope.models = response.models;
        });
    };

    $rootScope.selectedModel = [];
    $scope.fetchYears = function (model, make) {
        $rootScope.selectedModel = model;
        $http.get("http://api.edmunds.com/api/vehicle/v2/" + make.name + "/" + model.name + "/years?fmt=json&state=new&api_key=chfytaj2vn952t8hy2y6qtb5")
        .success(function (response) {
            console.log(response.years);
            $scope.years = response.years;
        });
    };


    $scope.inventories = [];
    $scope.getInventory = function () {
        $http.get("https://api.edmunds.com/api/media/v2/honda/civic/2013/photos?api_key=chfytaj2vn952t8hy2y6qtb5")
        .success(function (response) {
            console.log(response);
        });
    };

    $scope.styles = [];
    $scope.fetchStyles = function (year) {
        $rootScope.selectedYear = year;
        $http.get('https://api.edmunds.com/api/vehicle/v2/' + $rootScope.selectedMake.name + '/' + $rootScope.selectedModel.name + '/' + year.year + '/styles?fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5')
        .success(function (response) {
            $scope.styles = response.styles;
            
            console.log(response.styles);
        })
    };

    
    $scope.getDefaultConfiguration = function (style) {
        $rootScope.selectedStyle = style;
        $http.get("https://api.edmunds.com/v1/api/configurator/default?zip=" + $scope.post + "&styleid=" + style.id + "&fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
        .success(function (response) {
            console.log(response);
        });
    };

    $scope.getConfigurationOptions = function (style) {
        $http.get("https://api.edmunds.com/v1/api/configurator/withOptions?zip=" + $scope.post + "&styleid=" + style.id + "&selected={option ID}&fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
    };

    $rootScope.media = [];
    $scope.trueMarketValue = function (style) {
        $rootScope.selectedStyle = style;
        $rootScope.priceClicked = true;
        $http.get("https://api.edmunds.com/v1/api/tmv/tmvservice/calculatenewtmv?styleid=" + style.id + "&zip=" + $rootScope.post + "&fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
        .success(function (response) {
            console.log($rootScope.selectedStyle);
            $rootScope.tmv = response.tmv;

        });
        $http.get("http://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId=" + $rootScope.selectedStyle.id + "&fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
        .success(function (response) {
            $rootScope.first = "http://media.ed.edmunds-media.com" + response[0].photoSrcs[0];
            for (var i in response[1].photoSrcs) { 
                $rootScope.media[i] = "http://media.ed.edmunds-media.com" + response[i].photoSrcs[0];
                console.log($rootScope.media[i]);
            };
        });
    };

});

