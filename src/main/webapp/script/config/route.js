'use strict';

var app = angular.module('App');

app.config(function($routeProvider, $translateProvider, tmhDynamicLocaleProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/inicio.html'
		})
		.when('/produtos', {
			templateUrl: 'pages/produtos.html',
			controller: 'ProdutoCtrl'
		})
		.when('/chat/:usuario?', {
			templateUrl: 'pages/chat.html',
			controller: 'ChatCtrl'
		});
});
