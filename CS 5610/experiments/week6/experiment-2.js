var app = angular.module("MoviesApp", []);

app.controller("MoviesController",
    function ($scope, $http) {


    var movies = [
        { title: "Avatar", year: 2009, plot: "Some cool blue guys" },
    {title:"starr wars", year: 2013, plot: "Some cool wars guys"},
    {title:"star trek", year: 20010, plot: "Some cool star trek guys"},
    ];
    $scope.movies = movies;

    $scope.removeMovie = function (movie)
    {
        var index = $scope.movies.indexOf(movie);
        
        $scope.movies.splice(index, 1);
    }

    $scope.addMovie = function ()
    {
        var newmovie = {
            title: $scope.movie.title,
            year: $scope.movie.year,
            plot: $scope.movie.plot,
        };
        $scope.movies.push(newmovie);

    }

    $scope.selectMovie = function(movie)
    {
        var index = $scope.movies.indexOf(movie);
        $scope.movie = movie;
    }

    $scope.updateMovie = function()
    {
        alert($scope.movie.title);
    }
});