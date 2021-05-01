import { connect } from "react-redux";
import NoteView from "./NoteView.component";
import { getNotes } from '../../store/notes/notes.actions';

const mapStateToProps = ({localeReducer, notesReducer}) => {
    const locale = {localeReducer};
    return {
        locale,
        lastNoteCol:(notesReducer.notes[notesReducer.notes.length-1]||{}).colour
    };
};

const mapDispatchToProps = _dispatch => {
    return {
        getNotes:()=>{
            _dispatch(getNotes())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteView);
