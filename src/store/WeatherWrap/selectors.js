export const wrapReducer = state => state.WrapReducer;

export const position = state => wrapReducer(state).position;
export const isAllowedGeo = state => wrapReducer(state).isAllowedGeo;

/*
export const latitude = state => wrapReducer(state).latitude;
export const longitude = state => wrapReducer(state).longitude;
*/