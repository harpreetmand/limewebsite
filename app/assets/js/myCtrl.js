/***************************************
              Main App Controller
            ****************************************/
app.controller('MainController', function ($scope) {
  // $rootScope.$on( "$routeChangeStart", function(event, next, current) {
  //..do something
  //event.stopPropagation();  //if you don't want event to bubble up
  // $route.reload();
  // $location.path('/home/home');
  //   console.log("asdasdsafdsfg");
  //   $scope.reload = $route.reload;

  // $scope.reload = function(){ $route.reload(); };

  // console.log($routeParams.param);
  //   $scope.anim = [];
  //   var currentIndex;
  //   var newUrl;
  //   var url = $location.absUrl().split('?')[0];

  //   console.log(url);
  //   function updateSnapIndexFromHash() {
  //     var index = parseInt($window.location.hash.slice(1), 10);
  //     if (isNaN(index) || !angular.isNumber(index)) {
  //       return;
  //     }
  //      $scope.snapIndex = 2;
  //   }
  //   // $scope.snapIndex = 2;
  //   console.log(updateSnapIndexFromHash);

  //   $scope.beforeSnap = function (snapIndex) {
  //     currentIndex = snapIndex;
  //     console.log(currentIndex+"qqqqqq");
  //     // $window.location.hash = currentIndex = snapIndex;
  //     // $location.hash(snapIndex).replace().reload(false)
  //     // $location.update_path("home/"+path);
  //     var newUrl;
  //     // if(!isNaN(path)){
  //     //   console.log("111213234254364766658976");
  //     //   newUrl = whichPage.getSnapTitle(currentIndex);
  //     // }else if(path == null){
  //     //   console.log("null");
  //     //   //  newUrl = whichPage.getSnapTitle(currentIndex);
  //     // }else{
  //     //   newUrl = currentIndex;
  //     //   path = $routeParams.param;
  //     //   path = whichPage.getSnapIndex(currentIndex);
  //     //   console.log("dugfhewyg7ueghighik");
  //     // }
  //     //  $scope.snapIndex = path;
  //     // $location.update_path("home/"+newUrl);

  //     console.log("before");
  //     $rootScope.scroll = "over";
  //     if (snapIndex == 0) {
  //       $scope.anim['mainText'] = "animation-delay-15 fadeIn";
  //       $scope.anim['lastImage'] = "animation-delay-10 fadeInRight";
  //     } else {
  //       console.log("aa");
  //       $scope.anim['lastImage'] = "fadeOutDown";
  //       $scope.anim['mainText'] = "fadeOutDown";
  //     }

  //     if (snapIndex == 1) {
  //       // document.body.style.backgroundColor = "#97c93d";



  //       setTimeout(function () {
  //         console.log("aa");

  //         $scope.$apply(function () {
  //           $scope.backGround = "limeBG";
  //         });

  //       }, 1500);


  //     } else {
  //       $scope.backGround = "whiteBG";
  //     }
  //     if (snapIndex == 4 | snapIndex == 5 | snapIndex == 6 | snapIndex == 7 | snapIndex == 8 | snapIndex == 9 | snapIndex == 10 | snapIndex == 11 | snapIndex == 12 | snapIndex == 13) {
  //       $scope.ourWorkShow = "showThis";
  //     } else {
  //       $scope.ourWorkShow = "";
  //     }

  //   }
  //   $scope.snapAnimation = false; // turn animation off for the initial snap on page load
  //   $scope.afterSnap = function (snapIndex) {
  //     $scope.snapAnimation = true; // // turn animation on after the initial snap
  //     console.log("after");
  //     $rootScope.scroll = "true";
  //   };
  //   setInterval(updateSnapIndexFromHash, 250);
  //   updateSnapIndexFromHash();
  //   $scope.$on('arrow-up', function () {
  //     $scope.$apply(function () {
  //       $scope.snapIndex--;
  //     });
  //   });
  //   $scope.$on('arrow-down', function () {
  //     $scope.$apply(function () {
  //       $scope.snapIndex++;
  //     });
  //   });
  //   $scope.swipeUp = function () {
  //     $scope.snapIndex++;
  //   };
  //   $scope.swipeDown = function () {
  //     $scope.snapIndex--;
  //   };
  $scope.makeBig = function(){
    
    if($scope.showForm =="newContactShowForm")
    $scope.showForm = "";
    else
    $scope.showForm = "newContactShowForm";
  }
});




