'use strict';
angular.module('shopnow',['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'template/login.html'
	})
	.when('/signup',{
		templateUrl: 'template/signup.html'
	}) 
}]);

