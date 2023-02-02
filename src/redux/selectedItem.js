import {createSlice} from "@reduxjs/toolkit";
import {retrieveFileContent} from "../common/HttpUtils";

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

            // if(state.type == 'file'){
            //     let url = process.env.REACT_APP_RETRIEVE_FILE_CONTENT;
            //     let reqBody = {
            //         id:state.id
            //     }
            //    let result = retrieveFileContent(url,reqBody, state.content)
            //     console.log('Came Out')
            // }
        },
    },
    extraReducers:{
        [retrieveFileContent.pending]: (state) =>{
            console.log('==Pending')
        },
        [retrieveFileContent.fulfilled]: (state, action) =>{
            console.log('==SUCCESS')
            state.content = action.payload
        },
        [retrieveFileContent.rejected]: (state) =>{
            console.log('==REJECTED')
        }

    }
})

// function callbackFunc(){
//
// }

export const {updateSelectedItem} = selectedItemSlice.actions;

export default selectedItemSlice.reducer;