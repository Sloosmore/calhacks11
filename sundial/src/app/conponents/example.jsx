import { Mic, Settings, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex items-center bg-gradient-to-b from-[#2A2A2A] to-[#1C1C1C] rounded-full h-16 shadow-[0_2px_10px_rgba(0,0,0,0.1)] w-full max-w-2xl mx-auto p-1">
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
        />
        <div className="flex items-center space-x-4">
          <ArrowRight className="text-gray-400 w-6 h-6" aria-hidden="true" />
          <button
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Voice input"
          >
            <Mic className="w-6 h-6" />
          </button>
          <button
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Settings"
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
