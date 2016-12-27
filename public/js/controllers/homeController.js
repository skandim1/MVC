'use strict';
angular.module('shopnow.controllers',[])
.controller('homeController', ['$scope','authService', '$rootScope','$location',function($scope,authService,$rootScope,$location){
	// $rootScope.one = authService.getStatus();
	// $rootScope.two = authService.getAdminStatus();
	// $rootScope.$watch( $rootScope.one, function ( newValue ) {
	// 	console.log(newValue)
	// 	if (typeof newValue == 'undefined')
	// 		$scope.isLoggedIn = false;
	// 	else
 //    		$scope.isLoggedIn = newValue;
 //    	console.log($scope.isLoggedIn);
    
 //  	},true);
 //  	$rootScope.$watch( $rootScope.two, function ( newValue ) {
 //  		if (typeof newValue == 'undefined')
	// 		$scope.isAdmin = false;
	// 	else
 //    		$scope.isAdmin = newValue
 //    	console.log($scope.isAdmin);
    	    	
 //  	},true);

 	// if(localStorage.isLoggedIn == 'undefined')
 	// 	$scope.isLoggedIn = false;
 	// else
 	// 	$scope.isLoggedIn = $rootScope.isLoggedIn;
 	// if(localStorage.isLoggedIn == 'undefined')
 	// 	$scope.isLoggedIn = false;
 	// else
 	// 	$scope.isLoggedIn = $rootScope.isLoggedIn;
 	console.log(document.URL);
 	// $location.url("/user");
 	window.onunload = refreshParent;
    function refreshParent() {
        window.opener.location.href="/admin";
    }

}])
//why watch not working
//how to change angular service object 