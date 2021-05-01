import { connect } from "react-redux";
import Header from "./Header.component";
import { chanegLocale } from "../../store/locale/locale.actions";

const mapStateToProps = _state => {
    return {
        locale: _state.localeReducer.locale
    };
};

const mapDispatchToProps = _dispatch => {
    return {
        setLocale: (locale) => {
            return _dispatch(chanegLocale(locale))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header);
