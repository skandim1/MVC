'use strict';
var module = angular.module('shopnow.controllers')
module.controller('loginController', ['loginService','authService','$scope', '$location', function(loginService,authService,$scope,$location){
	$scope.login = function(user) {
		//console.log(user);

		loginService.setuser(user).then(function(res){
			console.log(res);
			if (res == "error") {
				$scope.message = "Invalid Username/Password !!";
				$scope.danger = true;
			} 
			else if(res == "success") {
				// authService.setUsername(user.name);
				authService.setStatus();
				if (user.name == "shivareddykandimalla@gmail.com") {
					authService.setAdminStatus();
					$location.url("/admin");
				} else {
					$location.url("/user");
				}
			}

		});
	};
	
}]);
