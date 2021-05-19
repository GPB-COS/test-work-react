export const GET_SERVICES      = 'GET_SERVICES';
export const SERVICES_RECEIVED = 'SERVICES_RECEIVED';
export const GET_DETAILS       = 'GET_DETAILS';
export const DETAILS_RECEIVED  = 'DETAILS_RECEIVED';
export const ERROR             = 'ERROR';

export const getServices = () => ({
    type: 'GET_SERVICES',
});

export const getDetails = (id) => ({
    type: 'GET_DETAILS',
    id
});