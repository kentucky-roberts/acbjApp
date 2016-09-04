angular
   .module('acbjApp.config', [
        'ionic.service.core',
        'ngCordova',
        'firebase',
        'ngCordova',
        'ngResource',
        'ngRoute',
        'ngTouch',
        'ngAnimate',
        'ionic-toast',
        'tabSlideBox',
        'jett.ionic.content.banner',
        'ionic.contrib.ui.hscrollcards',
        'monospaced.elastic',
        'angularMoment',
        'ionic-datepicker',
        'jett.ionic.filter.bar'
    ])

    .constant('version', '1.0.0')
    .constant('$ionicLoadingConfig', {
      template: '<ion-spinner class="spinner" icon="ios"></ion-spinner>'
    });
