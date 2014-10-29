package com.jhonatanserafim.angularjs.service.impl;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.jhonatanserafim.angularjs.service.CRUDService;

public class CRUDServiceImpl<T> implements CRUDService<T>, Serializable {

	private static final long serialVersionUID = 1L;

	@PersistenceContext(unitName="angularjs")
	protected EntityManager em;
	
	protected Class<T> clazz;
	
	@SuppressWarnings("unchecked")
	public CRUDServiceImpl() {
		clazz = (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
	}
	
	public void inserir(T entity) {
		em.persist(entity);
	}
	
	public void atualizar(T entity) {
		em.merge(entity);
	}
	
	public void excluir(Long codigo) {
		em.remove(em.find(clazz, codigo));
	}
	
	public T selecionar(Long codigo) {
		return em.find(clazz, codigo);
	}
	
	public List<T> listar() {
		return em.createQuery("from " + clazz.getName(), clazz).getResultList();
	}
	
}