var app = angular.module("RoutingApp", ['ngRoute']);

function myapifilms(response) {
    alert(response);
}
app.controller("RoutingController",
    function ($scope, $http) {
        $scope.hello = "Hello from routing controller";
        console.log($scope.hello);
    });

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        }).
        when('/profile', {
            templateUrl: 'partials/profile.html',
        }).
          when('/details', {
              templateUrl: 'partials/details.html',
          }).
        otherwise({
            redirectTo: '/home'
        });
  }]);

app.controller("HomeCtrl", function ($scope, $http, MovieService) {

    $scope.searchMovies = function () {
        MovieService.searchMovies($scope.searchByTitle, function (response) {
            $scope.movies = response;
        });
        }
    
    $scope.addToFavorites = function () {
        MovieService.addToFavorites($scope.movie);
    }


    $scope.addMovie = function () {
        var newmovie = {
            title: $scope.movie.title,
            year: $scope.movie.year,
            plot: $scope.movie.plot,
        };
        $scope.movies.push(newmovie);

    }

    $scope.removeMovie = function (movie) {
        var index = $scope.movies.indexOf(movie);

        $scope.movies.splice(index, 1);
    }

    });