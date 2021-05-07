import { DROP_ERROR, ERROR } from "../types/errors";

export const getErrorAC = (error) => {
  return {
    type: ERROR,
    payload: error,
  };
};

export const dropErrorAC = () => {
  return {
    type: DROP_ERROR
  };
};


