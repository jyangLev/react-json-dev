import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter";
import selectedItemReducer from './selectedItem'

export default configureStore({
    reducer: {
        counter: counterReducer,
        selectedItem: selectedItemReducer
    }
});
