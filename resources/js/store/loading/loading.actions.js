
import { GET_NOTES } from "./notes.types";

export const getNotes = () => {
    return dispatch => {
        dispatch({ type: 'LOADING' });
        api.getNotes()
            .then(res => {
                dispatch({ type: 'SUCCESS', payload: res.data })
            })
            .catch(err => dispatch({ type: 'FAILURE', payload: err }));
    };
}

