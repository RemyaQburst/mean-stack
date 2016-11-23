(function() {
	'use strict';
	var listCtrl = function($scope, userService) {
		$scope.user = {}
		$scope.getUsers = function() {
			userService.getUsers().then(function(response){
				$scope.users = response.data;
				debugger
			},function(error){
				debugger;
			});
		}
		$scope.getUsers();
	}
	listCtrl.$inject = ["$scope", "userService"];
	angular.module('meanApp')
		.controller('listCtrl', listCtrl);
})();