package com.jhonatanserafim.angularjs.service;

import java.util.List;

public interface CRUDService<T> {

	public void inserir(T entity);
	
	public void atualizar(T entity);
	
	public void excluir(Long codigo);
	
	public T selecionar(Long codigo);
	
	public List<T> listar();
	
}