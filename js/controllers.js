app.controller('SessionsListController', function($scope, $state, popupService, $window, Sessions) {
  $scope.sessions = Sessions.query(); 

  $scope.deleteSession = function(session) { 
    if (popupService.showPopup('Really delete this?')) {
      session.$delete(function() {
        $window.location.href = ''; 
      });
    }
  };
}).controller('SessionsViewController', function($scope, $stateParams, Sessions) {
  console.log("id : " + $stateParams.id);
  $scope.session = Sessions.get({ id: $stateParams.id }); 
}).controller('SessionsCreateController', function($scope, $state, $stateParams, Sessions, Server) {
  $scope.session = new Sessions();  

  $scope.addSession = function() { 
    if($scope.session.rememberMe) {

    }
    else {
      $scope.session.rememberMe = false;
    }
    $scope.session.$save(function() {
      $state.go('sessions'); 
    });
  };

  $scope.httpSave = function(session) {
    console.log("SessionsViewController httpSave " + session);
    Server.save(session).then(
      function(data1){
        console.log("After save in controller ");
        console.dir(data1);
      });
  };

  $scope.httpGet = function() {
    console.log("SessionsViewController httpGet");
    Server.get().then(
      function(data1){
        console.dir(data1);
        $scope.sessions = data1.data;
        console.log("After get in controller ");
      });
  };
}).controller('SessionsEditController', function($scope, $state, $stateParams, Sessions) {
  $scope.updateSession = function() { 
    if($scope.session.rememberMe) {

    }
    else {
      $scope.session.rememberMe = false;
    }
    $scope.session.$update(function() {
      $state.go('sessions'); 
    });
  };

  $scope.httpSave = function(session) {
    console.log("SessionsEditController : " + session);
  }

  $scope.loadSession = function() { 
    $scope.session = Sessions.get({ id: $stateParams.id });
  };

  $scope.loadSession(); 
});