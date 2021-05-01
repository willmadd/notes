
import { LOADING, SUCCESS, FAILURE} from "./notes.types";
import * as api from '../../api'

export const getNotes = () => {
    return dispatch => {
        dispatch({ type: LOADING });
        api.getNotes()
            .then(res => {

                dispatch({ type: SUCCESS, payload: res.data })
            }
                )
            .catch(err => dispatch({ type: FAILURE, payload: err }));
    };
}