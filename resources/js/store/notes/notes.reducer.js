import { LOADING, FAILURE, SUCCESS } from "./notes.types";

const initialState = {
    notes: [],
    loading: false,
    error: false,
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case FAILURE:
            return {
                ...state,
                error: true,
            };
        case SUCCESS:
            return {
                ...state,
                loading: false,
                notes: action.payload
            };
        default:
            return state;
    }
};
