import React, { useEffect, useMemo, useState } from "react";
import { format, parseISO, setHours, setMinutes, isSameHour } from "date-fns";
import TodoItem from "./Item";
import Block from "./Block";

const HOURS_IN_DAY = 24;

const Schedule = ({ currentDaySchedule }) => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Sort events chronologically
    const sortedEvents = [...currentDaySchedule].sort((a, b) => {
      const timeA = a.time || a.start_time;
      const timeB = b.time || b.start_time;
      return new Date(timeA) - new Date(timeB);
    });

    // Group events by hour
    const groupedEvents = Array.from({ length: HOURS_IN_DAY }, (_, index) => {
      const hour = setHours(new Date(), index);
      return {
        hour,
        events: sortedEvents.filter((event) => {
          const eventTime = parseISO(event.time || event.start_time);
          return isSameHour(hour, eventTime);
        }),
      };
    });

    setSchedule(groupedEvents);
    console.log("Updated schedule:", groupedEvents);
  }, [currentDaySchedule]);

  return (
    <div className="schedule">
      {schedule.map(
        ({ hour, events }) =>
          events.length > 0 && (
            <div key={hour.getTime()} className="hour-block">
              <div className="hour-label my-3 text-gray-500">
                {format(hour, "h a")}
              </div>
              <div className="events-container ms-3">
                {events.map((event, index) => (
                  <React.Fragment key={index}>
                    {event.type === "item" ? (
                      <TodoItem
                        title={event.title}
                        time={format(parseISO(event.time), "h:mm a")}
                      />
                    ) : (
                      <Block
                        title={event.title}
                        startTime={format(parseISO(event.start_time), "h:mm a")}
                        endTime={format(parseISO(event.end_time), "h:mm a")}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Schedule;
