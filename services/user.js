angular.module('chumFirebase')
  .service('UserService', function($location, fb, $firebaseAuth, ContactService){
    
    var ref = new Firebase(fb.url),
        authObj = $firebaseAuth(ref)
        authData = authObj.$getAuth(),
        user = {};
    
    if (authData){
      user = {
        id: authData.google.id,
        name: authData.google.displayName,
        avatar: authData.google.profileImageURL
      };
      ContactService.setEmailAndToken(authData.google.email, authData.google.accessToken);
    }
    
    this.isLoggedIn = function(){
      authObj.$onAuth(function(authData) {
        if (authData) {
          user = {
            id: authData.google.id,
            name: authData.google.displayName,
            avatar: authData.google.profileImageURL
          };
          ContactService.setEmailAndToken(authData.google.email, authData.google.accessToken);
        } else {
          $location.path('login');
          authData = {};
        }
      });
    }
    
    this.getLoggedInUser = function(){
      return user;
    }
    
    this.loginWithGoogle = function(){
      authObj.$authWithOAuthPopup("google", {
        scope: 'https://www.googleapis.com/auth/contacts.readonly'
      }).then(function(authData) {
        $location.path('home');
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    }
    
    this.logout = function(){
      authObj.$unauth();
      $location.path('login');
    }
    
  });
