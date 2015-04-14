app.controller("selectedModelCtrl", function ($scope, $http, $rootScope) {

    $scope.itemsPerPage = 10;
    $scope.currentPage = 0;

    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.prevPageDisabled = function () {
        return $scope.currentPage === 0 ? "disabled" : "";
    };

    $scope.pageCount = function () {
        console.log(Math.ceil($scope.products.length / $scope.itemsPerPage) - 1);
        return Math.ceil($scope.products.length / $scope.itemsPerPage) - 1;
    };
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
        }
    };

    $scope.nextPageDisabled = function () {
        return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    };

    $scope.setPage = function (n) {
        $scope.currentPage = n;
    };

    
})