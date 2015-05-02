﻿(function () {
    var erpProductsCategoryContainer = angular.module('ErpProductsCategoryContainer', []);

    var categories = [
        { name: 'All Products', href: '', show: true },
        { name: 'Beverages', href: '', show: true },
    ];

    var subCategories = [
       { name: 'Water', href: '', show: true },
       { name: 'Soda', href: '', show: true },
       { name: 'Juice', href: '', show: true },
       { name: 'Beer', href: '', show: true },
       { name: 'Wine', href: '', show: true },
       { name: 'Coffee', href: '', show: true },
       { name: 'Chocolate', href: '', show: true },
       { name: 'Milk', href: '', show: true },
       { name: 'Energy', href: '', show: true },
    ];
    var query;

    erpProductsCategoryContainer.directive('erpProductsCategoryContainer', function () {
        return {
            restrict: 'E',
            templateUrl: '../../../views/productsCategoryContainer.html',
            require: "erpSearchBar",
            //link: function (scope, element, attrs, erpSearchBarCtrl) {
            //    query = erpSearchBarCtrl.search();
            //},
            controller: ['$http', '$scope', function ($http, $scope) {
                $scope.categories = categories;
                $scope.subCategories = subCategories;
                //$scope.query = query;
            }]
        }
    });
})();

