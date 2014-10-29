package com.jhonatanserafim.angularjs.service.impl;

import javax.ejb.Stateless;

import com.jhonatanserafim.angularjs.entity.Produto;
import com.jhonatanserafim.angularjs.service.ProdutoService;

@Stateless
public class ProdutoServiceImpl extends CRUDServiceImpl<Produto> implements ProdutoService {

	private static final long serialVersionUID = 1L;
	
}