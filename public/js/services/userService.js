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
			getUsers : function(){
				return $http({
					method: 'GET',
					url: '/getusers'
				})
			}
		}
	};
	userService.$inject = ["$http"];
	angular.module('meanApp')
		.factory('userService', userService);
})();
