var app = angular.module('app', ['ui.router', 'ngResource']);

app.config(function($stateProvider) {
  $stateProvider.state('sessions', { // state for showing all session
    url: '/sessions',
    templateUrl: 'partials/sessions.html',
    controller: 'SessionsListController',
    controllerAs: 'sessionList'
  }).state('viewSession', { //state for showing single session
    url: '/sessions/:id/view',
    templateUrl: 'partials/sessions-view.html',
    controller: 'SessionsViewController',
    controllerAs: 'sessionView'
  }).state('newSession', { //state for adding a new session
    url: '/sessions/new',
    templateUrl: 'partials/sessions-add.html',
    controller: 'SessionsCreateController',
    controllerAs: 'sessionMain'
  }).state('editSession', { //state for updating a session
    url: '/sessions/:id/edit',
    templateUrl: 'partials/sessions-edit.html',
    controller: 'SessionsEditController',
    controllerAs: 'sessionMain'
  });
}).run(function($state) {
  $state.go('sessions'); //make a transition to movies state when app starts
});