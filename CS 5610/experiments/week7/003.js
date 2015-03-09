var app = angular.module("CourseApp", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/home', {
          templateUrl: 'ngRouting/home.html',
      }).
        when('/profile/:email', {
            templateUrl: 'ngRouting/003profile.html',
            controller: 'ProfileController'
        }).
         when('/contact', {
             templateUrl: 'ngRouting/contact.html',
         }).
      otherwise({
          redirectTo: '/home'
      });
}]);

app.controller("ProfileController", function ($scope, UserService, $routeParams, CourseService) {
    var email = $routeParams.email;
    $scope.currentuser = UserService.getcurrentuser();
    $scope.email = email;
    if ($scope.currentuser.role == "faculty") {
        $scope.authoring = CourseService.getcouseByIndices($scope.currentuser.authoring);
        $scope.teaching = CourseService.getcouseByIndices($scope.currentuser.teaching);

    }
    else if ($scope.currentuser.role == "student") {
        $scope.registered = CourseService.getcouseByIndices($scope.currentuser.registered);
        $scope.newCourses = CourseService.getcouseByIndices($scope.currentuser.newCourses);
    }

    $scope.removeCourse = function (list, index) {

        CourseService.removeCourseByIndex(list, index);

    };

    $scope.addCourse = function (registered, newcourses, index) {
        if ($scope.currentuser.role == "student") {
            $scope.currentuser.registered = CourseService.addcourse(registered, newcourses, index);
            $scope.currentuser.newCourses = CourseService.removeCourseByIndex(newcourses, index);
        }
    }
});

app.controller("NavController", function ($scope, UserService) {
    $scope.currentuser = null;
    $scope.logout = function () {
        $scope.currentuser = null;
        UserService.logout;
        $scope.email = null;
        $scope.password = null;
    }
    $scope.login = function () {
        var email = $scope.email;
        var password = $scope.password;
        $scope.currentuser = UserService.login(email, password);
    }
});

app.factory("CourseService", function () {
    var courses = [
               { title: "Java" },
               { title: "Data Mining" },
               { title: "Web Development" },
               { title: "Algorithms" },
               { title: "PDP" },
               { title: "Map Reduce" },
               { title: "Databases" }
    ];

    var addcourse = function (courselist, newcourses, index) {
        return courselist.push(newcourses[index]);
    }

    var getcouseByIndex = function (index) {
        return courses[index];
    }

    var getcouseByIndices = function (indices) {
        var responsecourses = [];
        for (var i in indices) {
            var course = courses[indices[i]];
            responsecourses.push(course);
        }
        return responsecourses;
    }

    var removeCourseByIndex = function (indices, index) {

        return indices.splice(index, 1);
    }

   

    return {
        addcourse: addcourse,
        getcourseByIndex: getcouseByIndex,
        getcouseByIndices: getcouseByIndices,
        removeCourseByIndex: removeCourseByIndex
    }
})

app.factory("UserService", function () {
    var currentuser = null;
    var users = [
        { email: "admin@xyz.com", password: "admin", role: "admin" },
        { email: "student@xyz.com", password: "student", role: "student", registered: [2, 3, 4], newCourses: [1,5] },
        { email: "faculty@xyz.com", password: "faculty", role: "faculty", authoring: [1, 2, 3], teaching: [3, 4, 5] }
    ];



    var login = function (email, password) {
        for (var u in users) {
            if (users[u].email == email && users[u].password == password) {
                currentuser = users[u];
                return users[u];
            }
        }
        return null;

    };

    var getcurrentuser = function () {
        return currentuser;
    }

    var logout = function () {
        currentuser = null;
    }
    return {
        login: login,
        logout: logout,
        getcurrentuser: getcurrentuser
    };
});