angular.module('shopnow.controllers')
.controller('customerController', ['$scope','customerService', function($scope,customerService){

	customerService.getCustomers().then(function(res){
        $scope.data = res;
    });
}])