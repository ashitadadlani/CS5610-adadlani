var app = angular.module("addRemove", []);

app.controller("BookMgmt", ['$scope', '$http', function ($scope, $http) {
    $scope.books = [
                        {
                            'title': 'Catch 22',
                            'author': 'Joseph Heller',
                            'rating': 8
                        },
                            {
                                'title': 'The Fountainhead',
                                'author': 'Ayn Rand',
                                'rating': 9
                            },
                                {
                                    'title': 'To kill a mocking bird',
                                    'author': 'Harper Lee',
                                    'rating': 9.7
                                },
                                    
    ];


    $scope.addRow = function () {
        $scope.books.push({ 'title': $scope.title, 'author': $scope.author, 'rating': $scope.rating });
        $scope.title = '';
        $scope.author = '';
        $scope.rating = '';
    };
    $scope.removeRow = function (book) {
        var index = -1;
        var bookArr = eval($scope.books);
        for (var i = 0; i < bookArr.length; i++) {
            if (bookArr[i].title === book) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("Something gone wrong");
        }
        $scope.books.splice(index, 1);
    };


}]);