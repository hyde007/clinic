angular.
  module('homePage').
  component('homePage', {
    templateUrl: '/templates/homePage.html',
    controller: function HomePageController($http) {
      this.user = 'world';
      var resultList = [];
      // Calling controller to load the current appt list
      $http.get("/currentApptList")
      .then(function(response) {
          console.log(response);
          for(var j=0;j<response.data.length;j++){
            resultList.push({name: response.data[j].ptname,
                             time: response.data[j].apptdate,
                             assigneddoc : response.data[j].docname,
                             class:'success'
                            });
          }
      });
      this.patientlist = resultList;
      // this.patientlist = [
      // {
      // 	name:'Sharath',
      // 	time:'10:00AM',
      // 	assigneddoc:'Namrata Sharath',
      // 	class:'success'
      // },
      // {
      // 	name:'Shaila',
      // 	time:'11:00AM',
      // 	assigneddoc:'Vinay Bhat',
      // 	class:'active'
      // },
      // {
      // 	name:'Sagar Bhat',
      // 	time:'12:00AM',
      // 	assigneddoc:'Vinay Bhat',
      // 	class:'success'
      // },
      //  {
      // 	name:'Bipul Singh',
      // 	time:'02:00PM',
      // 	assigneddoc:'Vinay Bhat',
      // 	class:'active'
      // },
      // {
      // 	name:'Mahesh Pandey',
      // 	time:'03:00PM',
      // 	assigneddoc:'Vinay Bhat',
      // 	class:'success'
      // }
      // ];

      
    }
  });