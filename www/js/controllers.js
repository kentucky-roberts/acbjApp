angular.module('acbjApp.controllers', [])

.controller('AppController', ['$scope', '$ionicModal', '$window', '$interval', '$timeout', '$ionicLoading', 'ionicToast', 'ModalService', 'Messages', '$ionicFilterBar',  function($scope, $ionicModal, $timeout, $window, $interval, $timeout, $ionicLoading, ionicToast, ModalService, Messages, $ionicFilterBar) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  var app = this;
  $scope.activeMarket = "Charlotte";
  $scope.bar = "bar-positive";


  // // Create a new Firebase reference, and a new instance of the Login client
  //    var chatRef = new Firebase('https://acbjapp.firebaseio.com/chat');
  //    chatRef.onAuth(function(authData) {
  //            // Once authenticated, instantiate Firechat with our user id and user name
  //            if (authData) {
  //              var chat = new FirechatUI(chatRef, document.getElementById('firechat-wrapper'));
  //              chat.setUser(authData.uid, authData[authData.provider].displayName);
  //            }
  //          });
  //          function login(provider) {
  //            chatRef.authWithOAuthPopup(provider, function(error, authData) {
  //              if (error) {
  //                console.log(error);
  //              }
  //            });
  //          }

  app.init = function() {
    app.marketColor =  "market-color--blue";
    app.activeMarket =  "Charlotte";
    $scope.marketColor = app.marketColor;


  };


                var filterBarInstance;

                function getItems () {
                  var items = [];
                  for (var x = 1; x < 2000; x++) {
                    items.push({text: 'This is item number ' + x + ' which is an ' + (x % 2 === 0 ? 'EVEN' : 'ODD') + ' number.'});
                  }
                  $scope.items = items;
                }

                getItems();

                $scope.showFilterBar = function () {
                  filterBarInstance = $ionicFilterBar.show({
                    items: $scope.items,
                    update: function (filteredItems, filterText) {
                      $scope.items = filteredItems;
                      if (filterText) {
                        console.log(filterText);
                      }
                    }
                  });
                };

                $scope.refreshItems = function () {
                  if (filterBarInstance) {
                    filterBarInstance();
                    filterBarInstance = null;
                  }

                  $timeout(function () {
                    getItems();
                    $scope.$broadcast('scroll.refreshComplete');
                  }, 1000);
                };



  $scope.datepickerObject = {
    titleLabel: 'Title',  //Optional
    todayLabel: 'Today',  //Optional
    closeLabel: 'Close',  //Optional
    setLabel: 'Set',  //Optional
    setButtonType : 'button-assertive',  //Optional
    todayButtonType : 'button-assertive',  //Optional
    closeButtonType : 'button-assertive',  //Optional
    inputDate: new Date(),  //Optional
    mondayFirst: true,  //Optional
    disabledDates: disabledDates, //Optional
    weekDaysList: weekDaysList, //Optional
    monthList: monthList, //Optional
    templateType: 'popup', //Optional
    showTodayButton: 'true', //Optional
    modalHeaderColor: 'bar-positive', //Optional
    modalFooterColor: 'bar-positive', //Optional
    dateFormat: 'dd-MM-yyyy', //Optional
    from: new Date(2012, 8, 2), //Optional
    to: new Date(2018, 8, 25),  //Optional
    callback: function (val) {  //Mandatory
      datePickerCallback(val);
    }
//    dateFormat: 'dd-MM-yyyy', //Optional
//    closeOnSelect: false, //Optional
  };

  var disabledDates = [
        new Date(1437719836326),
        new Date(),
        new Date(2015, 7, 10), //months are 0-based, this is August, 10th!
        new Date('Wednesday, August 12, 2015'), //Works with any valid Date formats like long format
        new Date("08-14-2015"), //Short format
        new Date(1439676000000) //UNIX format
      ];

      var weekDaysList = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"];

      var monthList = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

      var datePickerCallback = function (val) {
          if (typeof(val) === 'undefined') {
            console.log('No date selected');
          } else {
              var dateVal = val;
              $scope.dateVal = dateVal;
            console.log('Selected date is : ', val);
          }
        };



        app.setActiveMarket = function(activeMarket){

            var am = this.activeMarket;
              console.log(am);

            if (am === "Charlotte"){
                console.log(am);

                $scope.bar = "bar-positive";
            }

            if (am === "Cincinntti"){
                console.log(am);
                $scope.bar = "bar-assertive";
            }

            if (am === "Seattle"){
                console.log(am);
                $scope.bar = "bar-balanced";
            }
        };



  $scope.marketList = [
    { text: "Cincinnati", value: "Cincinnatti" },
    { text: "Charlotte", value: "Charlotte" },
    { text: "Seattle", value: "Seattle" }
  ];

  $scope.data = {
    marketList: 'Charlotte'
  };

  $scope.marketListChange = function(item) {
    console.log("Selected marketList, text:", item.text, "value:", item.value);
  };


  $scope.showToast = function(){
  // ionicToast.show(message, position, stick, time);
    ionicToast.show('This is a toast at the top.', 'top', false, 2500);
  };

  $scope.showToastBottom = function(){
  // ionicToast.show(message, position, stick, time);
    ionicToast.show('This is a toast at the bottom.', 'bottom', true, 2500);
  };

  $scope.hideToast = function(){
    ionicToast.hide();
  };

  //
  // var chatRef = new Firebase('https://<YOUR-FIREBASE>.firebaseio.com/chat');
  //
  // function login() {
  //   chatRef.authWithOAuthPopup("twitter", function(error, authData) {
  //     if (error) {
  //       console.log(error);
  //     }
  //   });
  // }
  //
  // chatRef.onAuth(function(authData) {
  //   // Once authenticated, instantiate Firechat with our user id and user name
  //   if (authData) {
  //     initChat(authData);
  //   }
  // });

      ////////////////////////////////////////
      // Toast
      ////////////////////////////////////////
      $scope.showToast = function() {
          // ionicToast.show(message, position, stick, time);
          ionicToast.show('This is a toast at the top.', 'top', true, 2500);
      };



      ////////////////////////////////////////
      // ModalService
      ////////////////////////////////////////
      $scope.showLogin = function() {
        ModalService
          .init('modules/modals/login.html')
          .then(function(modal) {
              modal.show();
          });
      };

      // Form data for the login modal
      $scope.loginData = {};

      $scope.closeLogin = function() {
        $scope.closeModal();
      };

      app.doLogin = function() {
        console.log('Doing login', $scope.loginData);
        $scope.username = loginData.username;
        $scope.password = loginData.password;

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };

    app.init();

}])



