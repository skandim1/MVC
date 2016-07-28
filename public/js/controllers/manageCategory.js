angular.module('shopnow.controllers')
.controller('manageCategory', ['$scope','prodAlertService', function($scope,prodAlertService){

	prodAlertService.getdepartments().then(function(res){
        $scope.data = res;
    });
}])