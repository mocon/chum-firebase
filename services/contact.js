angular.module('chumFirebase')
  .service('ContactService', function($http){
    
    var userEmail,
        userToken,
        maxResults = 5;
    
    this.setEmailAndToken = function(email, token){
      userEmail = email;
      userToken = token;
    }
    
    this.searchContacts = function(query){
      return $http({
        method: 'GET',
        url: 'https://www.google.com/m8/feeds/contacts/' + userEmail + '/thin?alt=json&access_token=' + userToken + '&q="' + query + '"&max-results=' + maxResults + '&v=3.0'
      }).then(function successCallback(response) {
        return response.data.feed.entry;
      }, function errorCallback(response) {
        console.log('Failure ' + response.status);
        return;
      });
    }
    
    return this;
    
  });
