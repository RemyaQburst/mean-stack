(function() {
	'use strict';
	var listCtrl = function($scope, userService) {
		$scope.user = {};
		$scope.addEmpForm = true;
		$scope.editEmpForm = false;
		$scope.getUsers = function() {
			userService.getUsers().then(function(response){
				$scope.users = response.data;
			},function(error){
				$scope.errors = error;
			});
		}
		$scope.addUser = function() {
			$scope.errors = [];
			userService.addUser($scope.emp).then(function(response){
				if(response.data.errors) {
					angular.forEach(response.data.errors, function(value, key) {
						$scope.errors.push(value.message);
					});
				}
				else {
					$scope.emp = {};
					$scope.users.push(response.data);
				}
			},function(error){
				$scope.errors = error;
			});
		}
		$scope.findUser = function() {
			userService.findUser($scope.searchText).then(function(response){
				if(response.data.errors) {
					angular.forEach(response.data.errors, function(value, key) {
						$scope.errors.push(value.message);
					});
				}
				else {
					$scope.users = response.data;
				}
			});
		}
		$scope.editUser = function(user) {
			$scope.addEmpForm = false;
			$scope.editEmpForm = true;
			$scope.emp = angular.copy(user);
			$scope.errors = [];
		}
		$scope.cancelUpdate = function() {
			$scope.addEmpForm = true;
			$scope.editEmpForm = false;
			$scope.emp = {};
		}
		$scope.updateUser = function() {
			userService.updateUser($scope.emp).then(function(response){
				if(response.data.errors) {
					angular.forEach(response.data.errors, function(value, key) {
						$scope.errors.push(value.message);
					});
				}
				else {
					if(response.data == "succesfully saved") {
						$scope.emp = 
					}
				}
			},function(error){
				$scope.errors = error;
			});
		}
		$scope.getUsers();
	}
	listCtrl.$inject = ["$scope", "userService"];
	angular.module('meanApp')
		.controller('listCtrl', listCtrl);
})();