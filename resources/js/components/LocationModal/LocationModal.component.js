import React from "react";
import localeList from "../../translations/locales";
import Translations from "../Translations"
const LocationModal = ({ locale, setLocale }) => {
console.log(setLocale);
    return (
        <div className="modal">
            <h2>Looks like You're new here!</h2>
            <h2>Please set your langauge</h2>
            {localeList.map((localeListItem) => (
                <h6 key={localeListItem.locale} onClick={()=>setLocale(localeListItem.locale)}>{localeListItem.name}</h6>
            ))}
        </div>
    );
};

export default Translations(LocationModal);
