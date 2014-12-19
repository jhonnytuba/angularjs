package com.jhonatanserafim.angularjs.websockets.decoder;

import java.io.StringReader;

import javax.json.Json;
import javax.json.JsonObject;
import javax.websocket.DecodeException;
import javax.websocket.Decoder;
import javax.websocket.EndpointConfig;

import com.jhonatanserafim.angularjs.websockets.entity.ChatMensagem;

public class ChatMensagemDecoder implements Decoder.Text<ChatMensagem> {

    @Override
    public void destroy() {
    }

    @Override
    public void init(EndpointConfig config) {
    }

    @Override
    public ChatMensagem decode(String s) throws DecodeException {
        JsonObject jsonObject = Json.createReader(new StringReader(s)).readObject();
        
        String usuario = "Anônimo";
        
        if (jsonObject.containsKey("usuario")) {
            usuario = jsonObject.getString("usuario");
        }
        
        return ChatMensagem.of(usuario)
                .withDescricao(jsonObject.getString("descricao"));
    }

    @Override
    public boolean willDecode(String arg0) {
        return true;
    }

}
