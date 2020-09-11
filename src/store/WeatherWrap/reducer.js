import * as types from './types';

const initialState = {
    isAllowedGeo: false,
    position: {}
}


export function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GEO_REQUEST_SUCCESS:
            return {
                ...state,
                isAllowedGeo: action.payload.isAllowedGeo,
                position: {
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude,
                }
            }
        default:
            return state;
    }
}