(function () {
    var erpBillingOptions = angular.module('ErpBillingOptions', []);

    erpBillingOptions.directive('erpBillingOptions', function () {
        var billingOptions = [
            { name: 'Proton', href: '/', show: true },
            { name: 'Bancontact', href: '/', show: true },
            { name: 'Cash', href: '/', show: true },
            { name: 'Cheque', href: '/', show: true },
            { name: 'Other Method', href: '/', show: true },
        ];

        return {
            restrict: 'E',
            templateUrl: '../../../views/billingOptions.html',
            controller: ['$http', '$scope', function ($http, $scope) {
                $scope.billingOptions = billingOptions;
            }]
        }
    });
})();

