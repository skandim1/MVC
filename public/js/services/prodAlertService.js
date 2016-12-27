'use strict';
var module = angular.module('shopnow.controllers')
module.factory('prodAlertService', ['$http', function($http){
	return {
		getDepartments: function(){
			return $http.get('/api/departments').then(function(res){
					return res.data;
			})
		},
		getProducts: function(dept_name){
			return $http.get('/api/products'+dept_name).then(function(res){
					return res.data;
			})
		},
		deleteDepartment: function(dept_name){
			return $http.get('/api/delete'+dept_name).then(function(res){
					return res.data;
			})
		}
	}
}]);