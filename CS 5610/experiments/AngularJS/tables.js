var app = angular.module("Books", []);

app.controller("customersController", function ($scope) {
    $scope.books = [
    { "title": 'A tale of two cities', "author": 'Charles Darwin' },
    { "title": 'To kill a Mocking bird', "author": 'Harper Lee' },
    { "title": 'The Fountainhead', "author": 'Ayn Rand' },
    { "title": 'Catch 22', "author": 'Joseph Heller' }];


    $scope.filterFunction = function (element) {

        return element.title.match(/^Ma/) ? true : false;

    };
});