angular.module('ionicApp', ['ionic','ngResource'])
  .value('nutritionixConst', {
  'appId' :'8abbcd8e',
  'appKey' : '36e8d264537037ee7e832a41902ffe57'
})
/**
* sample using collection repeat and data is provided using $htp and $resource
*
* additional documentation on collection-repeat
* - http://ionicframework.com/docs/api/directive/collectionRepeat/
*/
  .controller('HomeCtrl', function($scope, DataService,DataServiceHTTP, Weather) {

  $scope.data = {searchKey:''};

  $scope.getItemHeight = function(item, index) {
    //Make evenly indexed items be 10px taller, for the sake of example
    return (index % 2) === 0 ? 50 : 60;
  };

  /**
  *
  */
  $scope.doSearch = function() {
    console.debug("Searching for: " +  $scope.data.searchKey);

    if ( true ) {

      // use the $resource based service
      var promise = DataService.getAll( {
        'term' : $scope.data.searchKey,
        'results':'0:50',      // <-- variable substitution
        //'fields':'item_name'    <-- you can specify field params
      }).$promise;
      promise.then(function(_response) {
        console.debug(" The data " + JSON.stringify(_response));
        $scope.items = _response.hits;
      });

    } else {
      // use the $http based service
      var promise = DataServiceHTTP.getAll($scope.data.searchKey);
      promise.then(function(_response) {
        console.debug(" The data " + JSON.stringify(_response.data));
        $scope.items = _response.data.hits;
      });
    }
  };
})
/**
*
*/
  .factory('DataService', function( $resource, nutritionixConst){
  var aSearchObject = $resource('https://api.nutritionix.com/v1_1/search/:term',{term: '@term'},{
    getAll : {
      method : 'get',
      //isArray : true,
      params : {
        results  : ':results',
        appId : nutritionixConst.appId,
        appKey  :nutritionixConst.appKey,
        // brand_id:'513fbc1283aa2dc80c00001f',
        fields : ':fields',
      }
    }
  });
  return {
    /**
    * we can specify the params, the query string and the default fields
    * to turn in the query along with the result size
    */
    getAll : function(_params) {
      var defaultFields = 'brand_id,item_name,item_id,brand_name,nf_calories,nf_total_fat';

      if (!_params.fields) {
        _params.fields = defaultFields;
      }
      return aSearchObject.getAll(_params);
    }
  }

})
/**
*
*/
  .factory('DataServiceHTTP', function( $http, nutritionixConst){
  return {
    getAll : function(_key) {

      return $http.get('https://api.nutritionix.com/v1_1/search/' + _key,{
        'params' : {
          results  : '0:50',
          appId : nutritionixConst.appId,
          appKey  :nutritionixConst.appKey,
          // brand_id:'513fbc1283aa2dc80c00001f',
          fields : 'brand_id,item_name,item_id,brand_name,nf_calories,nf_total_fat'
        }
      });
    }
  }
})

  .factory('Weather', function($resource) {

  var API_PATH = 'http://api.openweathermap.org/data/2.5/weather';

  var Weather = $resource(API_PATH);

  return {
    getWeather: function(weatherParams) {
      return Weather.get(weatherParams, function(successResult) {
        return successResult;
      }, function(errorResult) {
        console.log(errorResult);
      });
    }
  }
})
  .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
    url: '/',
    templateUrl: 'home.html',
    controller : 'HomeCtrl'
  });

  $urlRouterProvider.otherwise("/");
});