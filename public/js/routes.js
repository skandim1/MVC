'use strict';
angular.module('shopnow',['ngRoute', 'shopnow.controllers'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'template/login.html',
		controller: 'loginController'
	})
	.when('/signup',{
		templateUrl: 'template/signup.html',
		controller: 'signupController'
	}) 
}]);