'use strict';

var app = angular.module('App');

app.controller('ChatCtrl', function($scope, $rootScope, $routeParams, $filter, Config, ApiService) {
	$scope.mensagens = [];
	
	var receberMensagem = function(evt) {
		return JSON.parse(evt.data);
	};
	
	var enviarMensagem = function(descricao) {
		if (!descricao) return;
		
		var chatMensagem = {};
		chatMensagem.usuario = $routeParams.usuario;
		chatMensagem.descricao = descricao;
		
		ws.send(JSON.stringify(chatMensagem));
	};
	
	var ws = new WebSocket(Config.API.urlWS)
	
	ws.onopen = function(evt) {
		enviarMensagem($filter('translate')('ENTROU_CHAT'));
	};
	
	ws.onerror = function(evt) {
		console.log("Errouuu...");
		console.log(evt);
		console.log("");
	};
	
	ws.onmessage = function(evt) {
		var elementAutoScroll = $('.container-chat');
		var autoscroll = (elementAutoScroll.scrollTop() + elementAutoScroll.height()) == elementAutoScroll[0].scrollHeight;
		
		$scope.$apply(function () {
			$scope.mensagens.push(receberMensagem(evt));
		});
		
		if (autoscroll) {
			elementAutoScroll.scrollTop(elementAutoScroll[0].scrollHeight);
		}
	};
	
	$scope.enviarMensagem = function(descricao) {
		enviarMensagem(descricao);
		delete $scope.descricao;
	};
});