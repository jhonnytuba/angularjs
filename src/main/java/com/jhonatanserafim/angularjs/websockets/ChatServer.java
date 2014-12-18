package com.jhonatanserafim.angularjs.websockets;

import java.io.IOException;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.websocket.CloseReason;
import javax.websocket.EncodeException;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import com.jhonatanserafim.angularjs.websockets.decoder.ChatMensagemDecoder;
import com.jhonatanserafim.angularjs.websockets.encoder.ChatMensagemEncoder;
import com.jhonatanserafim.angularjs.websockets.entity.ChatMensagem;

@ServerEndpoint(value="/server",
    encoders=ChatMensagemEncoder.class,
    decoders=ChatMensagemDecoder.class)
public class ChatServer {
    
    private final Logger logger = Logger.getLogger(getClass().getName());
    
    @OnOpen
    public void onOpen(Session session) {
        enviarMensagem(session, ChatMensagem.of("Servidor").withDescricao("Seja Bem vindo!"));
    }

    @OnMessage
    public void onMessage(ChatMensagem chatMensagem, Session session) {
        enviarMensagem(session.getOpenSessions(), chatMensagem);
    }
    
    @OnClose
    public void onClose(CloseReason closeReason) {
    }
    
    @OnError
    public void onError(Throwable throwable) {
    }
    
    private void enviarMensagem(Set<Session> sessions, ChatMensagem mensagem) {
        sessions.forEach(s -> enviarMensagem(s, mensagem));
    }
    
    private void enviarMensagem(Session session, ChatMensagem mensagem) {
        try {
            session.getBasicRemote().sendObject(mensagem);
        } catch (IOException | EncodeException e) {
            logger.log(Level.WARNING, e.getMessage());
        }
    }
    
}