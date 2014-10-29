package com.jhonatanserafim.angularjs.rest;

import javax.inject.Inject;
import javax.ws.rs.Path;

import com.jhonatanserafim.angularjs.entity.Produto;
import com.jhonatanserafim.angularjs.service.CRUDService;
import com.jhonatanserafim.angularjs.service.ProdutoService;

@Path("produtos")
public class ProdutoRest extends CRUDRest<Produto> {
	
	@Inject
	private ProdutoService produtoService;

	@Override
	public CRUDService<Produto> getService() {
		return produtoService;
	}
	
}