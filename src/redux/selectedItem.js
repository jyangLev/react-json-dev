import {createSlice} from "@reduxjs/toolkit";

export let selectedItemSlice = createSlice({
    name: "selectedItem",
    initialState: {
        id: 'someId',
        type: 'someType',
        content: 'someContent'
    },
    reducers: {
        updateSelectedItem: (state, action) => {
            state.id = action.payload.id;
            state.type = action.payload.type;
            state.content = action.payload.content;

        }
    }
})

export const {updateSelectedItem} = selectedItemSlice.actions;

export default selectedItemSlice.reducer;