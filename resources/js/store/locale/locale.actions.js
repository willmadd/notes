
import { CHANGE_LOCALE } from "./locale.types";

export const chanegLocale = (locale) => {
    return {
        type: CHANGE_LOCALE,
        locale
    }
}


