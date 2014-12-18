'use strict';

var app = angular.module('App');

app.factory('ApiService', function($http, Config) {
	var urlAPI = Config.API.urlAPI + 'produtos/';
	
	var _inserirProduto = function(produto) {
		return $http.post(urlAPI, produto);
	};
	var _atualizarProduto = function(produto) {
		return $http.put(urlAPI, produto);
	};
	var _excluirProduto = function(produto) {
		var params = {
				codigo: produto.codigo
		};
		return $http['delete'](urlAPI + produto.codigo, {params: params});
	};
	var _listarProdutos = function() {
		return $http.get(urlAPI);
	};
	
	return {
		inserirProduto: _inserirProduto,
		atualizarProduto: _atualizarProduto,
		excluirProduto: _excluirProduto,
		listarProdutos: _listarProdutos,
	};
});