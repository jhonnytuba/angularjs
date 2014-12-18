'use strict';

var app = angular.module('App');

app.controller('ChatCtrl', function($scope, $rootScope, Config, ApiService) {
	$scope.mensagens = [];

	var ws = new WebSocket(Config.API.urlWS);
	
	ws.onopen = function(evt) {
	};
	
	ws.onclose = function(evt) {
	};
	
	ws.onerror = function(evt) {
	};
	
	ws.onmessage = function(evt) {
		$scope.$apply(function () {
			$scope.mensagens.push(JSON.parse(evt.data));
		});
	};
	
	$scope.enviar = function(chatMensagem) {
		chatMensagem.usuario = new String(Math.random());
		ws.send(JSON.stringify(chatMensagem));

		delete $scope.chatMensagem;
	};
});