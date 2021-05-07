import { DROP_ERROR_DETAILS, ERROR_DETAILS } from "../types/errors";

export const getErrorDetailsAC = (error) => {
  return {
    type: ERROR_DETAILS,
    payload: error,

  };
};

export const dropErrorDetailsAC = () => {
  return {
    type: DROP_ERROR_DETAILS
  };
};
