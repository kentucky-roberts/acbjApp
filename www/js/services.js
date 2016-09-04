angular.module('acbjApp.services', [])


// .factory('EventService', function ($resource) {
//     //return $resource('api/events/:event.json',{event: "@event"})


//       var data = $resource('api/events/:event.json', {event: '@event'}, {
//       update:{
//           method:'PUT'
//           }
//       });



//       console.log("data has " + data);
//       return data;


// })




.factory('Events',
  function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var events = [
 {
    "id": 1,
    "title": "40 Under 40",
    "url_title": "40-under-40",
    "image": "http://lorempixel.com/80/80/business/1/",
    "lead": "Seattle becoming the worlds largest cloud community",
    "description": "Join us to hear from local experts about harnessing the Cloud for dramatic business growth.",
    "price": 99,
    "qty": 100,
    "photos": [
      "http://lorempixel.com/500/500/business/1/",
      "http://lorempixel.com/500/500/business/2/",
      "http://lorempixel.com/500/500/business/3/"
    ]
  },
  {
    "id": 2,
    "title": "Persuasive Business Writing",
    "url_title": "persuasive-business-writing",
    "image": "http://lorempixel.com/80/80/business/4/",
    "lead": "Practical techniques for clear and persuasive business writing",
    "description": "Lorem ipsum dolor sit amet, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 200,
    "qty": 44,
    "photos": [
      "http://lorempixel.com/500/500/business/4/",
      "http://lorempixel.com/500/500/business/5/",
      "http://lorempixel.com/500/500/business/6/"
    ]
  },
  {
    "id": 3,
    "title": "Corporate Counsel Awards",
    "url_title": "corperate-council-awards",
    "image": "http://lorempixel.com/80/80/business/7/",
    "lead": "Join us for the Corporate Council Annual Awards and Events!",
    "description": "Lorem ipsum dolor sit amet, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 50,
    "qty": 200,
    "date": 3,
    "photos": [
      "http://lorempixel.com/500/500/business/7/",
      "http://lorempixel.com/500/500/business/8/",
      "http://lorempixel.com/500/500/business/9/"
    ]
  },
  {
    "id": 4,
    "title": "CFO of the Year Awards",
    "url_title": "cfo-of-the-year",
    "image": "http://lorempixel.com/80/80/business/10/",
    "lead": "2016 CFO of the Year Honorees",
    "description": "Join us as we celebrate the 2016 CFO of the Year Honorees and applaud their many accomplishments and contributions to the regions economy and community!",
    "price": 15,
    "qty": 500,
    "date": 4,
    "photos": [
      "http://lorempixel.com/500/500/business/10/",
      "http://lorempixel.com/500/500/business/11/",
      "http://lorempixel.com/500/500/business/12/"
    ]
  },
  {
    "id": 5,
    "title": "PNAAs 15th Annual Aerospace Conference: Flying into the Future",
    "url_title": "pnnas-15th-annual-aerospace-conference",
    "image": "http://lorempixel.com/80/80/business/13/",
    "lead": "Join PNAA in the worlds largest commercial aerospace cluster",
    "description": "Join PNAA in the worlds largest commercial aerospace cluster to gain crucial intelligence on the future of the aerospace manufacturing industry. Executive networking, B2B meetings, industry tours.",
    "price": 75,
    "qty": 55,
    "date": 5,
    "photos": [
      "http://lorempixel.com/500/500/business/13/",
      "http://lorempixel.com/500/500/business/14/",
      "http://lorempixel.com/500/500/business/15/"
    ]
  },
  {
    "id": 6,
    "title": "Amazing People Awarded for Doing Good Things",
    "url_title": "amazing-people-awarded-for-doing-good-things",
    "image": "http://lorempixel.com/80/80/business/16/",
    "lead": "Great people doing great things and being awarded for it.  ",
    "description": "This event will be life-changing, and you should buy a ticket because there are only three left!  Join PNAA in the worlds largest commercial aerospace cluster to gain crucial intelligence on the future of the aerospace manufacturing industry. Executive networking, B2B meetings, industry tours.",
    "price": 15,
    "qty": 100,
    "date": 6,
    "photos": [
      "http://lorempixel.com/500/500/business/16/",
      "http://lorempixel.com/500/500/business/17/",
      "http://lorempixel.com/500/500/business/18/"
    ]
  }
  ];

  return {
    all: function() {
      return events;
    },
    remove: function(event) {
      events.splice(events.indexOf(event), 1);
    },
    get: function(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId)) {
          return events[i];
        }
      }
      return null;
    }
  };
})




