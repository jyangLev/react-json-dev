import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import counterReducer from "./counter";
import selectedItemReducer from './selectedItem'

export default configureStore({
    reducer: {
        counter: counterReducer,
        selectedItem: selectedItemReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