app.controller('home', function ($scope, $window, $rootScope, $location, $stateParams, whichPage, $timeout) {
  // $scope.worksq = function() {
  //   console.log("it orks");
  //   $location.path('work/mcvities');
  var myVideo = document.getElementById("main-video");
  $scope.playPause = function () {
    if (myVideo.paused)
      myVideo.play();
    else
      myVideo.pause();
  }
  $scope.videoToggle = false;
  $scope.videoShow = "HideToggle";
  $scope.videoShowHide = function () {
      console.log($scope.videoToggle);
      if ($scope.videoToggle == false) {
        myVideo.play();
        $scope.videoShow = "";
        $scope.textShow = "HideToggle";
        $scope.videoToggle = true;


      } else if ($scope.videoToggle == true) {
        $scope.videoToggle = false;
        myVideo.stop();
        $scope.videoShow = "HideToggle";
        $scope.textShow = "";
      }
    }
    // }
  $rootScope.homePage = "underline";
  $rootScope.workPage = "";
  uurl = $stateParams.param;
  $scope.anim = [];
  var currentIndex;
  var newUrl;

  var url = $location.absUrl().split('?')[0];



  function updateSnapIndexFromHash() {

    var index = parseInt($window.location.hash.slice(1), 10);
    if (isNaN(index) || !angular.isNumber(index)) {
      return;
    }
    $scope.snapIndex = uurl;
    console.log(uurl);
  }
  if (isNaN(uurl)) {
    newIndex = whichPage.getSnapindex(uurl);

    newUrl = uurl;
    currentIndex = newIndex;
    console.log(currentIndex);

  }
  $scope.snapIndex = currentIndex;


  $scope.beforeSnap = function (snapIndex) {

    $rootScope.scroll = "over";

    currentIndex = snapIndex;

    // $window.location.hash = currentIndex = snapIndex;
    // $location.hash(snapIndex).replace().reload(false)
    // $location.update_path("home/"+path);

    // if(!isNaN(uurl)){

    newUrl = whichPage.getSnapTitle(currentIndex);

    // }
    // else if(path == null){

    //   //  newUrl = whichPage.getSnapTitle(currentIndex);
    // }else{
    //   newUrl = currentIndex;
    //   path = $routeParams.param;
    //   path = whichPage.getSnapIndex(currentIndex);

    // }
    $timeout(callAtTimeout, 100);

    $scope.snapIndex = currentIndex;
    // $location.update_path("home/" + newUrl);
    // window.history.pushState('home/home', 'null', 'home/'+newUrl);


    function callAtTimeout() {

      // $location.path("homee/" + newUrl, false);

    }

    $rootScope.scroll = "over";
    // if (snapIndex == 0) {
    //   $scope.anim['mainText'] = "animation-delay-15 fadeIn";
    //   $scope.anim['lastImage'] = "animation-delay-10 fadeInRight";
    // } else {

    //   $scope.anim['lastImage'] = "fadeOutDown";
    //   $scope.anim['mainText'] = "fadeOutDown";
    // }

    if (snapIndex == 0) {
      // document.body.style.backgroundColor = "#97c93d";
      $rootScope.firstPage = "hideAlls";
      $rootScope.firstPageTop = "firstPageTop";
      $rootScope.firstPageSidebar = "firstPageSidebar";
      $rootScope.newContactFirstPage = "newContactNotFirstPage";

      // setTimeout(function () {


      //   $scope.$apply(function () {
      //     $scope.backGround = "limeBG";
      //   });

      // }, 1500);


    } else {
      // $scope.backGround = "whiteBG";
      $rootScope.firstPage = "";
      $rootScope.firstPageTop = "";
      $rootScope.firstPageSidebar = "";
      $rootScope.newContactFirstPage = "newContactFirstPage";
    }
    // if (snapIndex == 4 | snapIndex == 5 | snapIndex == 6 | snapIndex == 7 | snapIndex == 8 | snapIndex == 9 | snapIndex == 10 | snapIndex == 11 | snapIndex == 12 | snapIndex == 13) {
    //   $scope.ourWorkShow = "showThis";
    // } else {
    //   $scope.ourWorkShow = "";
    // }

  }

  $scope.sideBarOpen = function () {
    $('.bar').toggleClass('animate');
    if ($('.homeIndicators').hasClass('opened')) {
      $('.homeIndicators').removeClass('opened');
    } else {
      $('.homeIndicators').addClass('opened');
    }
  }

  $scope.snapAnimation = false; // turn animation off for the initial snap on page load
  $scope.afterSnap = function (snapIndex) {



    if (snapIndex != 0) {
      $scope.videoToggle = false;
      $scope.videoShow = "HideToggle";
      $scope.textShow = "";
      myVideo.pause();
      myVideo.currentTime = 0;

    }



    $scope.snapAnimation = true; // // turn animation on after the initial snap

    $rootScope.scroll = "true";
  };
  // setInterval(updateSnapIndexFromHash, 250);
  updateSnapIndexFromHash();
  // $scope.$on('arrow-up', function() {
  //   $scope.$apply(function() {
  //     $scope.snapIndex--;
  //   });
  // });
  // $scope.$on('arrow-down', function() {
  //   $scope.$apply(function() {
  //     $scope.snapIndex++;
  //   });
  // });
  // $scope.swipeUp = function() {
  //   $scope.snapIndex++;
  // };
  // $scope.swipeDown = function() {
  //   $scope.snapIndex--;
  // };
})











