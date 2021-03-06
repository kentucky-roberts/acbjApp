angular
 .module('app.auth')
  .controller('SignupController', SignupController);

SignupController.$inject = ['$scope', '$rootScope', '$firebaseAuth', '$window'];

function SignupController($scope, $rootScope, $firebaseAuth, $window) {
$scope.user = {
  email: "",
  password: ""
};


$scope.createUser = function () {
  var email = this.user.email;
  var password = this.user.password;

  if (!email || !password) {
    $rootScope.notify("Please enter valid credentials");
    return false;
  }

  $rootScope.show('Please wait.. Registering');
  $rootScope.auth.$createUser(email, password, function (error, user) {
    if (!error) {
      $rootScope.hide();
      $rootScope.userEmail = user.email;
      $window.location.href = ('#/tab/main-menu');
    }
    else {
      $rootScope.hide();
      if (error.code == 'INVALID_EMAIL') {
        $rootScope.notify('Invalid Email Address');
      }
      else if (error.code == 'EMAIL_TAKEN') {
        $rootScope.notify('Email Address already taken');
      }
      else {
        $rootScope.notify('Oops something went wrong. Please try again later');
      }
       }
            });
        }
    }
