(function () {
    var erpNavbar = angular.module('navbar', []);

    erpNavbar.directive('navbar', function () {
        var menu1 = [
            { 'name': 'Products', href: '/', show: true },
            { 'name': 'Payments', href: '/', show: true },
            { 'name': 'Receipt', href: '/', show: true },
        ];

        var menu2 = [
            { 'name': 'N°201', 'data': '2012 €', href: '/', show: true },
            { 'name': 'N°202', 'data': 'Empty', href: '/', show: true },
            { 'name': 'N°204', 'data': '756 €', href: '/', show: true },
        ];

        return {
            restrict: 'E',
            templateUrl: '../../../Views/navbar.html',
            controller: ['$http', '$scope', function ($http, $scope) {
                $scope.menu1 = menu1;
                $scope.menu2 = menu2;
            }]
        }
    });
})();