/***********************
 * work *
 *************************/
app.controller('work', function ($scope, $window, $rootScope, $location, $stateParams, whichPageWork, windowHeight, $route) {
  // $rootScope.scroll = "over";
  // $rootScope.scrolsl = "over";
  $rootScope.homePage = "";
  $rootScope.workPage = "underline";
  $scope.yy = function (goTo) {

    // $route.reload();
    // $scope.$apply();
    $scope.snapIndex = goTo;
    // $scope.beforeSnap(goTo);
  }
  windowElement = angular.element($window);
  // windowElement.on('resize', console.log("dfsdfsdf"));
  // console.log(windowHeight.onWindowResize);
  uurl = $stateParams.param;
  $scope.anim = [];
  var currentIndex;
  var newUrl;

  var url = $location.absUrl().split('?')[0];

  // console.log(uurl);

  function updateSnapIndexFromHash() {
    var index = parseInt($window.location.hash.slice(1), 10);
    if (isNaN(index) || !angular.isNumber(index)) {
      return;
    }
    $scope.snapIndex = uurl;
  }
  if (isNaN(uurl)) {
    newIndex = whichPageWork.getSnapindex(uurl);

    newUrl = uurl;
    currentIndex = newIndex;
    // console.log(newIndex);
  }
  $scope.snapIndex = currentIndex;
  // console.log($scope.snapIndex);

  $scope.beforeSnap = function (snapIndex) {



    $rootScope.scroll = "over";
    // console.log($window.innerHeight);
    currentIndex = snapIndex;
    // console.log(currentIndex + "qqqqqq");
    if (currentIndex == 0) {
      $rootScope.bgColor = "bodyMcVities";
    } else if (currentIndex == 1) {
      $rootScope.bgColor = "bodyMerryMaids";
    } else if (currentIndex == 2) {
      $rootScope.bgColor = "bodyONEnergy";
    } else if (currentIndex == 3) {
      $rootScope.bgColor = "bodyThomsonRogers";
    } else if (currentIndex == 10) {
      $rootScope.bgColor = "bodySubaru";
    } else if (currentIndex == 5) {
      $rootScope.bgColor = "bodyShipOnyx";
    } else if (currentIndex == 6) {
      $rootScope.bgColor = "bodyOSC";
    } else if (currentIndex == 7) {
      $rootScope.bgColor = "bodyHeathAndSherwood";
    } else if (currentIndex == 8) {
      $rootScope.bgColor = "bodySunwave";
    } else if (currentIndex == 9) {
      $rootScope.bgColor = "bodyAmeriSpec";
    } else if (currentIndex == 4) {
      $rootScope.bgColor = "bodyPremier";
    } else if (currentIndex == 11) {
      $rootScope.bgColor = "bodyFurnitureMedic";
    } else if (currentIndex == 12) {
      $rootScope.bgColor = "bodyCarlsberg";
    } else if (currentIndex == 13) {
      $rootScope.bgColor = "bodySilks";
    } else if (currentIndex == 14) {
      $rootScope.bgColor = "bodyGlobeAndMail";
    } else if (currentIndex == 15) {
      $rootScope.bgColor = "bodyCranberry";
    } else if (currentIndex == 16) {
      $rootScope.bgColor = "bodyServiceMaster";
    } else if (currentIndex == 17) {
      $rootScope.bgColor = "bodyTorontoTourism";
    } else if (currentIndex == 18) {
      $rootScope.bgColor = "bodyDiago";
    } else if (currentIndex == 100) {
      $rootScope.bgColor = "bodyMerryMaids";
    } else if (currentIndex == 22) {
      $rootScope.bgColor = "bodyONEnergy";
    } else if (currentIndex == 32) {
      $rootScope.bgColor = "bodyThomsonRogers";
    } else if (currentIndex == 40) {
      $rootScope.bgColor = "bodyHeathAndSherwood";
    }









    // console.log($window.innerHeight);
    // currentIndex = snapIndex;
    // console.log(currentIndex + "qqqqqq");
    // if (currentIndex == 0) {
    //   $rootScope.bgColor = "bodyMcVities";
    // } else if (currentIndex == 1) {
    //   $rootScope.bgColor = "bodyMerryMaids";
    // } else if (currentIndex == 2) {
    //   $rootScope.bgColor = "bodyONEnergy";

    // } else if (currentIndex == 3) {
    //   $rootScope.bgColor = "bodyThomsonRogers";
    // } else if (currentIndex == 4) {
    //   $rootScope.bgColor = "bodyHeathAndSherwood";
    // } else if (currentIndex == 5) {
    //   $rootScope.bgColor = "bodySunwave";
    // } else if (currentIndex == 6) {
    //   $rootScope.bgColor = "bodyAmeriSpec";
    // } else if (currentIndex == 7) {
    //   $rootScope.bgColor = "bodyPremier";
    // } else if (currentIndex == 8) {
    //   $rootScope.bgColor = "bodyFurnitureMedic";
    // } else if (currentIndex == 9) {
    //   $rootScope.bgColor = "bodyCarlsberg";
    // }
    // // $window.location.hash = currentIndex = snapIndex;
    // // $location.hash(snapIndex).replace().reload(false)
    // // $location.update_path("home/"+path);

    // // if(!isNaN(uurl)){
    // console.log("111213234254364766658976");
    // newUrl = whichPageWork.getSnapTitle(currentIndex);
    // console.log(newUrl);
    // // }
    // // else if(path == null){
    // //   console.log("null");
    // //   //  newUrl = whichPageWork.getSnapTitle(currentIndex);
    // // }else{
    // //   newUrl = currentIndex;
    // //   path = $routeParams.param;
    // //   path = whichPageWork.getSnapIndex(currentIndex);
    // //   console.log("dugfhewyg7ueghighik");
    // // }
    // $scope.snapIndex = currentIndex;
    // $location.update_path("work/" + newUrl);

    // console.log("before");
    // $rootScope.scroll = "over";
    // console.log("before222222222");
    // if (snapIndex == 0) {
    //   $scope.anim['mainText'] = "animation-delay-15 fadeIn";
    //   $scope.anim['lastImage'] = "animation-delay-10 fadeInRight";
    // } else {
    //   console.log("aa");
    //   $scope.anim['lastImage'] = "fadeOutDown";
    //   $scope.anim['mainText'] = "fadeOutDown";
    // }


    // if (snapIndex == 4 | snapIndex == 5 | snapIndex == 6 | snapIndex == 7 | snapIndex == 8 | snapIndex == 9 | snapIndex == 10 | snapIndex == 11 | snapIndex == 12 | snapIndex == 13) {
    //   $scope.ourWorkShow = "showThis";
    // } else {
    //   $scope.ourWorkShow = "";
    // }

  }
  $scope.snapAnimation = false; // turn animation off for the initial snap on page load
  $scope.afterSnap = function (snapIndex) {
    $scope.snapAnimation = true; // // turn animation on after the initial snap
    // console.log("after");
    $rootScope.scroll = "true";
  };
  // setInterval(updateSnapIndexFromHash, 250);
  updateSnapIndexFromHash();
  $scope.$on('arrow-up', function () {
    $scope.$apply(function () {
      $scope.snapIndex--;
    });
  });
  $scope.$on('arrow-down', function () {
    $scope.$apply(function () {
      $scope.snapIndex++;
    });
  });
  $scope.swipeUp = function () {
    $scope.snapIndex++;
  };
  $scope.swipeDown = function () {
    $scope.snapIndex--;
  };
})
app.controller('mainApp', function () {

  })
  // app.animation('.reveal-animation', function() {
  //   return {
  //     enter: function(element, done) {
  //       element.css('display', 'none');
  //       element.fadeIn(1000, done);
  //       return function() {
  //         element.stop();
  //       }
  //     },
  //     leave: function(element, done) {
  //       element.fadeOut(1000, done)
  //       return function() {
  //         element.stop();
  //       }
  //     }
  //   }
  // })


