/***************************************
              Main App Controller
            ****************************************/
app.controller('MainController', function ($scope) {

  $scope.makeBig = function () {

    if ($scope.showForm == "newContactShowForm")
      $scope.showForm = "";
    else
      $scope.showForm = "newContactShowForm";
  }
});
/***************************************
              home page Controller
            ****************************************/
app.controller('home', function ($scope, $window, $rootScope, $location, $stateParams, whichPage, $timeout) {
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
    newUrl = whichPage.getSnapTitle(currentIndex);
    // $timeout(callAtTimeout, 100);
    $scope.snapIndex = currentIndex;
    $rootScope.scroll = "over";
    if (snapIndex == 0) {
      $rootScope.firstPage = "hideAlls";
      $rootScope.firstPageTop = "firstPageTop";
      $rootScope.firstPageSidebar = "firstPageSidebar";
      $rootScope.newContactFirstPage = "newContactNotFirstPage";
    } else {
      $rootScope.firstPage = "";
      $rootScope.firstPageTop = "";
      $rootScope.firstPageSidebar = "";
      $rootScope.newContactFirstPage = "newContactFirstPage";
    }
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
  updateSnapIndexFromHash();
})











/***********************
 * work *
 *************************/
app.controller('work', function ($scope, $window, $rootScope, $location, $stateParams, whichPageWork, windowHeight, $route) {
  $rootScope.homePage = "";
  $rootScope.workPage = "underline";
  $scope.yy = function (goTo) {
    $scope.snapIndex = goTo;
  }
  windowElement = angular.element($window);

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
  }
  if (isNaN(uurl)) {
    newIndex = whichPageWork.getSnapindex(uurl);
    newUrl = uurl;
    currentIndex = newIndex;
  }
  $scope.snapIndex = currentIndex;
  $scope.beforeSnap = function (snapIndex) {
    $rootScope.scroll = "over";

    currentIndex = snapIndex;
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
  }
  $scope.snapAnimation = false; // turn animation off for the initial snap on page load
  $scope.afterSnap = function (snapIndex) {
    $scope.snapAnimation = true; // // turn animation on after the initial snap
    $rootScope.scroll = "true";
  };

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


/***********************
 * contact form ctrl *
 *************************/
app.controller('contactCtrl', function ($scope, $http, $rootScope, $httpParamSerializerJQLike) {
  $scope.contactFormSubmit = function () {
    $http({
        method: 'POST',
        url: 'api/contactform.php',
        data: $httpParamSerializerJQLike($scope.contactForm), // pass in data as strings
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        } // set the headers so angular passing info as form data (not request payload)
      })
      .success(function (data) {
        if (data.success == false) {
          // if not successful, bind errors to error variables
          $scope.errorName = data.errors.name;
          $scope.errorEmail = data.errors.email;
          $scope.errorEmailAgain = data.errors.emailAgain;
          $scope.errorMessage = data.errors.message;
          $scope.thankYou = data.thankYou;
          $scope.invalidRed = "invalidRed";
        } else {
          // if successful, bind success message to message
          $scope.message = data.message;
          $scope.thankYou = data.thankYou;
          $scope.emailExist = data.emailExist;
          if ($scope.thankYou || $scope.emailExist) {
            $scope.hideForm = true;
          }
        }
      });
  }
});