.controller('PlaylistsCtrl', function($scope) {
  $scope.events = [
    { title: '40 Under 40', image: 'img/event-images/demo-image.jpg', description: 'Seattle is becoming the worlds largest cloud community. Join us to hear from local experts about harnessing the Cloud for dramatic business growth.', id: 1 },
    { title: 'Persuasive Business Writing', image: 'img/event-images/demo-image.jpg', description: 'Practical techniques for clear and persuasive business writing.', id: 2 },
    { title: 'Corporate Counsel Awards', image: 'img/event-images/february-webinar-event-logo-250x200px.png', description: 'Puget Sound Business Journals Corporate Counsel Awards honor legal heroes in our community that exemplify traits that all in-house counsel strive to attain and hone — measured and trusted judgment, legal and business acumen, vision, and leadership.', id: 3 },
    { title: 'Managing Stormwater in Washington', image: 'img/event-images/demo-image.jpg', description: 'Now in its ninth year, Managing Stormwater in Washington is the states largest and most comprehensive stormwater conference, featuring the latest information and best practices for professionals and', id: 4 },
    { title: 'CFO of the Year Awards', image: 'img/event-images/cfo-of-the-year.jpg', description: 'Join us as we celebrate the 2016 CFO of the Year Honorees and applaud their many accomplishments and contributions to the regions economy and community!', id: 5 },
    { title: 'PNAAs 15th Annual Aerospace Conference: Flying into the Future', image: 'img/event-images/demo-image.jpg', description: 'Join PNAA in the world’s largest commercial aerospace cluster to gain crucial intelligence on the future of the aerospace manufacturing industry. Executive networking, B2B meetings, industry tours.', id: 6 },
    { title: '10k Marathon', image: 'img/event-images/cfo-of-the-year.jpg', description: 'Decriptions are great when they are descriptive, and should include some call-to-action message and button', id: 6 },
    { title: 'Amazing People Awarded for Doing Good Things', image: 'img/event-images/cfo-of-the-year.jpg', description: 'Great people doing great things and being awarded for it.  This event will be life-changing, and you should buy a ticket because there are only three left!', id: 7 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('EventsController', ['$scope', '$http', '$log', '$q', '$timeout', '$ionicModal', '$ionicPopover', '$ionicListDelegate', 'ionicToast', 'Events', 'ModalService',
  function($scope, $http, $log, $q, $timeout, $ionicModal, $ionicPopover, $ionicListDelegate, ionicToast, Events, ModalService) {

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;

    $scope.events = Events.all();

    var events = $scope.events;

    $scope.filterFunction = function(element) {
      return element.name.match(/^Ma/) ? true : false;
    };

    $scope.remove = function(event) {
      Events.remove(event);
    };

    $scope.newEvent = function(eventData) {
      $scope.closeModal();
      console.log(eventData.title);

      $scope.events.push(eventData);
      console.log($scope.events.length);

    };



      ////////////////////////////////////////
      // Toast
      ////////////////////////////////////////
      $scope.showToast = function() {
      // ionicToast.show(message, position, stick, time);
        ionicToast.show('This is a toast at the top.', 'top', true, 2500);
      };

      ////////////////////////////////////////
      // ModalService
      ////////////////////////////////////////
      $scope.showNewEvent = function() {
        ModalService
          .init('modules/modals/new-event.html')
          .then(function(modal) {
              modal.show();
          });
      };

  }])



.controller('EventDetailsController', ['$scope', '$state','$location', '$stateParams', '$http', '$log', '$q', '$timeout', '$ionicModal', '$ionicSlideBoxDelegate', 'Events', 'ModalService',
  function($scope, $state, $location, $stateParams, $http, $log, $q, $timeout, $ionicModal, $ionicSlideBoxDelegate, Events, ModalService) {

   $scope.event = Events.get($stateParams.eventId);

console.log($scope.event.photos.length);


  	$scope.aImages = $scope.event.photos;


       ////////////////////////////////////////
       // ModalService
       ////////////////////////////////////////
       $scope.showNewEvent = function() {
           ModalService
               .init('modules/modals/new-event.html')
               .then(function(modal) {
                   modal.show();
               });
       };

       $scope.showPurchaseForm = function() {
           ModalService
               .init('modules/modals/purchase-form.html')
               .then(function(modal) {
                   modal.show();
               });
       };

       $scope.submitPurchaseForm = function(purchaseData) {
           $scope.closeModal();
           console.log(purchaseData);
       };

       $scope.showSaveForm = function() {
           ModalService
               .init('modules/modals/save-form.html')
               .then(function(modal) {
                   modal.show();
               });
       };

       $scope.submitSaveForm = function(saveData) {
           $scope.closeModal();
           console.log(saveData);
       };

       $scope.showSendForm = function() {
           ModalService
               .init('modules/modals/send-form.html')
               .then(function(modal) {
                   modal.show();
               });
       };

       $scope.submitSendForm = function(sendData) {
           $scope.closeModal();
           console.log(sendData);
       };

       $scope.showFullscreenImage = function() {
          $ionicSlideBoxDelegate.slide(0);
           ModalService
               .init('modules/modals/fullscreen-image.html')
               .then(function(modal) {
                   modal.show();
               });
       };




    // Call this functions if you need to manually control the slides
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

  	$scope.goToSlide = function(index) {
      $scope.modal.show();
      $ionicSlideBoxDelegate.slide(index);
    };

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };




  }])






.controller('NewsController', ['$scope', '$http', '$log', '$q', '$timeout', '$ionicModal', '$ionicPopover', '$ionicListDelegate', 'ionicToast', 'News', 'ModalService',
  function($scope, $http, $log, $q, $timeout, $ionicModal, $ionicPopover, $ionicListDelegate, ionicToast, News, ModalService) {

      $scope.shouldShowDelete = false;
      $scope.shouldShowReorder = false;
      $scope.listCanSwipe = true;

      $scope.allNews = News.all();

      var allNews = $scope.allNews;

      $scope.filterFunction = function(element) {
        return element.name.match(/^Ma/) ? true : false;
      };

      $scope.remove = function(news) {
        News.remove(event);
      };

      $scope.newNews = function(newsData) {
        $scope.closeModal();
          console.log(newsData.title);
        $scope.news.push(newsData);
          console.log($scope.news.length);
      };


      ////////////////////////////////////////
      // Toast
      ////////////////////////////////////////
      $scope.showToast = function() {
      // ionicToast.show(message, position, stick, time);
        ionicToast.show('This is a toast at the top.', 'top', true, 2500);
      };

      ////////////////////////////////////////
      // ModalService
      ////////////////////////////////////////
      $scope.showNewEvent = function() {
        ModalService
          .init('modules/modals/new-event.html')
          .then(function(modal) {
              modal.show();
          });
      };
  }])

.controller('NewsDetailsController', ['$scope', '$state','$location', '$stateParams', '$http', '$log', '$q', '$timeout', '$ionicModal', 'News', 'ModalService',
  function($scope, $state, $location, $stateParams, $http, $log, $q, $timeout, $ionicModal, News, ModalService) {

   $scope.news = News.get($stateParams.newsId);


      ////////////////////////////////////////
      // ModalService
      ////////////////////////////////////////
      $scope.showNewEvent = function() {
        ModalService
          .init('modules/modals/new-event.html')
          .then(function(modal) {
              modal.show();
          });
      };

      $scope.showPurchaseForm = function() {
          ModalService
          .init('modules/modals/purchase-form.html')
          .then(function(modal) {
              modal.show();
          });
      };
        $scope.submitPurchaseForm = function(purchaseData) {
          $scope.closeModal();
          console.log(purchaseData);
        };


      $scope.showSaveForm = function() {
          ModalService
          .init('modules/modals/save-form.html')
          .then(function(modal) {
              modal.show();
          });
      };
        $scope.submitSaveForm = function(saveData) {
          $scope.closeModal();
          console.log(saveData);
        };


      $scope.showSendForm = function() {
          ModalService
          .init('modules/modals/send-form.html')
          .then(function(modal) {
              modal.show();
          });
      };

      $scope.submitSendForm = function(sendData) {
        $scope.closeModal();
        console.log(sendData);
      };

}])



.controller('ChatsController', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailController', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountController', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('TicketsController', function($scope) {
  $scope.tickets = {
    showTickets: true
  };
})

.controller('SettingsController', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})





.controller('MainController', function($scope, $timeout, $q, $ionicContentBanner) {
    var contentBannerInstance;

    function fakeHttpCall (failOnPurpose) {
      var deferred = $q.defer();
      var items = [];

      if (!failOnPurpose) {
        for (var x = 1; x < 500; x++) {
          items.push({text: 'This is item number ' + x});
        }
        deferred.resolve(items);
      } else {
        deferred.reject();
      }
      return deferred.promise;
    }

    function getItems (failOnPurpose, bannerType, transition) {
      //CLOSE content banner!!!
      if (contentBannerInstance) {
        contentBannerInstance();
        contentBannerInstance = null;
      }
      fakeHttpCall(failOnPurpose).then(function (items) {
        //HTTP SUCCES!!
        $scope.items = items;
      }, function () {
        //HTTP FAIL!!!
        contentBannerInstance = $ionicContentBanner.show({
          text: ['System Unavailable', 'Please try again later.'],
          interval: 3000,
          autoClose: 10000,
          type: bannerType,
          transition: transition || 'vertical'
        });
      });
    }

    getItems(false);

    $scope.showInfoBanner = function () {
      getItems(true, 'info', 'vertical');
    };

    $scope.showErrorBanner = function () {
      getItems(true, 'error', 'fade');
    };

    $scope.refreshItems = function () {
      $timeout(function () {
        getItems(true, 'error', 'vertical');
        $scope.$broadcast('scroll.refreshComplete');
      }, 1000);
    };
  })





.controller('MainCtrl', ['$scope', '$ionicModal', '$ionicSlideBoxDelegate', function ($scope, $ionicModal, $ionicSlideBoxDelegate) {

    $scope.aImages = [{
        'src' : 'img/demo-1.jpg',
        'msg' : 'Swipe me to the left. Tap/click to close'
      }, {
        'src' : 'img/demo-2.jpg',
        'msg' : ''
      }, {
        'src' : 'img/demo-3.jpg',
        'msg' : ''
      }, {
        'src' : 'img/demo-4.jpg',
        'msg' : ''
      }, {
        'src' : 'img/demo-5.jpg',
        'msg' : ''
      }, {
        'src' : 'img/demo-6.jpg',
        'msg' : ''
    }];

    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $ionicSlideBoxDelegate.slide(0);
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    // Call this functions if you need to manually control the slides
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

    $scope.goToSlide = function(index) {
      $scope.modal.show();
      $ionicSlideBoxDelegate.slide(index);
    };

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
  }
])



.controller('ScrollcardsController', function($scope) {

  $scope.items = [];

  for (var i = 0; i <= 5; i++) {
    var tmp = [
      {desc: 'The Ramones', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSulfJcjBhxxW2NBBn9KbE3B4BSeh0R7mQ38wUi_zpJlQrMoDWh_qFcMelE_tjtAERUPTc'},
      {desc: 'The Beatles', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGpH07f9zeucoOs_stZyIFtBncU-Z8TDYmJgoFnlnxYmXjJEaitmxZNDkNvYnCzwWTySM'},
      {desc: 'Pink Floyd', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-FbU5dD_Wz472srRIvoZAhyGTEytx9HWGusbhYgSc2h0N6AqqRrDwzApmyxZoIlyxDcU'},
      {desc: 'The Rolling Stones', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6uwPPBnHfAAUcSzxr3iq9ou1CZ4f_Zc2O76i5A4IyoymIVwjOMXwUFTGSrVGcdGT9vQY'},
      {desc: 'The Jimi Hendrix Experience', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRA3jz0uhVypONAKWUve80Q6HASvuvZiohl4Sru5ZihkAsjWiaGjocfxd0aC3H7EeFk5-I'},
      {desc: 'Van Halen', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIslVN9cJJ6YuV0y7JihAyA63JDhXGhkCVxHIRE-IoaF-rpefjIXO5osA24QvN9iCptC8'}
    ];
    $scope.items = $scope.items.concat(tmp);
  }
})

.controller('FilterbarController', function($scope, $timeout, $ionicFilterBar) {

  var filterBarInstance;

  function getItems () {
    var items = [];
    for (var x = 1; x < 2000; x++) {
      items.push({text: 'This is item number ' + x + ' which is an ' + (x % 2 === 0 ? 'EVEN' : 'ODD') + ' number.'});
    }
    $scope.items = items;
  }

  getItems();

  $scope.showFilterBar = function () {
    filterBarInstance = $ionicFilterBar.show({
      items: $scope.items,
      update: function (filteredItems, filterText) {
        $scope.items = filteredItems;
        if (filterText) {
          console.log(filterText);
        }
      }
    });
  };

  $scope.refreshItems = function () {
    if (filterBarInstance) {
      filterBarInstance();
      filterBarInstance = null;
    }

    $timeout(function () {
      getItems();
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  };
});
