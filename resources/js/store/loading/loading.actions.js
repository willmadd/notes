
import { GET_NOTES } from "./notes.types";

export const getNotes = () => {
    return dispatch => {
        dispatch({ type: 'LOADING' });
        api.getNotes()
            .then(res => {
                console.log('fetch complete');
                console.log(res);
                // dispatch({ type: 'SUCCESS', payload: res.data }
            }
                )
            .catch(err => dispatch({ type: 'FAILURE', payload: err }));
    };
}






// export const getNotes = (notes) => {
//     return {
//         type: GET_NOTES,
//         notes
//     }
// }


