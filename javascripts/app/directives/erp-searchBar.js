(function () {
    var erpSearchBar = angular.module('ErpSearchBar', []);

    var search = { placeholder: 'Search', value: 'soujanya', show: true };
    var searchIcon = { class: 'glyphicon glyphicon-search', show: true };

    erpSearchBar.directive('erpSearchBar', function () {
        return {
            restrict: 'E',
            templateUrl: '../../../views/searchBar.html',
            controller: ['$http', '$scope', function ($http, $scope) {
                $scope.search = search;
                $scope.searchIcon = searchIcon;

                $scope.clickMe = function () {
                    alert(search.value);
                }
            }]
        }
    });
})();

