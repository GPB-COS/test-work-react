import dayjs from "dayjs";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDaySelected,
  getShowEventModal,
  getSelectedEvent,
  getDay,
  getShowNotifBeforeEventModal,
  getEvent,
} from "../RTKSlice/rtkslice";
import GlobalContext from "../context/GlobalContext";

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const { savedEvents } = useContext(GlobalContext);
  const dispatch = useDispatch();
  const event = useSelector((store) => store.toolkit.event);
  const today = dayjs();
  const todayDateAndTime = Date.parse(today);
  const checkEventsInt = 11 * 60 * 1000;
  const int = 60 * 1000;

  function getEventForNotification() {
    const events = savedEvents.filter(
      (evt) =>
        evt.day - todayDateAndTime >= 0 &&
        evt.day - todayDateAndTime <= checkEventsInt
    );
    dispatch(getEvent(events[0]));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getEventForNotification();
    }, int);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const eventNotifTime = event?.day - event?.reminderTime * 60 * 1000;
    const delayForTimeout = eventNotifTime - todayDateAndTime;
    if (delayForTimeout) {
      if (delayForTimeout < 0) {
        dispatch(getShowNotifBeforeEventModal(true));
      } else {
        setTimeout(() => {
          dispatch(getShowNotifBeforeEventModal(true));
        }, delayForTimeout);
      }
    }
  }, [event]);

  useEffect(() => {
    const events = savedEvents
      .filter(
        (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
      )
      .sort((a, b) => a.day - b.day);
    setDayEvents(events);
    dispatch(getDay(day));
  }, [savedEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          dispatch(getDaySelected(day));
          dispatch(getShowEventModal(true));
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => dispatch(getSelectedEvent(evt))}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title} <br />
            {evt.startTime} - {evt.endTime}
          </div>
        ))}
      </div>
    </div>
  );
}
