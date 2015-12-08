var app = angular.module('chumFirebase', ['ngRoute', 'firebase']);

app.constant('fb', {
  url: 'https://fiery-inferno-7139.firebaseio.com'
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