// app.controller('mainApp', function ($scope, $timeout, $rootScope, anchorSmoothScroll, homeContent, $routeParams, $window, $location, mockService, $sessionStorage, $interval, share) {
//   $rootScope.meta = {};
//   $rootScope.meta.ogUrl = $location.absUrl();
//   $rootScope.meta.ogImage = "http://mcvitiescanada.com/app/assets/images/mcvities-share.jpg";
//   mockService.loadLocalization(function () {
//     $scope.homeContent = mockService.getLocalizationJSON().data;
//   });
//   $scope.date = new Date();
//   $scope.isActive = false;
//   /***************************************
//   Mobile Nav Click Function
//   ****************************************/
//   $scope.mobileNav = function () {
//     $scope.isActive = !$scope.isActive;
//   }
//   /***************************************
//   Close Mobile Nav Click Function
//   ****************************************/
//   $scope.closeMobileNav = function () {
//     $scope.isActive = !$scope.isActive;
//   }
//   /***************************************
//   find location
//   ****************************************/
//   $scope.findLocation = function () {
//     return location.href;
//   }
//   /***************************************
//    find Product Nutrition Image
//    ****************************************/
//   $scope.thisProduct = function (image, name) {
//     $rootScope.productImage = image;
//     $rootScope.productName = name;
//   }
//   /********************************************
//   Function will call when ui-view will change
//   **********************************************/
//   $scope.removeActive = function () {
//     $rootScope.homeClass = 'page';
//     /***************************************
//     Go to section on navigation clicked
//     ****************************************/
//     $scope.gotoElement = function (eID) {
//       $timeout(function () {
//         anchorSmoothScroll.scrollTo(eID);
//       }, 200);
//     }
//     $scope.changeLang = function (newLang) {
//       $sessionStorage.lang = newLang;
//       mockService.loadLocalization(function () {
//         $scope.homeContent = mockService.getLocalizationJSON().data;


