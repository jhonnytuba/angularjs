'use strict';

var app = angular.module('App', [ 'ngRoute', 'pascalprecht.translate', 'tmh.dynamicLocale', 'currencyMask' ]);

app.run(function($rootScope, $translate, tmhDynamicLocale) {
	$rootScope.dataHoje = new Date();
	
	$rootScope.mudarLinguagem = function(key) {
		$translate.use(key);
		tmhDynamicLocale.set(key);
	};
	$rootScope.mudarLinguagem('pt-br');
	
	$rootScope.addMsgSucesso = function(msgSucesso) {
		$rootScope.msgSucesso = msgSucesso;
		
		setTimeout(function() {
			$rootScope.$apply(function () {
				delete $rootScope.msgSucesso;
			});
		}, 4000);
	};
	
	$rootScope.valor = 51122.34;
});
