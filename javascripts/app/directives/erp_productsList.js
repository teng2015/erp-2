(function () {
    var erpProductsList = angular.module('ErpProductsList', []);

    erpProductsList.directive('erpProductsList', function () {
        var products = [
            { name: 'Perrier', price: '2,50', href: '/', show: true },
            { name: 'Evian', price: '2,50', href: '/', show: true },
            { name: 'Aquarel', price: '1,00', href: '/', show: true },
            { name: 'Vitalinea Frizzy', price: '1,00', href: '/', show: true },
            { name: 'Vittel', price: '1,00', href: '/', show: true },
            { name: 'Coke Zero', price: '1,00', href: '/', show: true },
            { name: 'Coke Light', price: '1,50', href: '/', show: true },
            { name: 'Fanta', price: '1,50', href: '/', show: true },
            { name: 'Sprite', price: '1,50', href: '/', show: true },
            { name: 'Schweppes',price: '1,50', href: '/', show: true },
            { name: 'Canada', price: '1,50', href: '/', show: true },
            { name: 'Aquarius', price: '1,50', href: '/', show: true },
            { name: 'Perrier', price: '1,50', href: '/', show: true },
            { name: 'Nalu', price: '1,50', href: '/', show: true },
            { name: 'Nestea', price: '1,50', href: '/', show: true },
            { name: 'Minute Maid orange', price: '1,50', href: '/', show: true },
            { name: 'Cocoa', price: '1,50', href: '/', show: true },
            { name: 'Tea', price: '1,50', href: '/', show: true },
        ];

        return {
            restrict: 'E',
            templateUrl: '../../../views/productsList.html',
            controller: ['$http', '$scope', function ($http, $scope) {
                $scope.products = products;
            }]
        }
    });
})();

