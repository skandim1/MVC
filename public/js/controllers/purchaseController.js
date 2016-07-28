angular.module('shopnow.controllers')
.controller('purchaseController', ['$scope', 'customerService', function($scope,customerService){
	customerService.getPurchases().then(function(res){
        $scope.data = res;
    });
}])