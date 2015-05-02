(function () {
    var erpNavbar = angular.module('ErpNavbar', []);

    erpNavbar.directive('erpNavbar', function () {

        var companyName = { firstName: 'Open', lastName: 'ERP', show: true };

        var user = { userName: 'SuebDo', show: true };

        var mainMenu = [
            { name: 'Products', href: 'Products', show: true },
            { name: 'Payments', href: 'Payments', show: true },
            { name: 'Receipt', href: 'Receipt', show: true },
        ];

        var menuTable = [
            { name: 'N°201', href: 'N201', data: '2012 €', show: true },
            { name: 'N°202', href: 'N202', data: 'Empty', show: true },
            { name: 'N°204', href: 'N204', data: '756 €', show: true },
        ];

        var search = { 'placeholder': 'Search', show: true };

        var addButton = { name: '+', show: true };

        var clearButton = { name: 'X', show: true };

        var logout = { name: 'Logout', show: true };

        return {
            restrict: 'E',
            templateUrl: '../../../views/navbar.html',

            controller: ['$http', '$scope', function ($http, $scope) {
                $scope.companyName = companyName;
                $scope.user = user;
                $scope.mainMenu = mainMenu;
                $scope.menuTable = menuTable;
                $scope.search = search;
                $scope.addButton = addButton;
                $scope.clearButton = clearButton;
                $scope.logout = logout;
            }]
        }
    });
})();

