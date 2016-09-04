angular.module('acbjApp.filters', [])

.filter('exclude', function() {
  return function(input, exclude) {
    var result = [];
    for (var i=0; i<input.length; i++) {
      if (input[i] !== exclude) {
        result.push(input[i]);
      }
    }

    return result;
  };
})
//
// // Elastichat filters
// .filter('nl2br', ['$filter',
//   function($filter) {
//     return function(data) {
//       if (!data) return data;
//       return data.replace(/\n\r?/g, '<br />');
//     };
//   }
// ])
