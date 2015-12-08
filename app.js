var app = angular.module('chumFirebase', ['ngRoute', 'firebase']);

app.constant('fb', {
  url: 'https://fiery-inferno-7139.firebaseio.com'
});

app.filter('tel', function () {
  return function (tel) {
    if (!tel) { return ''; }
    
    var value = tel.toString().trim().replace(/\D/g,''),
        symbols = {
          0: "(",
          3: ") ",
          6: "-"
        };
    
    if (value.charAt(0) == "1"){
      value = value.substr(1);
    }
      
    String.prototype.insertTextAtIndices = function(text) {
      return this.replace(/./g, function(character, index) {
        return text[index] ? text[index] + character : character;
      });
    };
    
    value = value.insertTextAtIndices(symbols);
      
    return value;
  };
});

app.config(function($routeProvider, $httpProvider){
  $httpProvider.defaults.useXDomain = true;
  
  $routeProvider.
    when('/login', {
      controllerAs: 'login',
      templateUrl: 'pages/login/login.html'
    }).
    when('/home', {
      controllerAs: 'home',
      templateUrl: 'pages/home/home.html'
    }).
    otherwise({
      redirectTo: '/login'
    });
});
