package com.jhonatanserafim.angularjs.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity(name = "PRODUTO")
public class Produto implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CD_PRODUTO")
	private Long codigo;
	
	@NotNull
	@Column(name = "DS_NOME", nullable = false)
	private String nome;
	
	@NotNull
	@Column(name = "VL_PRECO", nullable = false, length = 13, precision = 2)
	private Double preco;
	
	@NotNull
	@Column(name = "NU_ESTOQUE", nullable = false)
	private Integer estoque;
	
	public Long getCodigo() {
		return codigo;
	}
	
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public Double getPreco() {
		return preco;
	}
	
	public void setPreco(Double preco) {
		this.preco = preco;
	}
	
	public Integer getEstoque() {
		return estoque;
	}
	
	public void setEstoque(Integer estoque) {
		this.estoque = estoque;
	}
	
}