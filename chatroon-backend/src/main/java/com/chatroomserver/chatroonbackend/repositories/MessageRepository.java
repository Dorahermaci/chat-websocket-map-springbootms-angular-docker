package com.chatroomserver.chatroonbackend.repositories;

import com.chatroomserver.chatroonbackend.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
