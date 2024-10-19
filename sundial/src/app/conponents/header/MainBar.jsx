"use client";

import { ChevronLeft, ChevronRight, Cloud } from "lucide-react";
import { useDate } from "@/app/context/Date";
import { useState } from "react";

export default function MainHeader() {
  const { currentDate, navigateDay } = useDate();
  const [temperature, setTemperature] = useState(74); // This would come from an API in a real app

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const weekday = date.toLocaleString("en-US", { weekday: "long" });
    return { day, month, weekday };
  };

  return (
    <header className="p-4 border-b border-gray-200 min-w-[800px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center w-[375px]">
          <button
            onClick={() => navigateDay("prev")}
            className="text-gray-400 hover:text-gray-800"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <h1 className="text-[1.65rem] font-bold flex-grow text-center">
            <span className="font-semibold">
              {formatDate(currentDate).month} {formatDate(currentDate).day}
            </span>
            <span className="text-gray-400 font-semibold">
              {" "}
              {formatDate(currentDate).weekday}
            </span>
          </h1>
          <button
            onClick={() => navigateDay("next")}
            className="text-gray-400 hover:text-gray-800"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center space-x-2 text-blue-500">
          <span className="text-4xl font-bold">{temperature}°</span>
          <Cloud className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
}
