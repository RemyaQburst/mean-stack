(function() {
	'use strict';
	var loginCtrl = function($scope, userService) {
		$scope.user = {}
		$scope.login = function() {
			console.log($scope.user);
			userService.login($scope.user).then(function(response){
				debugger;
			},function(error){
				debugger;
			});
		}
	}
	loginCtrl.$inject = ["$scope", "userService"];
	angular.module('meanApp')
		.controller('loginCtrl', loginCtrl);
})();