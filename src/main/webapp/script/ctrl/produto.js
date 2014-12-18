'use strict';

var app = angular.module('App');

app.controller('ProdutoCtrl', function($scope, $rootScope, ApiService) {
	var listarProdutos = function() {
		ApiService.listarProdutos().success(function($data) {
			$scope.produtos = $data;
		});
	};
	
	$scope.cancelarProduto = function() {
		delete $scope.produtoForm.$setPristine();
		delete $scope.produto;
	};
	
	$scope.salvarProduto = function(produto) {
		var service = null;
		
		if (produto.codigo) {
			service = ApiService.atualizarProduto(produto);
		} else {
			service = ApiService.inserirProduto(produto);
		}
		
		service.success(function() {
			$scope.cancelarProduto();
			
			$rootScope.addMsgSucesso("PRODUTO_SALVO_COM_SUCESSO");
			
			listarProdutos();
		});
	};
	
	$scope.alterarProduto = function(produto) {
		$scope.produto = angular.copy(produto);
	};
	
	$scope.excluirProduto = function(produto) {
		ApiService.excluirProduto(produto).success(function() {
			listarProdutos();
			
			$rootScope.addMsgSucesso("PRODUTO_EXCLUIDO_COM_SUCESSO");
		});
	};
	
	listarProdutos();
});