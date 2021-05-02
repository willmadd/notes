import React from "react";
import localeList from "../../translations/locales";
import "./LocationModal.styles.scss";
import translationsHOC from "../Translations";
import PropTypes from "prop-types";
import { defaultLocale } from '../../settings';

const LocationModal = ({ locale, setLocale, __, setFirstVisit }) => {
    const handleLanguageSelect = (icu) => {
        localStorage.setItem("notes:locale", icu);
        setLocale(icu);
        setFirstVisit(false);
    };

    return (
        <div className="location__modal">
            <div className="location">
                <h2>{__(`Please choose a language`)}</h2>
                <div className="location__buttons">
                    {localeList.map(({ icu, name, img }) => (
                        <button
                            type="button"
                            key={icu}
                            onClick={() => handleLanguageSelect(icu)}
                            className="btn"
                            onMouseEnter={() => setLocale(icu)}
                            onMouseLeave={() => setLocale(defaultLocale)}
                        >
                            <img
                                key={icu}
                                src={`/images/${img}`}
                                alt={`${name} ${locale} flag`}
                                className={`${
                                    locale === icu ? "active" : "inactive"
                                }`}
                                height="147"
                                width="147"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

LocationModal.propTypes = {
    setLocale: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    __: PropTypes.func.isRequired,
    setFirstVisit: PropTypes.func.isRequired,
};


export default translationsHOC(LocationModal);
