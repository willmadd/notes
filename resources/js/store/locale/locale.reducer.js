import { CHANGE_LOCALE } from "./locale.types";

const initialState = {
    locale:"en-GB"
};

export const localeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOCALE:
            const { locale } = action;
            return {
                ...state,
                locale
            }
        default:
            return state;
    }
}