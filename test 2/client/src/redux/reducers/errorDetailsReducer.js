import { DROP_ERROR_DETAILS, ERROR_DETAILS } from "../types/errors";

export const errorDetailsReducer = (state = {}, action) => {

  switch (action.type) {
    case ERROR_DETAILS:
      return {
        ...state,
        message: action.payload
      }

    case DROP_ERROR_DETAILS:
      return {}

    default:
      return state;
  }
}
