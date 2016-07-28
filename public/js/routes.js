'use strict';
angular.module('shopnow',['ngRoute', 'shopnow.controllers', 'shopnow.directives', 'ui.bootstrap'])
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
	.when('/home',{
		templateUrl: 'template/home.html'	
	})
	.when('/admin',{
		resolve: {
			"check": function($location,authService) {
				if(!localStorage.isAdmin) {
					$location.url('/login');
				}
			}
		},
		templateUrl: 'template/admin.html',
		controller: 'adminController'
	}) 
	.when('/manage-category',{
		templateUrl: 'template/manage-category.html',
		controller: 'manageCategory'
	})
	.when('/add-department',{
		templateUrl: 'template/add-department.html'
		
	})
	.when('/user',{
		templateUrl: 'template/user.html',
		controller: 'userController'
	})
	.when('/customers',{
		templateUrl: 'template/customers.html',
		controller: 'customerController'
	})
	.when('/purchases',{
		templateUrl: 'template/purchases.html',
		controller: 'purchaseController'
	})   
}]);