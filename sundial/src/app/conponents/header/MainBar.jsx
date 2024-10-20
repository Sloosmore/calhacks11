import { ChevronLeft, ChevronRight, Cloud } from "lucide-react";
import { useDate } from "@/app/context/Date";
import { useState, useCallback, useEffect } from "react";

export default function MainHeader() {
  const { currentDate, navigateDay, setCurrentDate } = useDate();
  const [temperature, setTemperature] = useState(74);

  const handleScroll = useCallback(
    (event) => {
      const scrollThreshold = 100; // Adjust this value to change sensitivity
      if (event.deltaY > scrollThreshold) {
        navigateDay("next");
      } else if (event.deltaY < -scrollThreshold) {
        navigateDay("prev");
      }
    },
    [navigateDay]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const weekday = date.toLocaleString("en-US", { weekday: "long" });
    return { day, month, weekday };
  };

  return (
    <header className="p-4 pt-6 border-gray-200 min-w-[800px] mx-auto px-6">
      <div className="flex justify-between items-center border-b-2 px-6 pb-4">
        <div className="flex items-center w-[325px]">
          <button
            onClick={() => navigateDay("prev")}
            className="text-gray-400 hover:text-gray-800"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <h1 className="text-[1.5rem] font-bold flex-grow text-center">
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
          <span className="text-3xl font-bold">{temperature}°</span>
          <Cloud className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
}
