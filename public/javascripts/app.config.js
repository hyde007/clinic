angular.
  module('dentalApp').
  config(['$routeProvider',
    function config($routeProvider) {
      //$locationProvider.hashPrefix('!');
      console.log($routeProvider);
      $routeProvider.
        when('/home', {
          template: '<home-page></home-page>'
        }).
        when('/bookAppt', {
          template: '<book-appt></book-appt>'
        }).
        when('/lookUpPt', {
          template: '<look-up></look-up>'
        }).
        otherwise('/home');
    }
  ]);