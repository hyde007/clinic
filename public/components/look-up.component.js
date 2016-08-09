angular.
  module('lookUp').
  component('lookUp', {
    templateUrl: '/templates/lookUpPt.html',
    controller: function LookUpController($http,$scope) {
      this.user = 'world';
      console.debug('Look Up Controller initiated');
      $scope.lookUpList = [];
      //var resultList = [];
     
      $scope.lookUpPt=function(){

      	var phone = $('#phone').val();
        var emailId = $('#emailId').val();
        var lookupparam = '';
        var resultList = [];
        if(phone!=null){
            lookupparam = phone;
        }else{
            lookupparam = emailId;
        }
        var resultList=[];
        $http.get('/lookUp/'+phone).then(function(response) {
          
          console.log(response.data.length);
          if(response.data.length>0){
	        for(var k=0;k<response.data.length;k++){
            console.log(response.data[k]);
            resultList.push({
                        name: response.data[k].ptname,
                        phone: response.data[k].phone,
                        email: response.data[k].email,
                        class:'success'
            });

          }
          $scope.lookUpList = resultList;
          $('#searchResults').css('display','block');
          $('#noResult').css('display','none');
        }else{
          $('#searchResults').css('display','none');
          $('#noResult').css('display','block');
        }
        });

      }
      
       //this.lookUpList=resultList;
     // angular.copy(resultList,this.patientList);
    }
  });