//       });

//     }
//     /**********************************************
// Active the navigation when scroll on home page
// ***********************************************/
//     $timeout(function () {
//       if ($rootScope.homeClass != 'homepage') {
//         $('.top-menu').removeClass('active');
//         $('.modal-backdrop').remove();
//         $('body').removeClass('modal-open');
//       } else {
//         $(window).scroll(function () {
//           if ($rootScope.homeClass === 'homepage') {
//             var scroll = $(window).scrollTop();
//             var scrolltop = window.pageYOffset;
//             var currentScroll = $(this).scrollTop(),
//               $currentSection;
//             $('.section').each(function () {
//               var divPosition = $(this).offset().top - 120;
//               if (divPosition - 1 < currentScroll) {
//                 $currentSection = $(this);
//               }
//               var id = $currentSection.attr('id');
//               $('.top-menu').removeClass('active');
//               $('.' + id).addClass('active');
//             });
//           }
//         });
//       }
//     }, 1000);
//     /***************************************
//     Scroll to top when ui-view change
//     ****************************************/
//     $("html, body").animate({
//       scrollTop: '0px'
//     }, 0);
//     $("html, body").delay(0).animate({
//       scrollTop: '1px'
//     }, 0);
//   }
//   /***************************************
//   Animation on window scroll
//   ****************************************/
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     var scrolltop = window.pageYOffset;
//     TweenMax.to('.anim-text', 0, {
//       y: -scrolltop * .5 + 'px'
//     });
//     TweenMax.to('.wtb-back1 ,.wtb-back16 ,.wtb-back15 ,.wtb-back10 ,.wtb-back19', 0, {
//       y: scrolltop * .1 + 'px'
//     });
//     TweenMax.to('.wtb-back7 ,.wtb-back18 ,.wtb-back14 ,.wtb-back4 ,.wtb-back17', 0, {
//       y: scrolltop * .1 + 'px'
//     });
//     TweenMax.to('.wtb-back13 ,.wtb-back19 ,.wtb-back18 ,.wtb-back16', 0, {
//       y: -scrolltop * .1 + 'px'
//     });
//     TweenMax.to('.wtb-back11 ,.wtb-back12 ,.wtb-back2 ,.wtb-back5', 0, {
//       y: -scrolltop * .1 + 'px'
//     });

