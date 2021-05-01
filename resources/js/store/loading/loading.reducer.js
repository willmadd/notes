import { LOADING, FAILURE, SUCCESS } from "./notes.types";

const initialState = {
    loading: false,
    error: false
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return{
                ...state,
                loading:true
            }
        case FAILURE:
            return {
                ...state,
                error:true
            }
            case SUCCESS:
                return {
                    ...state,
                    error:true
                }
        default:
            return state;
    }
}