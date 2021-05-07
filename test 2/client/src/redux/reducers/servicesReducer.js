import { GET_ALL_SERVISES } from "../types/services";

export const servicesReducer = (state = [], action) => {

  switch (action.type) {
    case GET_ALL_SERVISES:
      return [action.payload]

    default:
      return state;
  }
}


