app.factory('Sessions', function($resource) {
  return $resource('http://localhost:3000/sessions/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});

app.factory('Server', function($http) {
	var service = {};
	var baseUrl = "http://localhost:3000/";

    service.save = function(session) {
    	console.log("Server save : " + session);
    	var promise = $http.post(baseUrl + "sessions", session)
    		.then(
    		function(data) {
    			console.dir("success : ");
    			return data;
    		},
    		function(data){
    			console.dir("failure : ");
    			return data;
    		});
    	return promise;
    }

    service.update = function(session) {
        console.log("Server save : " + session);
        var promise = $http.put(baseUrl + "sessions/" + session.id, session)
            .then(
            function(data) {
                console.dir("success : ");
                return data;
            },
            function(data){
                console.dir("failure : ");
                return data;
            });
        return promise;
    }

    service.get = function() {
    	var promise = $http.get(baseUrl + "sessions")
    		.then(
    		function(data) {
    			console.dir("success : ");
    			return data;
    		},
    		function(data){
    			console.dir("failure : ");
    			return data;
    		});
    	return promise;
    }
    return service;
});