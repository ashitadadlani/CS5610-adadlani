var app = angular.module("CarsApp", ['ngRoute', 'ui.bootstrap']);

app.controller("MainCtrl", function ($scope, $rootScope, $http) {

    $scope.media = [
        "../../../../images/MyImages/sampleimage.png",
        "../../../../images/MyImages/sampleimage2.jpg",
        "../../../../images/MyImages/sampleimage3.gif",
        "../../../../images/MyImages/careerfair.jpg",
        "../../../../images/MyImages/carimage.jpg",
        "../../../../images/MyImages/wallpaper.jpeg",
        ];

    $scope.myInterval = 5000;
    $scope.contents = [];
    $scope.add = function () {
        $scope.newContentToAdd = true;
    };

    $scope.submitContent = function (content) {
        var newContent = { text: content.text };

        $scope.contents.push(newContent.text);
       
        $scope.newContentToAdd = false;
    };

    $scope.cancelContent = function () {
        $scope.newContentToAdd = false;
    }

});

app.controller("carousel", function ($scope) {

})