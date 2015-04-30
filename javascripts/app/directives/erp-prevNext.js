(function () {
    var erpPrevNext = angular.module('ErpPrevNext', []);

    erpPrevNext.directive('erpPrevNext', function () {
        return {
            restrict: 'E',
            templateUrl: '../../../views/prevNext.html',
            //controller: ['$http', '$scope', function ($http, $scope) {
            //}]
        }
    });
})();

