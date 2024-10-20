"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { DateProvider, useDate } from "./Date";
import { data as initialCalendarData } from "../conponents/schedule/data";

const CalendarContext = createContext();

export function CalendarProvider({ children }) {
  const [globalCalendarData, setGlobalCalendarData] =
    useState(initialCalendarData);
  const [currentDaySchedule, setCurrentDaySchedule] = useState([]);
  const { currentDate } = useDate();

  useEffect(() => {
    syncCurrentDaySchedule();
  }, [currentDate, globalCalendarData]);

  const syncCurrentDaySchedule = () => {
    const dateString = currentDate.toISOString().split("T")[0];
    const weekStart = new Date(currentDate);
    weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() - 1 + 7) % 7));
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);

    const weekKey = `${weekStart.toISOString().split("T")[0]}/${
      weekEnd.toISOString().split("T")[0]
    }`;

    console.log("Current date:", dateString);
    console.log("Week key:", weekKey);
    console.log("Global calendar data:", globalCalendarData);

    const week = globalCalendarData[weekKey];

    console.log("week", week);

    const daySchedule = globalCalendarData[weekKey]?.[dateString] || [];
    console.log("Day schedule:", daySchedule);

    setCurrentDaySchedule(daySchedule);
  };

  const updateCurrentDaySchedule = (newDaySchedule) => {
    const dateString = currentDate.toISOString().split("T")[0];
    const weekStart = new Date(currentDate);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);

    const weekKey = `${weekStart.toISOString().split("T")[0]}/${
      weekEnd.toISOString().split("T")[0]
    }`;

    setGlobalCalendarData((prevData) => ({
      ...prevData,
      [weekKey]: {
        ...prevData[weekKey],
        [dateString]: newDaySchedule,
      },
    }));
  };

  const updateGlobalCalendarData = (newData) => {
    setGlobalCalendarData(newData);
  };

  return (
    <CalendarContext.Provider
      value={{
        currentDaySchedule,
        updateCurrentDaySchedule,
        globalCalendarData,
        updateGlobalCalendarData,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

export function CalendarProviderWithDate({ children }) {
  return (
    <DateProvider>
      <CalendarProvider>{children}</CalendarProvider>
    </DateProvider>
  );
}

export function useCalendar() {
  return useContext(CalendarContext);
}
