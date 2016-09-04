angular
  .module('acbjApp', [
    'ionic',
    'acbjApp.config',
    'acbjApp.directives',
    'acbjApp.animations',
    'acbjApp.controllers',
    'acbjApp.elastichat',
    'acbjApp.filters',
    'acbjApp.services'
  ])

  .run(function($ionicPlatform, $rootScope, $firebaseAuth, $firebase, $window, $ionicLoading) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          $window.cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }

        $rootScope.userEmail = null;
        $rootScope.baseUrl = 'https://acbjApp.firebaseio.com/';
        console.log($rootScope.baseUrl);
        var authRef = new Firebase($rootScope.baseUrl);
        $rootScope.auth = $firebaseAuth(authRef);

        $rootScope.show = function(text) {
          $rootScope.loading = $ionicLoading.show({
            content: text ? text : 'Loading..',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
        };

        $rootScope.hide = function() {
          $ionicLoading.hide();
        };

        $rootScope.notify = function(text) {
          $rootScope.show(text);
          $window.setTimeout(function() {
            $rootScope.hide();
          }, 1999);
        };

        $rootScope.logout = function() {
          $rootScope.auth.$logout();
          $rootScope.checkSession();
        };

        $rootScope.checkSession = function() {
          var auth = new FirebaseSimpleLogin(authRef, function(error, user) {
            if (error) {
              // no action yet.. redirect to default route
              $rootScope.userEmail = null;
              $window.location.href = '#/auth/signin';
            } else if (user) {
              // user authenticated with Firebase
              $rootScope.userEmail = user.email;
              $window.location.href = ('#/events');
            } else {
              // user is logged out
              $rootScope.userEmail = null;
              $window.location.href = '#/auth/signin';
            }
          });
        };
      });
   })

.config(function($cordovaInAppBrowserProvider) {

  var defaultOptions = {
    location: 'no',
    clearcache: 'no',
    toolbar: 'no'
  };

  // document.addEventListener(function () {
  //   $cordovaInAppBrowserProvider.setDefaultOptions(options);
  // }, false);

})

.config(function($stateProvider, $urlRouterProvider, $ionicFilterBarConfigProvider) {
  $stateProvider
    .state('index', {
      url : '/',
      templateUrl : 'index.html',
      controller : 'IndexController'
    })
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppController'
    })
    .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html'
        }
      }
    })
    .state('app.filter-bar', {
      url: '/filter-bar',
      views: {
        'menuContent': {
          templateUrl: 'modules/filterbar/filterbar.html',
          controller: 'AppController'
        }
      }
    })
    .state('app.datacenter', {
      url: '/datacenter',
      views: {
        'menuContent': {
          templateUrl: 'modules/datacenter/datacenter.html'
        }
      }
    })
    .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.content-banner', {
      url: '/content-banner',
      views: {
        'menuContent': {
          templateUrl: 'modules/content-banner/content-banner.html',
          controller: 'MainController'
        }
      }
    })
    .state('app.tickets', {
      url: '/tickets',
      views: {
        'menuContent': {
          templateUrl: 'templates/tickets.html'
        }
      }
    })
    .state('app.camera', {
      url: '/camera',
      views: {
        'menuContent': {
          templateUrl: 'templates/camera.html',
          controller: "CameraController"
        }
      }
    })
    // .state('app.elastichat', {
    //     url: '/elastichat',
    //     views: {
    //       'menuContent': {
    //         templateUrl: 'modules/chat/chat.html',
    //         controller: 'UserMessagesController'
    //       }
    //     }
    //   })

    .state('app.chats', {
        url: '/chats',
        views: {
          'menuContent': {
            templateUrl: 'templates/chats.html',
            controller: 'ChatsController'
          }
        }
      })
      .state('app.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'menuContent': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailController'
          }
        }
      })
    .state('app.host', {
        url: '/host',
        views: {
          'menuContent': {
            templateUrl: 'templates/host.html'
          }
        }
      })
    .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings.html',
            controller: 'AppController'
          }
        }
      })
      .state('app.events', {
        url: '/events',
        views: {
          'menuContent': {
            templateUrl: 'templates/events.html',
            controller: 'EventsController'
          }
        }
      })
      .state('app.event', {
        url: '/events/:eventId',
        views: {
          'menuContent': {
            templateUrl: 'templates/event-details.html',
            controller: 'EventDetailsController'
          }
        }
      })
      .state('app.allNews', {
        url: '/news',
        views: {
          'menuContent': {
            templateUrl: 'templates/news.html',
            controller: 'NewsController'
          }
        }
      })
      .state('app.news', {
        url: '/news/:newsId',
        views: {
          'menuContent': {
            templateUrl: 'templates/news-details.html',
            controller: 'NewsDetailsController'
          }
        }
      })
      .state('app.messages', {
         url: '/messages',
         views: {
           'menuContent': {
             templateUrl: 'modules/chat/chat.html',
             controller: 'UserMessagesController'
            }
          }
       })
      .state('app.notifications', {
        url: '/notifications',
        views: {
          'menuContent': {
            templateUrl: 'templates/notifications.html',
            controller: 'NotificationsController'
          }
        }
      })
      .state('app.share', {
        url: '/share',
        views: {
          'menuContent': {
            templateUrl: 'templates/share.html',
            controller: 'ShareController'
          }
        }
      })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "modules/datacenter/tabs/tabs.html"
    })
    .state('tabs.a', {
      url: "/datacenter/a",
      views: {
        'tab-a': {
          templateUrl: "modules/datacenter/tabs/a.html",
          controller: 'DatacenterController'
        }
      }
    })
    .state('tabs.b', {
      url: "/datacenter/b",
      views: {
        'tab-b': {
          templateUrl: "modules/datacenter/tabs/b.html",
          controller: 'DatacenterController'
        }
      }
    })
    .state('tabs.c', {
      url: "/datacenter/c",
      views: {
        'tab-c': {
          templateUrl: "modules/datacenter/tabs/c.html"
        }
      }
    })
    .state('tabs.d', {
      url: "/datacenter/d",
      views: {
        'tab-d': {
          templateUrl: "modules/datacenter/tabs/d.html"
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/news');
});

