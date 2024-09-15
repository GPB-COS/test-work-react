import dayjs from "dayjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMonthIndex } from "../RTKSlice/rtkslice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CalendarHeader() {
  const monthIndex = useSelector((store) => store.toolkit.monthIndex);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlePrevMonth() {
    dispatch(getMonthIndex(monthIndex - 1));
  }
  function handleNextMonth() {
    dispatch(getMonthIndex(monthIndex + 1));
  }
  function handleReset() {
    dispatch(
      getMonthIndex(
        monthIndex === dayjs().month()
          ? monthIndex + Math.random()
          : dayjs().month()
      )
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <Link className="mr-10 text-xl text-gray-500 fond-bold" to="/">
        Calendar
      </Link>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
