import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShowEventModal } from "../RTKSlice/rtkslice";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventPage() {
  const rtkStore = useSelector((store) => store.toolkit);
  const { daySelected, selectedEvent } = rtkStore;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dispatchCalEvent } = useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [startTime, setStartTime] = useState(
    selectedEvent ? selectedEvent.startTime : ""
  );
  const [endTime, setEndTime] = useState(
    selectedEvent ? selectedEvent.endTime : ""
  );
  const [reminderTime, setReminderTime] = useState(
    selectedEvent ? selectedEvent.reminderTime : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );
  const today = dayjs();
  const todayDateAndTime = Date.parse(today);
  const selectedDate = daySelected.format("YYYY-MM-DD");
  const timeAndDate = dayjs(selectedDate + " " + startTime).format();
  const parsedTimeAndDate = Date.parse(timeAndDate);

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      startTime,
      endTime,
      reminderTime,
      label: selectedLabel,
      day: parsedTimeAndDate,
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    dispatch(getShowEventModal(false));
    navigate("/");
  }
  return (
    <div className="h-screen w-screen flex flex-col">
      <form className="bg-white h-screen w-screen rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  dispatch(getShowEventModal(false));
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )}
            <button onClick={() => dispatch(getShowEventModal(false))}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/7 items-end gap-y-4">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            Start time:
            <input
              type="time"
              name="startTime"
              placeholder="Start time"
              value={startTime}
              required
              className="pt-2 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setStartTime(e.target.value)}
            />
            End time
            <input
              type="time"
              name="endTime"
              placeholder="End time"
              value={endTime}
              required
              className="pt-2 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setEndTime(e.target.value)}
            />
            {reminderTime
              ? `Remind me ${reminderTime} before event`
              : "Remind me"}
            <select
              type="time"
              name="reminderTime"
              placeholder="Reminder time"
              value={reminderTime}
              required
              className="pt-2 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) =>
                setReminderTime(() => {
                  let str = e.target.value;
                  return str.match(/\d/gm).join("");
                })
              }
            >
              <option>no reminder</option>
              <option>5 minutes before event</option>
              <option>10 minutes before event</option>
            </select>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
