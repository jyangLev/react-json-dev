import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export function retrieveFileContent(url, reqBody) {
    post(url, reqBody)
}


function post(url, reqBody) {

    reqBody = {
        id: '113'
    }
    return axios.post(process.env.REACT_APP_RETRIEVE_FILE_CONTENT
        , reqBody
        , {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function (response) {
            console.log('responseData: ' + response.data);
            return response.data;
        })

}


export const getContent = createAsyncThunk('selectedItem/getContent', () =>

    post('', '')
)