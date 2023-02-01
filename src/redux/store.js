import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import counterReducer from "./counter";
import selectedEventItemReducer from './selectedEventItem'

export default configureStore({
    reducer: {
        counter: counterReducer,
        selectedEventItem: selectedEventItemReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
