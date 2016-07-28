angular.module('shopnow.controllers')
.factory('customerService', ['$http', function($http){
	return {
		getCustomers: function() {
			return $http.get('/api/customers').then(function(res){
				return res.data;
			})
		},
		getPurchases: function() {
			return $http.get('/api/purchases').then(function(res){
				return res.data;
			})
		}
	};
}])