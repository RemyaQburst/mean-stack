(function() {
	'use strict';
	var meanApp_Routes = function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state({
			name: 'meanApp',
			url: '',
			abstract: true,
			views: {
                'header': {
                    templateUrl: '../partials/header.html'
                }
            }
		}).state({
			name: 'meanApp.login',
			url: '/',
			views: {
                'content@': {
                    templateUrl: '../partials/login.html'
                }
            }
		});
	};
	angular.module('meanApp')
	.config(meanApp_Routes);
})();