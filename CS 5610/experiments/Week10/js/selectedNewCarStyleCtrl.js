var res = $.get("http://ipinfo.io", function (response) {
}, "json");


app.controller("selectedNewCarStyleCtrl", function ($scope, $http, $rootScope, $location, $routeParams) {


    $scope.trueMarket = function () {
        $rootScope.priceClicked = true;
        $rootScope.reviewClicked = false;
        $scope.consumerReviewClicked = false;
        $scope.editorial = [];
        $scope.reviews = [];
        $scope.consumerReviews = [];
        
        $http.get("https://api.edmunds.com/v1/api/tmv/tmvservice/calculatenewtmv?styleid=" + $rootScope.selectedStyle.id + "&zip=" + $rootScope.post + "&fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
        .success(function (response) {
            $rootScope.tmv = response.tmv;
            console.log($rootScope.tmv);

        });
    };

    $scope.getReviews = function () {
        $rootScope.priceClicked = false;
        $rootScope.reviewClicked = true;
        $scope.consumerReviewClicked = false;
        $rootScope.tmv = [];
        $scope.consumerReviews = [];
        $http.get("https://api.edmunds.com/v1/content/editorreviews?make=" + $rootScope.selectedMake.name + "&model=" + $rootScope.selectedModel.name + "&year=" + $rootScope.selectedYear.year + "&fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
        .success(function (response) {
            console.log(response);

            $scope.editorial = {
                introduction: jQuery(response.editorial.introduction),
                pros: jQuery(response.editorial.pro).text(),
                con: jQuery(response.editorial.con).text(),
                edmundSays: jQuery(response.editorial.edmundsSays).text(),
                safety: jQuery(response.editorial.safety).text(),
                powerTrain: jQuery(response.editorial.powertrain).text(),
                whatsNew: jQuery(response.editorial.whatsNew).text(),
                video: response.editorial.walkaroundVideoId
            };
        });
        
    };

    $scope.getConsumerReviews = function () {
        $scope.consumerReviewClicked = true;
        $rootScope.reviewClicked = false;
        $rootScope.priceClicked = false;
        $rootScope.tmv = [];
       
        $http.get("https://api.edmunds.com/api/vehiclereviews/v2/styles/" + $rootScope.selectedStyle.id + "?fmt=json&api_key=chfytaj2vn952t8hy2y6qtb5")
        .success(function (response) {
            console.log(response);
            $scope.consumerReviews = response;
        })
    };  
});

app.controller("MediaCtrl", function ($scope, $http) { });



   