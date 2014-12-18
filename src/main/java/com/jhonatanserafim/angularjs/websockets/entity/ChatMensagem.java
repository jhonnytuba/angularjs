package com.jhonatanserafim.angularjs.websockets.entity;

/**
 * @author jhonatan.serafim
 *
 */
public class ChatMensagem {

    private String usuario;
    private String descricao;

    private ChatMensagem(String usuario) {
        this.usuario = usuario;
        this.descricao = "";
    }
    
    public static ChatMensagem of(String usuario) {
        return new ChatMensagem(usuario);
    }
    
    public ChatMensagem withDescricao(String descricao) {
        setDescricao(descricao);
        return this;
    }
    
    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String mensagem) {
        this.descricao = mensagem;
    }

}