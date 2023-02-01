import {createSlice} from "@reduxjs/toolkit";

export let selectedEventItemSlice = createSlice({
    name: "selectedEventItem",
    initialState: {
        selectedEventItem: null
    },
    reducers: {
        updateSelectedEventItem: (state, action) => {
            state.selectedEventItem = action.payload;
        }
    }
})

export const {updateSelectedEventItem} = selectedEventItemSlice.actions;

export default selectedEventItemSlice.reducer;