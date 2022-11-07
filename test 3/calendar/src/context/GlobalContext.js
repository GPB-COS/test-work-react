import React from "react";

const GlobalContext = React.createContext({
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
});

export default GlobalContext;
