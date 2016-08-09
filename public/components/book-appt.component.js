angular.
  module('bookAppt').
  component('bookAppt', {
    templateUrl: '/templates/bookAnAppt.html',
    controller: function BookApptController($http,$scope) {
      this.user = 'world';
      $http.get("/loadDocList")
	    .then(function(response) {
	        $scope.docList = response.data;
	    });

      $scope.bookAppt = function() {
        
         var data = {
                fName: $scope.firstname,
                lName: $scope.lastname
            };
         console.log(data);

        $http.post('/bookAppt',data)
        .then(function(response) {
          $scope.docList = response.data;
      });
      }
      console.debug('Book an appointment Controller initiated');
    }
  });