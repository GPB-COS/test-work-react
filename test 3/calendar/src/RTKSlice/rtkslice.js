import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const rtkSlice = createSlice({
  name: "rtkSlice",
  initialState: {
    monthIndex: dayjs().month(),
    daySelected: dayjs(),
    showEventModal: false,
    showNotifEventAddedModal: false,
    showNotifBeforeEventModal: false,
    selectedEvent: null,
    day: "",
    event: {},
  },
  reducers: {
    getDay(state, action) {
      state.day = action.payload;
    },
    getMonthIndex(state, action) {
      state.monthIndex = action.payload;
    },
    getDaySelected(state, action) {
      state.daySelected = action.payload;
    },
    getShowEventModal(state, action) {
      state.showEventModal = action.payload;
    },
    getShowNotifEventAddedModal(state, action) {
      state.showNotifEventAddedModal = action.payload;
    },
    getShowNotifBeforeEventModal(state, action) {
      state.showNotifBeforeEventModal = action.payload;
    },
    getSelectedEvent(state, action) {
      state.selectedEvent = action.payload;
    },
    getEvent(state, action) {
      state.event = action.payload;
    },
  },
});

export default rtkSlice.reducer;
export const {
  getSelectedEvent,
  getShowEventModal,
  getDaySelected,
  getMonthIndex,
  getShowNotifEventAddedModal,
  showNotifEventAddedModal,
  showNotifBeforeEventModal,
  getShowNotifBeforeEventModal,
  getDay,
  day,
  event,
  getEvent,
} = rtkSlice.actions;
