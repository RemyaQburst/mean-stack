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
			name: 'meanApp.home',
			url: '/',
			views: {
                'content@': {
                    templateUrl: '../partials/home.html',
                    controller: 'listCtrl'
                }
            }
		});
	};
	angular.module('meanApp')
	.config(meanApp_Routes);
})();