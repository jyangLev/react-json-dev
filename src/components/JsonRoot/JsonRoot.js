import React, {useState} from 'react';
import styles from './JsonRoot.module.css';
import Directory from "../Directory/Directory";
import JsonEditor from "../JsonEditor/JsonEditor";
import axios from 'axios';


const JsonRoot = () => {


    let [counter, setCounter] = useState(0);
    let [selectedFile, setSelectedFile] = useState();
    const initialContextMenu = {
        show: false,
        x: 0,
        y: 0
    }
    const [contextMenu, setContextMenu] = useState(initialContextMenu)

    function closeContextMenu(){
        setContextMenu(initialContextMenu)
    }

    return (

        <div className={styles.JsonRoot}>
            <div>
                <div className="container-fluid" onClick={closeContextMenu}>
                    <div className="row ">
                        <div className='p-2 col background '>
                            {counter}
                            {/*{response}*/}
                            <Directory counter={counter} setCounter={setCounter} contextMenu={contextMenu} setContextMenu={setContextMenu} />


                        </div>
                        <div className="p-2 col-10 background">
                            <div className="mb-3">
                                <JsonEditor></JsonEditor>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    //
    // function retrieveJsonStructure() {
    //     axios.post(process.env.REACT_APP_RETRIEVE_JSON_STRUCTURE_URL
    //         , {
    //             userTableId: "1",
    //         }, 'Access-Control-Allow-Origin')
    //         .then(function (response) {
    //             console.log(response.data);
    //             setFiles(response.data)
    //             return response.data;
    //         })
    // }
    //

    // function setJsonStructure() {
    //     axios.post(process.env.REACT_APP_SET_JSON_STRUCTURE_URL, {
    //         userTableId: "1",
    //         jsonStructure: JSON.stringify(files)
    //     }, 'Access-Control-Allow-Origin')
    //         .then(function (response) {
    //             console.log(response);
    //         })
    // }
};

JsonRoot.propTypes = {};

JsonRoot.defaultProps = {};

export default JsonRoot;
