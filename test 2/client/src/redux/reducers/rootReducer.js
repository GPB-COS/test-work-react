import { combineReducers } from "redux";
import { errorDetailsReducer } from "./errorDetailsReducer";
import { errorReducer } from "./errorsReducer";
import { servicesReducer } from "./servicesReducer";
import { servicesDetailsReducer } from "./setvicesDetailsReducer";


const rootReducer = combineReducers({
  services: servicesReducer,
  error: errorReducer,
  servicesDetails: servicesDetailsReducer,
  errorDetails: errorDetailsReducer,
});

export default rootReducer;
