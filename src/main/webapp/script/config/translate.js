'use strict';

var app = angular.module('App');

app.config(function($translateProvider) {
	$translateProvider.translations('pt-br', {
		NOME_APLICACAO: 'Exemplo de AngularJS',
		NENHUM_REGISTRO: 'Nenhum registro.',
		OPCOES: 'Opções',
		DOWNLOAD_CODIGO_FONTE: 'Baixar o Código Fonte',
		MENU: 'Menu',
		COPYRIGHT: '© {{ano}} Jhonatan Serafim',
		
		SALVAR_MODAL: 'Salvar',
		CANCELAR_MODAL: 'Cancelar',
		FECHAR_MODAL: 'Fechar',
		
		PRODUTOS: 'Produtos',
		ADICIONAR_PRODUTO: 'Adicionar Produto',
		ALTERAR_PRODUTO: 'Alterar Produto',
		EXCLUIR_PRODUTO: 'Excluir Produto',
		NOME_PRODUTO: 'Nome',
		ESTOQUE_PRODUTO: 'Estoque',
		PRECO_PRODUTO: 'Preço',
		PRODUTO_SALVO_COM_SUCESSO: 'Produto salvo com sucesso.',
		PRODUTO_EXCLUIDO_COM_SUCESSO: 'Produto excluído com sucesso.',
		
		CHAT: 'Chat',
	});
	
	$translateProvider.translations('en', {
		NOME_APLICACAO: 'Example AngularJS',
		NENHUM_REGISTRO: 'No records.',
		OPCOES: 'Options',
		DOWNLOAD_CODIGO_FONTE: 'Donwload the Source Code',
		MENU: 'Menu',
		COPYRIGHT: '© {{ano}} Jhonatan Serafim',
		
		SALVAR_MODAL: 'Save',
		CANCELAR_MODAL: 'Cancel',
		FECHAR_MODAL: 'Close',
		
		PRODUTOS: 'Products',
		ADICIONAR_PRODUTO: 'Add Product',
		ALTERAR_PRODUTO: 'Update Product',
		EXCLUIR_PRODUTO: 'Remove Product',
		NOME_PRODUTO: 'Name',
		ESTOQUE_PRODUTO: 'Stock',
		PRECO_PRODUTO: 'Price',
		PRODUTO_SALVO_COM_SUCESSO: 'Product successfully saved.',
		PRODUTO_EXCLUIDO_COM_SUCESSO: 'Product successfully deleted.',
		
		CHAT: 'Chat',
	});
});