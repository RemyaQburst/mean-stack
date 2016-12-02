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
		}).state({
			name: 'meanApp.register',
			url: '/register',
			views: {
                'content@': {
                    templateUrl: '../partials/register.html',
				    controller: 'signupCtrl'
                }
            }
		}).state({
			name: 'meanApp.login',
			url: '/login',
			views: {
                'content@': {
                    templateUrl: '../partials/login.html',
				    controller: 'loginCtrl'
                }
            }
		});
	};
	angular.module('meanApp')
	.config(meanApp_Routes);
})();