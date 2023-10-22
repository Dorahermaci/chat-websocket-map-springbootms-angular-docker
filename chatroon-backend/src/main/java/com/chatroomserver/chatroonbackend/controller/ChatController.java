package com.chatroomserver.chatroonbackend.controller;

import com.chatroomserver.chatroonbackend.model.Message;

import com.chatroomserver.chatroonbackend.repositories.MessageRepository;
import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;

import org.springframework.messaging.handler.annotation.SendTo;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class ChatController {

    private SimpMessagingTemplate simpMessagingTemplate;
    private MessageRepository messageRepository;



    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public Message receiveMessage(@RequestBody Message message) throws InterruptedException {
        messageRepository.save(message);
        return message;
    }

    @MessageMapping("/private-message")
    public Message privateMessage(@RequestBody Message message){
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(),"/private",message);
        return message;
    }

    @GetMapping("hello")
    public String sayHello(){
        return "hello";
    }

}