//     if ($(this).scrollTop() > 130) {
//       $('header').addClass('sticky');
//     }
//     if ($(this).scrollTop() <= 1) {
//       $('header').removeClass('sticky');
//     }
//   });
// });
// /***************************************
// Products section Controller
// ****************************************/
// app.controller('productsCtrl', function ($scope, $attrs, $http) {
//   $scope.activeProduct = false;
//   $scope.showMore = function () {
//     $scope.activeProduct = !$scope.activeProduct;
//     $scope.activePro = false;
//     $scope.section = false;
//   }
//   $scope.showProduct = function (key, index) {
//     $scope.activeProduct = true;
//     if (key === $scope.activePro) {
//       $scope.activePro = false
//       $scope.section = false
//     } else {
//       $scope.activePro = key;
//       $scope.section = "section" + index;
//     }
//   }
//   $scope.getRandomNum = function () {
//     var total = (Object.keys($scope.productContent.mcvities).length - 1) * 3;
//     return Math.floor((Math.random() * total) + 1);
//   }
//   $scope.productFind = function (product) {
//     var results = [];
//     var pro = 'product' + product;
//     var obj = Object.keys($scope.productContent.mcvities);
//     for (var i = 0; i < obj.length - 1; i++) {
//       for (key in $scope.productContent.mcvities) {
//         var subObj = Object.keys($scope.productContent.mcvities[key]);
//         if (subObj[i].indexOf(pro) != -1) {
//           return $scope.productContent.mcvities[key][subObj[i]].name;
//         }
//       }
//     }
//   }
// });
// /***************************************
// Brands section Controller
// ****************************************/
// app.controller('brandsController', function ($scope, $attrs, $http) {
//   $scope.activeBrand = false;
//   $scope.activePro = false;
//   $scope.section = false;
//   $scope.showMore = function (key, name) {
//     $scope.activeBrand = true;
//     $scope.thisBrand = name.image;
//     $scope.activePro = false;
//     $scope.section = false;
//   }
//   $scope.close = function () {
//     $scope.activeBrand = false;
//     $scope.thisBrand = false;
//     $scope.activePro = false;
//     $scope.section = false;
//   }
//   $scope.showProduct = function (key, index) {
//     $scope.activeProduct = true;
//     if (key === $scope.activePro) {
//       $scope.activePro = false
//       $scope.section = false
//     } else {
//       $scope.activePro = key;
//       $scope.section = "section" + index;
//     }
//   }
// });
// /***************************************
// Our Story Section Controller
// ****************************************/
// app.controller('ourstoriesNav', function ($scope) {

// });
// /************************************
// Faq Page controller
// ***********************************/
// app.controller('privacyCtrl', function ($rootScope) {

//   $rootScope.meta.title = "Privacy - McVitie's"
//   $rootScope.meta.desc = "read our privacy policy here";
//   $rootScope.meta.ogUrl = $location.absUrl();
//   $rootScope.meta.ogImage = "http://mcvitiescanada.com/app/assets/images/mcvities-share.jpg";
// });
// /************************************
// Faq Page controller
// ***********************************/
// app.controller('faqsCtrl', function ($scope, anchorSmoothScroll, $http, $location, $rootScope) {
//   $rootScope.meta.title = "FAQ - McVitie's"
//   $rootScope.meta.desc = "Learn more about the products we use to make McVitie’s cookies and find answers to the most frequently asked questions.";
//   $rootScope.meta.ogUrl = $location.absUrl();
//   $rootScope.meta.ogImage = "http://mcvitiescanada.com/app/assets/images/mcvities-share.jpg";


