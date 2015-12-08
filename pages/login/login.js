angular.module('chumFirebase')
  .controller('loginCtrl', function($scope, UserService){
    
    $scope.loginWithGoogle = function(){
      UserService.loginWithGoogle();
    }
    
  });
