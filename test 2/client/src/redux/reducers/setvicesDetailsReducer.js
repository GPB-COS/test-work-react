import { GET_SERVISES_DETAILS } from "../types/services";

export const servicesDetailsReducer = (state = {}, action) => {

  switch (action.type) {
    case GET_SERVISES_DETAILS:
      return action.payload

    default:
      return state;
  }
}
