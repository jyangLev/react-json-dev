import React, {useState} from 'react';
import DirectoryFolders from "../DirectoryFolders/DirectoryFolders";
import axios from "axios";
import NewEntryModal from "../NewEntryModal/NewEntryModal";
import style from "./Directory.module.css"
import ContextMenu from "../ContextMenu/ContextMenu";
import Test_RTK from "../Test_RTK/Test_RTK";

const Directory = (props) => {
    let [files, setFiles] = useState(retrieveJsonStructure)  // This gets called twice on load ???/
    let initialEntryObj = {
        name: 'initialName!!!',
        type: 'initialType!!!',
        id: 'initialId!!!!!'
    }
    const [entryObj, setEntryObj] = useState(initialEntryObj);
    const [targetVal, setTargetVal] = useState()

    function handleContextMenu(e) {
        e.preventDefault();
        console.log(e.target)
        const {pageX, pageY} = e
        props.setContextMenu({show: true, x: pageX, y: pageY})
        setTargetVal(e.target)
    }

    return (
        <div className={style.DirectoryFolders} onContextMenu={(e) => handleContextMenu(e)}>
            <Test_RTK/>

            <DirectoryFolders files={files} setFiles={setFiles}
                              contextMenu={props.contextMenu} setContextMenu={props.setContextMenu}
                              targetVal={targetVal}
                              setTargetVal={setTargetVal}
            />
            <button type="button" className="btn btn-success" onClick={setJsonStructure}>Call HTTP
            </button>
            {props.contextMenu.show && <ContextMenu x={props.contextMenu.x} y={props.contextMenu.y}
                                                    setContextMenu={props.setContextMenu}
                                                    files={files}
                                                    setFiles={setFiles}
                                                    selectedItem={targetVal}
                                                    entryObj={entryObj}
                                                    setEntryObj={setEntryObj}
            />}
            <NewEntryModal files={files} setFiles={setFiles} entryObj={entryObj} setEntryObj={setEntryObj}
                           targetVal={targetVal} setTargetVal={setTargetVal}/>
        </div>

    )

    function retrieveJsonStructure() {
        axios.post(process.env.REACT_APP_RETRIEVE_JSON_STRUCTURE_URL
            , {
                userTableId: "1",
            }, 'Access-Control-Allow-Origin')
            .then(function (response) {
                // console.log(response.data);
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
