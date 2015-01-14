'use strict';

var app = angular.module('App', [ 'ngRoute', 'pascalprecht.translate', 'tmh.dynamicLocale', 'currencyMask', 'directive.g+signin' ]);

app.run(function($rootScope, $translate, tmhDynamicLocale) {
	$rootScope.dataHoje = new Date();
	$rootScope.key = 'pt-br';
	
	$rootScope.mudarLinguagem = function(key) {
		$translate.use(key);
		tmhDynamicLocale.set(key);
		$rootScope.key = key;
	};
	
	$rootScope.mudarLinguagem($rootScope.key);
	
	$rootScope.addMsgSucesso = function(msgSucesso) {
		$rootScope.msgSucesso = msgSucesso;
		
		setTimeout(function() {
			$rootScope.$apply(function () {
				delete $rootScope.msgSucesso;
			});
		}, 4000);
	};
	
	$rootScope.$on('event:google-plus-signin-success', function(event, authResult) {
		console.log('Signed in!');
		console.log(authResult);
	});
	$rootScope.$on('event:google-plus-signin-failure', function(event, authResult) {
		console.log('Not signed into Google Plus.');
	});
});
