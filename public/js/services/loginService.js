'use strict';
var module = angular.module('shopnow.controllers')
module.factory('loginService', ['$http', function($http){
	return {
		setuser: function(user){
			return $http.post('/api/login', user).then(function(res){

					return res.data;
			})
	}
}
}]);