import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

function post(url, reqBody) {
    return axios.post(url
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

export const retrieveFileContent = createAsyncThunk('selectedItem/getContent', async (reqObj) => {
        return post(reqObj.url, reqObj.reqBody);
    }
)