"use client";
import React, { createContext, useState, useContext } from "react";

const ChatHistoryContext = createContext();

export function ChatHistoryProvider({ children }) {
  const [chatHistory, setChatHistory] = useState([]);

  const addMessage = (message) => {
    setChatHistory((prevHistory) => [...prevHistory, message]);
  };

  const clearHistory = () => {
    setChatHistory([]);
  };

  return (
    <ChatHistoryContext.Provider
      value={{ chatHistory, addMessage, clearHistory }}
    >
      {children}
    </ChatHistoryContext.Provider>
  );
}

export function useChatHistory() {
  return useContext(ChatHistoryContext);
}
