app.controller('SessionsListController', function($scope, $state, popupService, $window, Sessions) {
  var self = this;
  self.sessions = Sessions.query(); 

  self.deleteSession = function(session) { 
    if (popupService.showPopup('Really delete this?')) {
      session.$delete(function() {
        $window.location.href = ''; 
      });
    }
  };
}).controller('SessionsViewController', function($scope, $stateParams, Sessions) {
  var self = this;
  console.log("id : " + $stateParams.id);
  self.session = Sessions.get({ id: $stateParams.id }); 
}).controller('SessionsCreateController', function($scope, $state, $stateParams, Sessions, Server) {
  var self = this;
  self.session = new Sessions();  

  self.addSession = function() { 
    if(self.session.rememberMe) {

    }
    else {
      self.session.rememberMe = false;
    }
    self.session.$save(function() {
      $state.go('sessions'); 
    });
  };

  self.httpSave = function() {
    console.log("SessionsViewController httpSave ");
    console.dir(self.session);
    Server.save(self.session).then(
      function(data1){
        console.log("After save in controller ");
        console.dir(data1);
      });
  };

  self.httpGet = function() {
    console.log("SessionsViewController httpGet");
    Server.get().then(
      function(data1){
        console.dir(data1);
        self.sessions = data1.data;
        console.log("After get in controller ");
      });
  };
}).controller('SessionsEditController', function($scope, $state, $stateParams, Sessions, Server) {
  var self = this;
  self.updateSession = function() { 
    if(self.session.rememberMe) {

    }
    else {
      self.session.rememberMe = false;
    }
    self.session.$update(function() {
      $state.go('sessions'); 
    });
  };

  self.httpSave = function() {
    if(self.session.rememberMe) {

    }
    else {
      self.session.rememberMe = false;
    }
    console.log("SessionsEditController : " + self.session);
    Server.update(self.session).then(
      function(data1){
        console.log("After update in controller ");
        console.dir(data1);
      });
  }

  self.httpGet = function() {
    console.log("SessionsViewController httpGet");
    Server.get().then(
      function(data1){
        console.dir(data1);
        self.sessions = data1.data;
        console.log("After get in controller ");
      });
  };

  self.loadSession = function() { 
    self.session = Sessions.get({ id: $stateParams.id });
  };

  self.loadSession(); 
});