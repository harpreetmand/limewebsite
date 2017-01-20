var app = angular.module("myApp", ['ngAnimate', 'ui.router', 'ngRoute', 'angularLazyImg', 'ui.bootstrap', 'ngSanitize', 'angular-timeline', 'ngStorage', 'ngMap','swipe','snapscroll','ngLocationUpdate']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home/home");


  $stateProvider
    .state('state1', {
      url: "/home/:param",
      templateUrl: "views/home.html",
      controller: "home",
    })

    .state('state2', {
      url: "/work/:param",
      templateUrl: "views/work.html",
      controller: "work"
    })
    .state('privacy-policy',{
      url: "/privacy-policy",
      templateUrl: "views/privacy.html",
      controller: ""
    })
   
    $locationProvider.html5Mode(true);
    });

