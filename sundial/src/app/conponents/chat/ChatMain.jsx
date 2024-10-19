"use client";
import { Mic, Settings, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { useChatHistory } from "../../context/ChatHistory";
import ChatInput from "./ChatInput";

export default function DynamicIsland() {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { chatHistory, addMessage, clearHistory } = useChatHistory();

  return (
    <div className="bg-[#2A2A2A] flex flex-col text-white rounded-3xl flex shadow-lg mb-5 mx-auto">
      {Array.isArray(chatHistory) && chatHistory.length > 0 && (
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Find times for a{" "}
              <span className="text-[#7DD3FC]">meeting with Brandon</span>{" "}
              tomorrow
            </h2>
            <button
              className="text-gray-400 hover:text-white transition-colors"
              onClick={clearHistory}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-4 mb-6 max-w-[600px]">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 ${
                  message.isUser ? "justify-end" : ""
                }`}
              >
                {!message.isUser && (
                  <div className="w-10 h-10 rounded-full bg-[#1E40AF] flex-shrink-0" />
                )}
                <div
                  className={`${
                    message.isUser ? "bg-[#7DD3FC] text-black" : "bg-[#3F3F3F]"
                  } rounded-2xl p-3 max-w-[80%]`}
                >
                  <p>{message.content}</p>
                </div>
                {message.isUser && (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <ChatInput />
    </div>
  );
}
