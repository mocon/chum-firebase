angular.module('chumFirebase')
  .controller('homeCtrl', function($scope, UserService, ContactService){
    
    UserService.isLoggedIn();
    
    $scope.userData = UserService.getLoggedInUser();
    
    $scope.searchContacts = function(query){
      if (query){
        var dataPromise = ContactService.searchContacts(query);
        
        dataPromise.then(function(result){
          $scope.contactResults = result;
        });
      }
    }
    
    $scope.logout = function(){
      UserService.logout();
    }
    
  });
