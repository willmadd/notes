import { combineReducers } from "redux";
import {localeReducer} from './locale/locale.reducer'
import {notesReducer} from './notes/notes.reducer'

export const rootReducer = combineReducers({ localeReducer, notesReducer });