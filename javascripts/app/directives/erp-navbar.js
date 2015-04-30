(function () {
    var erpNavbar = angular.module('ErpNavbar', []);

    erpNavbar.directive('erpNavbar', function () {
        var mainMenu = [
            { 'name': 'Products', 'href': 'Products', show: true },
            { 'name': 'Payments', 'href': 'Payments', show: true },
            { 'name': 'Receipt', 'href': 'Receipt', show: true },
        ];

        var menuTable = [
            { 'name': 'N°201', 'href': 'N201', 'data': '2012 €', href: '/', show: true },
            { 'name': 'N°202', 'href': 'N202', 'data': 'Empty', href: '/', show: true },
            { 'name': 'N°204', 'href': 'N204', 'data': '756 €', href: '/', show: true },
        ];

        var user = {
            'userName': 'ScoobyDoo',
        }

        return {
            restrict: 'E',
            templateUrl: '../../../views/navbar.html',
            controller: ['$http', '$scope', function ($http, $scope) {
                $scope.mainMenu = mainMenu;
                $scope.menuTable = menuTable;
                $scope.user = user;
            }]
        }
    });
})();

