(function () {
    var erpNumpadOptions = angular.module('ErpNumpadOptions', []);

    erpNumpadOptions.directive('erpNumpadOptions', function () {
        var numpadOptions = {
            zero: '0',
            one: '1',
            two: '2',
            three: '3',
            four: '4',
            five: '5',
            six: '6',
            seven: '7',
            eight: '8',
            nine: '9',
            quantity: 'Qty.',
            discount: 'Disc.',
            price: 'Price',
            operations: '+/-',
            comma: ',',
            clear: 'C',
            delete: 'Delete',
            backspace: 'glyphicon glyphicon-arrow-left',
            note: 'Note',
            class: 'text-center font-bold col-lg-3',
            show: true,
        };

        return {
            restrict: 'E',
            templateUrl: '../../../views/numpadOptions.html',
            controller: ['$http', '$scope', function ($http, $scope) {
                $scope.numpadOptions = numpadOptions;
            }]
        }
    });
})();

