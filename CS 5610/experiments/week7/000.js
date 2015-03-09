var app = angular.module("CourseApp", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/home', {
          templateUrl: 'ngRouting/home.html',
      }).
        when('/profile', {
            templateUrl: 'ngRouting/profile.html',
        }).
         when('/contact', {
             templateUrl: 'ngRouting/contact.html',
         }).
      otherwise({
          redirectTo: '/home'
      });
}]);

app.controller("NavController", function ($scope, UserService) {
    $scope.currentuser = null;
    $scope.login = function () {
        var email = $scope.email;
        var password = $scope.password;
        $scope.currentuser = UserService.login(email, password);
    }
});

app.factory("UserService", function () {
    var currentuser = null;
    var users = [
        { email: "admin@xyz.com", password: "admin"},
        { email: "student@xyz.com", password: "student" },
        { email: "faculty@xyz.com", password: "faculty" }
    ]
    var login = function (email, password) {
        for (var u in users) {
            if (users[u].email == email && users[u].password == password) {
                currentuser = users[u];
                return users[u];
            }
        }
        return null;

    };

    var getcurrentuser = function()
    {
        return currentuser;
    }
    return {
        login: login,
        getcurrentuser: getcurrentuser
    };
});