angular
  .module('app')
  .controller('DatacenterController', DatacenterController);

DatacenterController.$inject = ['$ionicPlatform', '$q', '$scope', '$rootScope', '$firebaseAuth', '$window', '$interval', '$timeout', '$ionicModal', '$ionicLoading', '$ionicSideMenuDelegate', '$state', '$ionicSlideBoxDelegate', '$http', '$ionicTabsDelegate', '$firebaseObject', 'ngAudio', 'ionicToast', '$ionicNavBarDelegate', '$ionicTabsDelegate'];
function DatacenterController($ionicPlatform, $q, $scope, $rootScope, $firebaseAuth, $window, $interval, $timeout, $ionicModal, $ionicLoading, $ionicSideMenuDelegate, $state, $ionicSlideBoxDelegate, $http, $ionicTabsDelegate, $firebaseObject, ngAudio, ionicToast, $ionicNavBarDelegate, $ionicTabsDelegate) {

  var datacenter = this;

  datacenter.init = function() {
    console.log("datacenter initing...");
  };




  datacenter.init();
};  ////     END DATACENTER CONTROLLER     ////
///////      END DATACENTER CONTROLLER     ////

