const initialState = {
    services: [],
    loading: false,
    error: null,
    details: [],
}

const reducers = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_SERVICES':
            return { ...state, loading: true, error: null };
        case 'SERVICES_RECEIVED':
            return { ...state, services: action.json, loading: false, error: null };
        case 'ERROR':
            return { ...state, error: action.error, loading: false };
        case 'GET_DETAILS':
            return { ...state, loading: true, error: null, details: null };
        case 'DETAILS_RECEIVED':
            return { ...state, details: action.json, loading: false, error: null }
        default:
            return state;
        }
};

export default reducers;