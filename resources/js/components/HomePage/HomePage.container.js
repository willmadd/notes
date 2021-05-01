import { connect } from "react-redux";
import HomePage from "./HomePage.component";
import { getNotes } from '../../store/notes/notes.actions';

const mapStateToProps = _state => {
    return {
        locale:_state.localeReducer.locale
    };
};

const mapDispatchToProps = _dispatch => {
    return {
        getNotes:()=>{
            _dispatch(getNotes())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
