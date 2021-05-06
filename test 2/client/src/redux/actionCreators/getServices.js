import { GET_ALL_SERVISES, SAGA_GET_ALL_SERVISES } from "../types/services";

export const getAllServicesAC = (resFromServer) => {
  return {
    type: GET_ALL_SERVISES,
    payload: resFromServer,
  };
};

export const SagaGetAllServicesAC = () => {
  return {
    type: SAGA_GET_ALL_SERVISES
  };
};
