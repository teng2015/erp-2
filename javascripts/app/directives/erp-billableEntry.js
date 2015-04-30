(function () {
    var erpBillableEntry = angular.module('ErpBillableEntry', []);

    erpBillableEntry.directive('erpBillableEntry', function () {
        var bill = [
            { 'name': 'Oreo Choco', 'discount': '20%', 'quantity': '10', 'price': '2,50', href: '/', show: true },
            { 'name': 'Oreo White', 'discount': '20%', 'quantity': '5', 'price': '2,50', href: '/', show: true },
            { 'name': 'Coke', 'discount': '', 'quantity': '10', 'price': '1,00', href: '/', show: true },
            { 'name': 'Coke Light', 'discount': '', 'quantity': '10', 'price': '1,00', href: '/', show: true },
            { 'name': 'Coke Zero', 'discount': '', 'quantity': '10', 'price': '1,00', href: '/', show: true },
            { 'name': 'Fanta', 'discount': '10%', 'quantity': '5', 'price': '1,00', href: '/', show: true },
            { 'name': 'Pringles Salt', 'discount': '', 'quantity': '3', 'price': '1,50', href: '/', show: true },
            { 'name': 'Pringles Paprika', 'discount': '', 'quantity': '3', 'price': '1,50', href: '/', show: true },
        ];

        var billHeader = {
            'name': 'Name',
            'discount': 'Discount',
            'quantity': 'Quantity',
            'price': 'Price'
        };

        var sort = {
            'column': '',
            'descending': false
        }

        return {
            restrict: 'E',
            templateUrl: '../../../views/billableEntry.html',
            controller: ['$http', '$scope', function ($http, $scope) {
                $scope.bill = bill;
                $scope.billHeader = billHeader;
                $scope.sort = sort;

                $scope.sortNow = function (column) {
                    var sort = $scope.sort;

                    if (sort.column == column) {
                        sort.descending = !sort.descending;
                    } else {
                        sort.column = column;
                        sort.descending = false;
                    }
                };
            }]
        }
    });
})();

