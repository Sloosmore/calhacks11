"use client";
import { Mic, Settings, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { useChatHistory } from "../context/ChatHistory";

export default function ChatInput({ className = "" }) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isInterfaceOpen, setIsInterfaceOpen] = useState(false);
  const { chatHistory, addMessage } = useChatHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Add user message to chat history
      addMessage({ isUser: true, content: inputValue.trim() });
      setInputValue("");
      setIsInterfaceOpen(true);

      try {
        // Simulate sending the message to your backend
        const response = await sendMessageToBackend(inputValue.trim());

        // Add AI response to chat history
        addMessage({ isUser: false, content: response });
      } catch (error) {
        console.error("Error sending message:", error);
        // Optionally add an error message to the chat history
        addMessage({
          isUser: false,
          content: "Sorry, I encountered an error. Please try again.",
        });
      }
    }
  };
  return (
    <div
      className={`flex items-center bg-gradient-to-b from-[#2A2A2A] to-[#1C1C1C] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] w-full max-w-2xl mx-auto sm:min-w-[600px] ${className}`}
    >
      <form onSubmit={handleSubmit} className="w-full">
        <div
          className={`flex items-center flex-grow bg-[#1C1C1C] rounded-full h-14 px-6 transition-shadow duration-300 ${
            isFocused
              ? "shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]"
              : "shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"
          }`}
        >
          <input
            type="text"
            placeholder="Type a task to auto-schedule"
            className="flex-grow bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
            aria-label="Type a task to auto-schedule"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="flex items-center space-x-4">
            <button type="submit" aria-label="Send message">
              <ArrowRight
                className="text-gray-400 w-6 h-6 hover:text-white transition-colors"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Voice input"
            >
              <Mic className="w-6 h-6" />
            </button>
            <button
              type="button"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
