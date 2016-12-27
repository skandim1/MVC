var module = angular.module("shopnow.controllers")
module.factory('authService', function(){

	
	return {
		
		// setUsername: function(username) {
		// 	this.user = username;
		// },
		// getUsername: function() {
		// 	return this.user;
		// },
		setStatus: function() {
			localStorage.setItem('isLoggedIn', true);
		},
		getStatus: function() {
			
			console.log(localStorage.getItem('isLoggedIn'));
			return localStorage.getItem('isLoggedIn');
			
		},
		setAdminStatus: function() {
			
			
			localStorage.setItem('isAdmin',true);
		},
		getAdminStatus: function() {

			return localStorage.getItem('isAdmin');
		},
		restoreDefaults: function(){

			localStorage.clear();
		}
	}
});