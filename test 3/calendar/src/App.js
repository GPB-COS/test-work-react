import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import EventModal from "./components/EventModal";
import Month from "./components/Month";
import { useSelector } from "react-redux";
import NotificationBeforeEvent from "./components/NotificationBeforeEvent";
import NotificationEventAdded from "./components/NotificationEventAdded";
import EventPage from "./Pages/EventPage";

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const rtkStore = useSelector((store) => store.toolkit);
  const { monthIndex, showEventModal, showNotifEventAddedModal, showNotifBeforeEventModal } = rtkStore;

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      {showNotifBeforeEventModal && <NotificationBeforeEvent />}
      {showNotifEventAddedModal && <NotificationEventAdded />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Routes>
            <Route path="/" element={<Month month={currenMonth} />} />
            <Route path="/events/:id" element={<EventPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
