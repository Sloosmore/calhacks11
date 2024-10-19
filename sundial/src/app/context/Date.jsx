"use client";

import React, { createContext, useState, useContext } from "react";

const DateContext = createContext();

export function DateProvider({ children }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const navigateDay = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === "next" ? 1 : -1));
    setCurrentDate(newDate);
  };

  const setDate = (date) => {
    if (date instanceof Date) {
      setCurrentDate(date);
    } else if (typeof date === "string" || typeof date === "number") {
      const newDate = new Date(date);
      if (!isNaN(newDate.getTime())) {
        setCurrentDate(newDate);
      } else {
        console.error("Invalid date input");
      }
    } else {
      console.error("Invalid date input");
    }
  };

  return (
    <DateContext.Provider
      value={{ currentDate, setCurrentDate, navigateDay, setDate }}
    >
      {children}
    </DateContext.Provider>
  );
}

export function useDate() {
  return useContext(DateContext);
}
