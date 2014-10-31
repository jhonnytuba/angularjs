var app = angular.module('App');

app.factory('ApiService', function($http) {
	var _inserirProduto = function(produto) {
		return $http.post('rest/produtos', produto);
	};
	var _atualizarProduto = function(produto) {
		return $http.put('rest/produtos', produto);
	};
	var _excluirProduto = function(produto) {
		var params = {
				codigo: produto.codigo
		};
		
		return $http['delete']('rest/produtos/' + produto.codigo, {params: params});
	};
	var _listarProdutos = function() {
		return $http.get('rest/produtos');
	};
	
	return {
		inserirProduto: _inserirProduto,
		atualizarProduto: _atualizarProduto,
		excluirProduto: _excluirProduto,
		listarProdutos: _listarProdutos,
	};
});