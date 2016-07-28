'use strict';
angular.module('shopnow.controllers',[])
.controller('homeController', ['$scope','authService', '$rootScope',function($scope,authService,$rootScope){
	$scope.one = authService.getStatus();
	$scope.two = authService.getAdminStatus();
	$scope.$watch( authService.getStatus(), function ( newValue ) {
		console.log(newValue)
		if (typeof newValue == 'undefined')
			$scope.isLoggedIn = false;
		else
    		$scope.isLoggedIn = newValue;
    	console.log($scope.isLoggedIn);
    
  	},true);
  	$scope.$watch( authService.getAdminStatus(), function ( newValue ) {
  		if (typeof newValue == 'undefined')
			$scope.isAdmin = false;
		else
    		$scope.isAdmin = newValue
    	console.log($scope.isAdmin);
    	    	// if I reload the page this is not working
  	},true);
	 // $scope.isLoggedIn = authService.getStatus();

	$scope.title = 'I am here';

	// $scope.logout = function () {
 //      		authService.restoreDefaults();
 //      		$location.url('/');
	// }
}])
