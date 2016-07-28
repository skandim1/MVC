'use strict';
angular.module('shopnow.controllers')
.controller('adminController', ['$scope', 'prodAlertService', function($scope,prodAlertService){
	var products = [];
	prodAlertService.getDepartments().then(function(res){
		//promises = [];
		// $scope.departments = res;
		angular.forEach(res, function(value, key){
			console.log(value.dept_name);
			prodAlertService.getProducts(value.dept_name).then(function(response) {
				var key = value.dept_name;
				var Obj = {};
				Obj[key] = response
				products.push(Obj);
				console.log(Obj);

			});
		});
		
	});
	$scope.productsAlert = products;
	
}])
// .aHrefSanitizationWhitelist(/^\s*(https?|file|ftp|blob):|data:image\//);