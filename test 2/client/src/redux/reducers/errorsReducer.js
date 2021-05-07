import { DROP_ERROR, DROP_ERROR_DETAILS, ERROR, ERROR_DETAILS } from "../types/errors";

export const errorReducer = (state = {}, action) => {

  switch (action.type) {
    case ERROR:
      return {
        ...state,
        message: action.payload
      }

    case DROP_ERROR:
      return {}

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
