import { connect } from "react-redux";
import React from "react";

const translationHOC = (OriginalReactComponent) => {
    class TranslationsWrapper extends React.Component {
        render() {
            const { locale } = this.props;
            const __ = (translation) => {
                let translationsFile = findTranslationsFile(locale);
                if (translationsFile) {
                    return translationsFile[translation] || translation;
                } else {
                    return translation;
                }
            };
            const findTranslationsFile = (locale) => {
                try {
                    return require(`../../translations/locales/${locale}.json`);
                } catch (err) {
                    return null;
                }
            };
            return <OriginalReactComponent __={__} {...this.props} />;
        }
    }

    const mapStateToProps = ({ localeReducer }) => {
        const { locale } = localeReducer;
        return { locale };
    };

    return connect(mapStateToProps)(TranslationsWrapper);
};

export default translationHOC;
