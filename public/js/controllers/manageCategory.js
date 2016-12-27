angular.module('shopnow.controllers')
.controller('manageCategory', ['$scope','prodAlertService', function($scope,prodAlertService){

	prodAlertService.getDepartments().then(function(res){
        $scope.data = res;
    });
	
    $scope.delete = function(dept_name){
    	
    }
    $scope.add = function(dept_name){
    	
    }
}])
