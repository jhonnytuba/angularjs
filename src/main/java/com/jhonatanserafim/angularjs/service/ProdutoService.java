package com.jhonatanserafim.angularjs.service;

import javax.ejb.Local;

import com.jhonatanserafim.angularjs.entity.Produto;

@Local
public interface ProdutoService extends CRUDService<Produto> {

}