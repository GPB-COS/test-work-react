import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShowNotifBeforeEventModal } from "../RTKSlice/rtkslice";

export default function NotificationBeforeEvent() {
  const dispatch = useDispatch();
  const event = useSelector((store) => store.toolkit.event);

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
        <button onClick={() => dispatch(getShowNotifBeforeEventModal(false))}>
          <span className="material-icons-outlined text-gray-400">close</span>
        </button>
        <div className="p-3">
          Reminder:
          <p>{`You have an event "${event.title}" in ${event.reminderTime} minutes`}</p>
        </div>
      </header>
    </div>
  );
}
