var app = angular.module("myApp", ['ngAnimate', 'ui.router', 'ngRoute', 'angularLazyImg', 'ui.bootstrap', 'ngSanitize', 'angular-timeline', 'ngStorage', 'ngMap','swipe','snapscroll','ngLocationUpdate']);
app.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
          console.log("relod bo");
          // $rootScope.scroll = "over";
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
                // $rootScope.scroll = "over";
            });
        }
        return original.apply($location, [path]);
    };
}])
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home/home");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/home/:param",
      templateUrl: "views/home.html",
      controller: 'home',
    })

    .state('state2', {
      url: "/work/:param",
      templateUrl: "views/work.html",
      controller: 'work'
    })
    // .state('state1.list', {
    //   url: "/list",
    //   templateUrl: "partials/state1.list.html",
    //   controller: function($scope) {
    //     $scope.items = ["A", "List", "Of", "Items"];
    //   }
    // })
    // .state('state2', {
    //   url: "/state2",
    //   templateUrl: "partials/state2.html"
    // })
    // .state('state2.list', {
    //   url: "/list",
    //     templateUrl: "partials/state2.list.html",
    //     controller: function($scope) {
    //       $scope.things = ["A", "Set", "Of", "Things"];
    //     }
    //   })
    $locationProvider.html5Mode(true);
    });
// var app = angular.module("myApp", ['ngAnimate', 'ngRoute', 'angularLazyImg', 'ui.bootstrap', 'ngSanitize', 'angular-timeline', 'ngStorage', 'ngMap','swipe','snapscroll','ngLocationUpdate']);

// app.run(['$route', function($route)  {
//   $route.reload();
// }]);
// app.config(function(lazyImgConfigProvider, $routeProvider, $locationProvider) {
//     lazyImgConfigProvider.setOptions({
//         offset: 300, // how early you want to load image (default = 100), 'angular-scroll-animate'
//         errorClass: 'error', // in case of loading image failure what class should be added (default = null)
//         successClass: 'imgLoaded', // in case of loading image success what class should be added (default = null)
//         onError: function(image) {}, // function fired on loading error
//         onSuccess: function(image) {} // function fired on loading success

//     });
//     $routeProvider
//     // route for the home page
//         .when('/', {

//             templateUrl: 'views/home.html',
//             controller: 'home'
//         })
//         // .when('/home', {
//         //     templateUrl: 'views/home.html',
//         //     controller: ''
//         // })
//         .when('/home/:param', {
//             templateUrl: 'views/home.html',
//             controller: 'home'
//         })
//         .when('/work/:param', {       
//             templateUrl: 'views/work.html',
//             controller: 'work'
//         })

//     // $locationProvider.html5Mode(true);
             
// });
