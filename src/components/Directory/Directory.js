import React, {useState} from 'react';
import DirectoryFolders from "../DirectoryFolders/DirectoryFolders";
import axios from "axios";
import NewEntryModal from "../NewEntryModal/NewEntryModal";

const Directory = (props) => {
    let [files, setFiles] = useState(retrieveJsonStructure)  // This gets called twice on load ???/
    let [counter, setCounter] = useState(0);
    let initialEntryObj = {
        name:'initialName!!!',
        type:'initialType!!!',
        id:'initialId!!!!!'
    }
    const [entryObj, setEntryObj] = useState(initialEntryObj);
    const [targetVal, setTargetVal] = useState()


    return (

        <div>
            <DirectoryFolders files={files} setFiles={setFiles} counter={counter}
                              setCounter={setCounter}
                              contextMenu={props.contextMenu} setContextMenu={props.setContextMenu}
                              entryObj={entryObj}
                              setEntryObj={setEntryObj}
                              targetVal={targetVal}
                              setTargetVal={setTargetVal}
            />
            <button type="button" className="btn btn-success" onClick={setJsonStructure}>Call HTTP
            </button>
            <NewEntryModal files={files} setFiles={setFiles} entryObj={entryObj} setEntryObj={setEntryObj} targetVal={targetVal} setTargetVal={setTargetVal}/>
        </div>

    )

    function retrieveJsonStructure() {
        axios.post(process.env.REACT_APP_RETRIEVE_JSON_STRUCTURE_URL
            , {
                userTableId: "1",
            }, 'Access-Control-Allow-Origin')
            .then(function (response) {
                console.log(response.data);
                setFiles(response.data)
                return response.data;
            })
    }

    function setJsonStructure() {
        axios.post(process.env.REACT_APP_SET_JSON_STRUCTURE_URL, {
            userTableId: "1",
            jsonStructure: JSON.stringify(files)
        }, 'Access-Control-Allow-Origin')
            .then(function (response) {
                console.log(response);
            })
    }
};


export default Directory;
