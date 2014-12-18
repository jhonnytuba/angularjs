package com.jhonatanserafim.angularjs.websockets.encoder;

import javax.json.Json;
import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

import com.jhonatanserafim.angularjs.websockets.entity.ChatMensagem;

public class ChatMensagemEncoder implements Encoder.Text<ChatMensagem> {

    @Override
    public void destroy() {
    }

    @Override
    public void init(EndpointConfig config) {
    }

    @Override
    public String encode(ChatMensagem mensagem) throws EncodeException {
        return Json.createObjectBuilder()
                .add("usuario", mensagem.getUsuario())
                .add("descricao", mensagem.getDescricao())
                .build().toString();
    }

}