//   $scope.hh = "sadasdadasdsafsdgdfh";

//   $scope.activeClass = 'red';
//   $scope.activeQuestion = function (key) {
//     $scope.isActiveQuestion = key;
//   }
//   $scope.gotoElement = function (eID) {
//     anchorSmoothScroll.scrollTo(eID);
//   };
// });
// /***************************************
// store lcoator controller
// ****************************************/
// app.controller('storeLocatorCtrl', function ($http, $scope, $interval, NgMap, getStores, APIservices, $rootScope, $routeParams, $location) {
//   $rootScope.meta.title = "Store Locator - McVitie's"
//   $rootScope.meta.desc = "Why wait any longer? Satisfy your sweet tooth today at a retailer near you.";
//   $rootScope.meta.ogUrl = $location.absUrl();
//   $rootScope.meta.ogImage = "http://mcvitiescanada.com/app/assets/images/mcvities-share.jpg";
//   $scope.newAddress = $routeParams.postalCode;
//   $scope.address = $routeParams.postalCode;
//   if (!$scope.address) {
//     $scope.address = "toronto";
//   }

//   //initial address

//   $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + $scope.address + "")
//     .then(function (response) {
//       $scope.converted = response.data;
//       $scope.lat = $scope.converted.results[0].geometry.location.lat;
//       $scope.lng = $scope.converted.results[0].geometry.location.lng;
//       $http.get("/api/getstores.php/?slug=ttdd&lat=" + $scope.lat + "&lng=" + $scope.lng + "")
//         .then(function (response) {
//           vm.shops = response.data;
//           console.log(vm.shops);
//           vm.shop = vm.shops[0];
//         });
//     });

//   //init
//   var vm = this;
//   NgMap.getMap().then(function (map) {
//     vm.map = map;
//   });

//   //get new address
//   $scope.newAddressBtn = function () {

//     $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + $scope.newAddress + "")
//       .then(function (response) {
//         $scope.converted = response.data;
//         $scope.lat = $scope.converted.results[0].geometry.location.lat;
//         $scope.lng = $scope.converted.results[0].geometry.location.lng;


//         $http.get("/api/getstores.php/?slug=ttdd&lat=" + $scope.lat + "&lng=" + $scope.lng + "")
//           .then(function (response) {
//             vm.shops = response.data;
//             console.log(vm.shops);
//             vm.shop = vm.shops[0];
//           });



//       });





//   }

//   vm.showDetail = function (e, shop) {
//     vm.shop = shop;
//     vm.map.showInfoWindow('foo-iw', shop.id);
//   };

//   vm.hideDetail = function () {
//     vm.map.hideInfoWindow('foo-iw');
//   };
// });

// /***************************************
// Contorller to add class home in ui-view
// ****************************************/
// app.controller('activeScrollCtrl', function ($scope, $timeout, $sessionStorage, $window, $routeParams, $rootScope, anchorSmoothScroll, $location) {
//   $rootScope.meta.title = "McVitie's Canada"
//   $rootScope.meta.desc = "Britain’s favourite biscuits are now available in Canada! With a variety of mouth-watering flavours available, McVitie’s has something for every sweet tooth.";
//   $rootScope.meta.ogUrl = $location.absUrl();
//   $rootScope.meta.ogImage = "http://mcvitiescanada.com/app/assets/images/mcvities-share.jpg";
//   $scope.changeLang = function () { }

//   $timeout(function () {
//     $rootScope.homeClass = 'homepage';
//   }, 200);
//   var i = $sessionStorage.SessionMessage;
//   $(window).scroll(function () {
//     if (i === undefined) {
//       if ($(window).scrollTop() > 1) {
//         $('#promotions.modal').modal('show');
//         $sessionStorage.SessionMessage = 1;
//         i = $sessionStorage.SessionMessage;
//       }
//       $sessionStorage.SessionMessage = 1;
//     }
//   });
// });

