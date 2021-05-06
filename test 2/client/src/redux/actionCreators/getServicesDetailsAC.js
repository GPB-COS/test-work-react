import { GET_SERVISES_DETAILS, SAGA_GET_SERVISES_DETAILS } from "../types/services";

export const getServicesDetailsAC = (resFromServer) => {
  return {
    type: GET_SERVISES_DETAILS,
    payload: resFromServer,
  };
};

export const SagaGetServicesDetailsAC = (id) => {
  return {
    type: SAGA_GET_SERVISES_DETAILS,
    payload: id
  };
};
