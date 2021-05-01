import { connect } from "react-redux";
import LocationModal from "./LocationModal.component";
import {chanegLocale} from "../../store/locale/locale.actions";

const mapStateToProps = ({localeReducer}) => {
    const locale = {localeReducer};
    return {
        locale,
    };
};

const mapDispatchToProps = _dispatch => {
    return {
        setLocale: (locale) => {
            return _dispatch(chanegLocale(locale))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LocationModal);