// app.controller('contestFormCtrl', function ($scope, $http, $rootScope) {
//   $scope.contestFormSubmit = function () {
//     $http({
//       method: 'POST',
//       url: 'api/submit-contest.php',
//       data: $.param($scope.contestForm), // pass in data as strings
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       } // set the headers so angular passing info as form data (not request payload)
//     })
//       .success(function (data) {

//         if (data.success == false) {
//           // if not successful, bind errors to error variables
//           $scope.errorName = data.errors.fullName;
//           $scope.errorEmail = data.errors.email;
//           $scope.errorEmailAgain = data.errors.emailAgain;
//           $scope.errorAgeCheck = data.errors.ageCheck;
//           $scope.errorPhone = data.errors.phone;
//           $scope.message = data.message;
//           $scope.thankYou = data.thankYou;
//           // console.log(data.errors.emailAgain);
//         } else {
//           // if successful, bind success message to message
//           $scope.message = data.message;
//           $scope.thankYou = data.thankYou;
//           $scope.emailExist = data.emailExist;
//           if ($scope.thankYou || $scope.emailExist) {
//             $scope.hideForm = true;
//           }

//         }
//       });
//     console.log($scope.contestForm);
//   }
// });
// app.controller('contestCtrl', function ($scope, $http, $rootScope, $location) {
//   $rootScope.meta.title = "Contest - McVitie's"
//   $rootScope.meta.desc = "Visit McVitie’s often to find exclusive coupons, special offers, and to enter for your chance to win amazing prizes.";
//   $rootScope.meta.ogUrl = $location.absUrl();
//   $rootScope.meta.ogImage = "http://mcvitiescanada.com/app/assets/images/mcvities-share.jpg";

// });

// app.controller('newsletterCtrl', function ($scope, $http) {
//   $scope.newsletterSignUp = function () {
//     $http({
//       method: 'POST',
//       url: 'api/submit-newsletter.php',
//       data: $.param($scope.newsletterForm), // pass in data as strings
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       } // set the headers so angular passing info as form data (not request payload)
//     })
//       .success(function (data) {
//         console.log(data);

//         if (data.success == false) {

//           $scope.thankYou = data.thankYou;
//           $scope.message = data.message;


//         } else {

//           $scope.thankYou = data.thankYou;

//         }

//       });

//     console.log($scope.newsletterForm.email);
//   }
// });

// app.controller('allBlogs', function allBlogs($scope, $rootScope, mockService) {


//   $scope.showTotal = 3;
//   $scope.showMore = function (nowShowing) {
//     $scope.showTotal = nowShowing + 1;
//   }

//   mockService.loadLocalization(function () {
//     var metaStuff = mockService.getLocalizationJSON().data;

//     $rootScope.meta = {};
//     $rootScope.meta.title = metaStuff.blog.title + " - McVitie's";
//     $rootScope.meta.desc = metaStuff.blog.meta;


//   });

// });

// app.controller('oneBlogCtrl', function oneBlogCtrl($scope, $window, $location, $http, $routeParams, $rootScope, mockService) {
//   var slug = $routeParams.param;
//   // $rootScope.thisIsTitle = $routeParams.param +" - McVitie's";
//   // console.log($scope.homeContent);
//   // console.log($scope.recipe);
//   // console.log(document.getElementById('pName').value);
//   mockService.loadLocalization(function () {
//     var metaStuff = mockService.getLocalizationJSON().data;
//     metaStuff = metaStuff.blog.allBlogs;
//     $rootScope.meta = {};
//     for (var i = 0; i < metaStuff.length; i++) {
//       if (metaStuff[i].slug === slug) {
//         $scope.oneBlog = metaStuff[i];
//         $rootScope.meta.title = metaStuff[i].title + " - McVitie's";
//         $rootScope.meta.desc = metaStuff[i].meta;
//         $rootScope.meta.ogUrl = $location.absUrl();
//         $rootScope.meta.ogImage = "http://mcvitiescanada.com/app/assets/images/blog/big/" + metaStuff[i].image + ".jpg";
//       }
//     }
//     // console.log($scope.metaStuff.recipes);

//   });
// });