'use strict';
var module = angular.module('shopnow.controllers')
module.controller('loginController', ['loginService','authService','$scope', '$location','$window', '$http',function(loginService,authService,$scope,$location,$window,$http){
	$scope.login = function(user) {
		//console.log(user);

		// loginService.setuser(user).then(function(res){
	
		// 	if (res == "error") {
		// 		$scope.message = "Invalid Username/Password !!";
		// 		$scope.danger = true;
		// 	} 
		// 	else if(res == "success") {
		// 		// authService.setUsername(user.name);
		// 		authService.setStatus();
				
		// 		if (user.name == "shivareddykandimalla@gmail.com") {
		// 			authService.setAdminStatus();
		// 			$location.url("/admin");
		// 		} else {
		// 			$location.url("/user");
		// 		}
		// 	}

		// });

		$window.open("https://api.imgur.com/oauth2/authorize?client_id="+"172f70df6a2e218"+"&response_type=token", "Sample", "width=500,height=700");
		// $http.get('https://api.imgur.com/oauth2/authorize', {'client_id':'172f70df6a2e218', 'response_type':'token'}).then(function(response){
		// 	console.log(response);
		// });

		// 172f70df6a2e218
		// 3336265c9afaa395e19a1c085adff42b8746ca26
	};
	
}]);
