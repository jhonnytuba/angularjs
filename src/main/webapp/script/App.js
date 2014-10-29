var app = angular.module('App', [ 'pascalprecht.translate', 'tmh.dynamicLocale', 'currencyMask' ]);

app.config(function($translateProvider, tmhDynamicLocaleProvider) {
	$translateProvider.translations('pt-br', {
		NOME_APLICACAO: 'Exemplo de AngularJS',
		NENHUM_REGISTRO: 'Nenhum registro.',
		OPCOES: 'Opções',
		DOWNLOAD_CODIGO_FONTE: 'Baixar o Código Fonte',
		
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
	});
	
	$translateProvider.translations('en', {
		NOME_APLICACAO: 'Example AngularJS',
		NENHUM_REGISTRO: 'No records.',
		OPCOES: 'Options',
		DOWNLOAD_CODIGO_FONTE: 'Donwload the Source Code',
		
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
	});
	
	tmhDynamicLocaleProvider.localeLocationPattern('lib/dependencies/angular-locale_{{locale}}.js');
});

app.run(function($rootScope, $translate, tmhDynamicLocale) {
	$rootScope.mudarLinguagem = function(key) {
		$translate.use(key);
		tmhDynamicLocale.set(key);
	};
	
	$rootScope.mudarLinguagem('pt-br');
});