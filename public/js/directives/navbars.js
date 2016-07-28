angular.module('shopnow.directives', [])
.directive('footerBar', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '../../template/footer.html'
	}
})
.directive('homeNavbar', function(){
	return {
		restrict: 'E',
		scope: {
			status: '=data'
		},
		replace: true,
		// controller: function($scope) {
		// 	if (!status) {

		// 	} else {
		// 		if()
		// 	}
		// },
		templateUrl: '../../template/homeNavBar.html'
	}
})
.directive('adminNavbar', function(){
	return {
		restrict: 'E',
		scope: {
			status: '=data'
		},
		controller: ['$scope','authService', '$location', function($scope,authService,$location){
			$scope.logout = function() {
				authService.restoreDefaults();
				$location.url('/login');
				
			}
		}],
		replace: true,
		templateUrl: '../../template/adminNavBar.html'
	}
})
.directive('userNavbar', function(){
	return {
		restrict: 'E',
		scope: {
			status: '=data'
		},
		replace: true,
		templateUrl: '../../template/userNavBar.html'
	}
})