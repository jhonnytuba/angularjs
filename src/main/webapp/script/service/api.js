'use strict';

var app = angular.module('App');

app.factory('ApiService', function($http, Config) {
	var urlProdutosAPI = Config.API.urlAPI + 'produtos/';
	var urlStatusAPI = Config.API.urlAPI + 'status/';
	
	var _inserirProduto = function(produto) {
		return $http.post(urlProdutosAPI, produto);
	};
	var _atualizarProduto = function(produto) {
		return $http.put(urlProdutosAPI, produto);
	};
	var _excluirProduto = function(produto) {
		var params = {
				codigo: produto.codigo
		};
		return $http['delete'](urlProdutosAPI + produto.codigo, {params: params});
	};
	var _listarProdutos = function() {
		return $http.get(urlProdutosAPI);
	};
	
	var _listarStatus = function() {
		return $http.get(urlStatusAPI);
	};
	
	return {
		inserirProduto: _inserirProduto,
		atualizarProduto: _atualizarProduto,
		excluirProduto: _excluirProduto,
		listarProdutos: _listarProdutos,
		
		listarStatus: _listarStatus
	};
});