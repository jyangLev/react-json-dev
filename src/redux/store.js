import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import counterReducer from "./counter";
import selectedEventItemReducer from './selectedEventItem'
import selectedItemReducer from './selectedItem'

export default configureStore({
    reducer: {
        counter: counterReducer,
        selectedEventItem: selectedEventItemReducer,
        selectedItem: selectedItemReducer,

    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
