package com.jhonatanserafim.angularjs.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.jhonatanserafim.angularjs.service.CRUDService;

@Consumes(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
public abstract class CRUDRest<T> {
	
	@POST
	public void inserir(T entity) {
		getService().inserir(entity);
	}
	
	@PUT
	public void atualizar(T entity) {
		getService().atualizar(entity);
	}
	
	@DELETE
	@Path("{codigo}")
	public void excluir(@PathParam("codigo") Long codigo) {
		getService().excluir(codigo);
	}
	
	@GET
	@Path("{codigo}")
	public T selecionar(@PathParam("codigo") Long codigo) {
		return getService().selecionar(codigo);
	}
	
	@GET
	public List<T> listar() {
		return getService().listar();
	}
	
	public abstract CRUDService<T> getService();

}