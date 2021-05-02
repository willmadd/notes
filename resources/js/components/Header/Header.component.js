import React from "react";
import "./Header.styles.scss";
import locales from "../../translations/locales";
import PropTypes from "prop-types";

const Header = ({ setLocale, locale }) => {
    const handleLocaleSelect = (icu) => {
        localStorage.setItem("notes:locale", icu);
        setLocale(icu);
    };

    return (
        <header className="header">
            <img src={"/images/6b.svg"} alt="6b logo" width="32" height="24" />
            <div className="header__translate">
                {locales.map(({ name, img, icu }) => (
                    <img
                        key={icu}
                        src={`/images/${img}`}
                        alt={`${name} ${locale} flag`}
                        onClick={() => handleLocaleSelect(icu)}
                        className={`${locale === icu ? "active" : "inactive"}`}
                        width="24"
                        height="24"
                    />
                ))}
            </div>
        </header>
    );
};

Header.propTypes = {
    setLocale: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

export default Header;