.factory('News',
  function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var news = [
 {
    "id": 1,
    "title": "GE Doing Something",
    "url_title": "40-under-40",
    "image": "http://lorempixel.com/80/80/sports/1/",
    "lead": "Seattle becoming the worlds largest cloud community",
    "description": "Join us to hear from local experts about harnessing the Cloud for dramatic business growth.",
    "price": 99,
    "qty": 100,
    "photos": [
      "http://lorempixel.com/500/500/sports/1/",
      "http://lorempixel.com/500/500/sports/2/",
      "http://lorempixel.com/500/500/sports/3/"
    ]
  },
  {
    "id": 2,
    "title": "Stock Market Does This",
    "url_title": "persuasive-business-writing",
    "image": "http://lorempixel.com/80/80/business/4/",
    "lead": "Practical techniques for clear and persuasive business writing",
    "description": "Lorem ipsum dolor sit amet, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 200,
    "qty": 44,
    "photos": [
      "http://lorempixel.com/500/500/sports/4/",
      "http://lorempixel.com/500/500/sports/5/",
      "http://lorempixel.com/500/500/sports/6/"
    ]
  },
  {
    "id": 3,
    "title": "Homes and Mortgages",
    "url_title": "corperate-council-awards",
    "image": "http://lorempixel.com/80/80/business/7/",
    "lead": "Join us for the Corporate Council Annual Awards and Events!",
    "description": "Lorem ipsum dolor sit amet, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 50,
    "qty": 200,
    "date": 3,
    "photos": [
      "http://lorempixel.com/500/500/sports/7/",
      "http://lorempixel.com/500/500/sports/8/",
      "http://lorempixel.com/500/500/sports/9/"
    ]
  },
  {
    "id": 4,
    "title": "Slighly More Important News",
    "url_title": "cfo-of-the-year",
    "image": "http://lorempixel.com/80/80/business/10/",
    "lead": "Slightly or significantly?",
    "description": "Join us as we celebrate the 2016 CFO of the Year Honorees and applaud their many accomplishments and contributions to the regions economy and community!",
    "price": 15,
    "qty": 500,
    "date": 4,
    "photos": [
      "http://lorempixel.com/500/500/sports/10/",
      "http://lorempixel.com/500/500/sports/11/",
      "http://lorempixel.com/500/500/sports/12/"
    ]
  },
  {
    "id": 5,
    "title": "News About New Sport",
    "url_title": "pnnas-15th-annual-aerospace-conference",
    "image": "http://lorempixel.com/80/80/sports/13/",
    "lead": "Join PNAA in the worlds largest commercial aerospace cluster",
    "description": "Join PNAA in the worlds largest commercial aerospace cluster to gain crucial intelligence on the future of the aerospace manufacturing industry. Executive networking, B2B meetings, industry tours.",
    "price": 75,
    "qty": 55,
    "date": 5,
    "photos": [
      "http://lorempixel.com/500/500/sports/13/",
      "http://lorempixel.com/500/500/sports/14/",
      "http://lorempixel.com/500/500/sports/15/"
    ]
  },
  {
    "id": 6,
    "title": "Camel Racing Scores",
    "url_title": "amazing-people-awarded-for-doing-good-things",
    "image": "http://lorempixel.com/80/80/business/16/",
    "lead": "Great people doing great things and being awarded for it.  ",
    "description": "This event will be life-changing, and you should buy a ticket because there are only three left!  Join PNAA in the worlds largest commercial aerospace cluster to gain crucial intelligence on the future of the aerospace manufacturing industry. Executive networking, B2B meetings, industry tours.",
    "price": 15,
    "qty": 100,
    "date": 6,
    "photos": [
      "http://lorempixel.com/500/500/business/16/",
      "http://lorempixel.com/500/500/business/17/",
      "http://lorempixel.com/500/500/business/18/"
    ]
  }
  ];

  return {
    all: function() {
      return news;
    },
    remove: function(news) {
      news.splice(news.indexOf(news), 1);
    },
    get: function(newsId) {
      for (var i = 0; i < news.length; i++) {
        if (news[i].id === parseInt(newsId)) {
          return news[i];
        }
      }
      return null;
    }
  };
})


.factory('Chats',
  function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.factory("Items", function($firebaseArray) {
  var itemsRef = new Firebase("https://acbjapp.firebaseio.com/items");
  return $firebaseArray(itemsRef);
})

.factory("Messages", function($firebaseArray) {
  var messagesRef = new Firebase("https://acbjapp.firebaseio.com/messages");
  return $firebaseArray(messagesRef);
})
