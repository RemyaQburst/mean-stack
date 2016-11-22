(function() {
	'use strict';
	
	var userService = function($http){
		return {
			register : function(data){
				return $http({
					method: 'POST',
					url: '/register',
					data: data
				})
			},
			login : function(data){
				return $http({
					method: 'GET',
					url: '/login',
					data: data
				})
			}
		}
	};
	userService.$inject = ["$http"];
	angular.module('meanApp')
		.factory('userService', userService);
})();
