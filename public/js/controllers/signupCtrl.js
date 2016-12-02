(function() {
	'use strict';
	var signupCtrl = function($scope, userService) {
		$scope.user = {}
		$scope.register = function() {
			console.log($scope.user);
			userService.register($scope.user).then(function(response){
				debugger;
			},function(error){
				debugger;
			});
		}
	}
	signupCtrl.$inject = ["$scope", "userService"];
	angular.module('meanApp')
		.controller('signupCtrl', signupCtrl);
})();