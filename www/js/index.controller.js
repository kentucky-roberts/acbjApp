angular.module('acbjApp.controllers', [])

.controller("IndexController", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout',
function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout) {
    $scope.onSlideMove = function(data) {
        console.log("You have selected " + data.index + " tab");
    };



}]);
