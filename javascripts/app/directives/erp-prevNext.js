(function () {
    var erpPrevNext = angular.module('ErpPrevNext', []);

    var navigatePN = {
        previous: 'Previous',
        next: 'Next',
        previousClass: 'glyphicon glyphicon-chevron-left margin-left-sm',
        nextClass: 'glyphicon glyphicon-chevron-right margin-left-sm',
        show: true
    };

    erpPrevNext.directive('erpPrevNext', function () {
        return {
            restrict: 'E',
            templateUrl: '../../../views/prevNext.html',
            controller: ['$http', '$scope', function ($http, $scope) {
                $scope.navigatePN = navigatePN;
            }]
        }
    });
})();

