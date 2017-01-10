(function() {
	'use strict';
	
	var userService = function($http){
		return {
			addUser : function(data){
				return $http({
					method: 'POST',
					url: '/adduser',
					data: data
				})
			},
			getUsers : function(){
				return $http({
					method: 'GET',
					url: '/getusers'
				})
			},
			findUser : function(userName) {
				return $http({
					method: 'GET',
					url: '/finduser/' + userName,
				})
			},
			updateUser : function(data) {
				return $http({
					method: 'PUT',
					url: '/updateuser/' + data._userid,
					data: data
				})
			}
		}
	};
	userService.$inject = ["$http"];
	angular.module('meanApp')
		.factory('userService', userService);
})();
