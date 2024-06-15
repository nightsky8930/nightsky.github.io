import React, { useState } from "react";
import * as dateFns from "date-fns";

const ReactCalendar = () => {
  const currDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currDate);
  const [selectedDate, setSelectedDate] = useState(currDate);

  // let currentMonth = useRef<Date>(currDate);
  // const selectedDate = useRef<Date>(currDate);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(dateFns.addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(dateFns.subMonths(currentMonth, 1));
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
  
    return (
      <div className="flex flex-row justify-between items-center p-4 border-b border-gray-300">
        <div className="flex items-center">
          <div className="material-icons cursor-pointer" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="flex-grow text-center">
          <span className="text-lg font-bold">{dateFns.format(currentMonth, dateFormat)}</span>
        </div>
        <div className="flex items-center">
          <div className="material-icons cursor-pointer" onClick={nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEEE";
    const mobileDateFormat = "EEE";
    const days = [];
    // let startDate = dateFns.startOfWeek(currentMonth.current);
    let startDate = dateFns.startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="flex-grow text-center font-medium text-gray-600 ">
          <div className="md:hidden" key={i}>
            {dateFns.format(dateFns.addDays(startDate, i), mobileDateFormat)}
          </div>
          <div className="max-md:hidden" key={i}>
            {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
          </div>
        </div>
      );
    }
    return <div className="flex border-b border-gray-300">{days}</div>;
  };
  
  const renderCells = () => {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
  
    const dateFormat = "d";
    const rows = [];
  
    let days = [];
    let day = startDate;
    let formattedDate = "";
  
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const cloneDay = day;
        days.push(
          <div
            className={`flex-grow relative h-20 border-r border-b border-gray-300 ${
              !dateFns.isSameMonth(day, monthStart)
                ? "bg-gray-100"
                : dateFns.isSameDay(day, selectedDate)
                ? "bg-blue-200"
                : "bg-white"
            }`}
            key={day.getDate()}
          >
            <span className="absolute top-2 right-2 font-bold">{formattedDate}</span>
            <span className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-blue-100 opacity-0 hover:opacity-50">
              {formattedDate}
            </span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
  
      rows.push(
        <div className="flex" key={day.getDate()}>
          {days}
        </div>
      );
  
      days = [];
    }
  
    return <div>{rows}</div>;
  };

  return (
    <>
      <div className="flex-grow flex flex-col max-w-4xl bg-white shadow-md rounded-lg">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    </>
  );
};

export default ReactCalendar;
