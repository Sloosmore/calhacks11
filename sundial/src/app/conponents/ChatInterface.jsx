import React from "react";
import { X } from "lucide-react";

const ChatInterface = ({ chatHistory, onClose }) => {
  return (
    <div className="absolute bottom-full left-0 right-0 bg-[#2A2A2A] rounded-t-2xl shadow-lg mb-2 p-4 max-h-96 overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
        aria-label="Close chat interface"
      >
        <X size={20} />
      </button>
      <div className="space-y-4"></div>
    </div>
  );
};

export default ChatInterface;
