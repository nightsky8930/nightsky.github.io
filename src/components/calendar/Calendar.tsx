import React, { useState } from "react";
import * as dateFns from "date-fns";

const Calendar = () => {
  const currDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currDate);
  const [selectedDate, setSelectedDate] = useState(currDate);

  // let currentMonth = useRef<Date>(currDate);
  // const selectedDate = useRef<Date>(currDate);

  // const onDateClick = (day) => {
  //   setSelectedDate(day);
  // };

  const nextMonth = () => {
    console.log('Before Date: ', currentMonth);
    // console.log('Before Date: ', currentMonth.current);
    // currentMonth.current = dateFns.addMonths(currentMonth.current, 1);
    setCurrentMonth(dateFns.addMonths(currentMonth, 1));
    console.log('After Date: ', currentMonth);
    // console.log('After Date: ', currentMonth.current);
  };

  const prevMonth = () => {
    console.log('Before Date 1: ', currentMonth);
    // console.log('Before Date 1: ', currentMonth.current);
    // currentMonth.current = dateFns.subMonths(currentMonth.current, 1);
    setCurrentMonth(dateFns.subMonths(currentMonth, 1));
    console.log('After Date 2: ', currentMonth);
    // console.log('After Date 2: ', currentMonth.current);

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
          {/* <span className="text-lg font-bold">{dateFns.format(currentMonth.current, dateFormat)}</span> */}
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
    const days = [];
    // let startDate = dateFns.startOfWeek(currentMonth.current);
    let startDate = dateFns.startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="flex-grow text-center font-medium text-gray-600" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="flex border-b border-gray-300">{days}</div>;
  };
  
  const renderCells = () => {
  
    // const monthStart = dateFns.startOfMonth(currentMonth.current);
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
        const cloneDay = day;
        days.push(
          <div
            className={`flex-grow relative h-20 border-r border-b border-gray-300 ${
              !dateFns.isSameMonth(day, monthStart)
                ? "bg-gray-100"
                // : dateFns.isSameDay(day, selectedDate.current)
                : dateFns.isSameDay(day, selectedDate)
                ? "bg-blue-200"
                : "bg-white"
            }`}
            key={day.getDate()}
          >
            <span className="absolute top-2 right-2 font-bold">{formattedDate}</span>
            <span className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-blue-100 opacity-0 hover:opacity-25">
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
      <div className="flex-grow flex flex-col border-4 border-black max-w-4xl bg-white shadow-md rounded">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Calendar;
