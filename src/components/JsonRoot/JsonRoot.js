import React, {useState} from 'react';
import styles from './JsonRoot.module.css';
import Directory from "../Directory/Directory";
import filesOriginal from "../../files.json";
import JsonEditor from "../JsonEditor/JsonEditor";
import axios from 'axios';


const JsonRoot = () => {

    let [files, setFiles] = useState(filesOriginal)

    let [counter, setCounter] = useState(0);
    let response = makeHttpCall;


    return (
        <div className={styles.JsonRoot}>
            <div>
                <div className="container-fluid">
                    <div className="row ">
                        <div className='p-2 col background '>
                            {counter}
                            {/*{response}*/}
                            <Directory files={files} setFiles={setFiles} counter={counter} setCounter={setCounter}/>
                            <button type="button" className="btn btn-success" onClick={ makeHttpCall }>Call HTTP</button>

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


    function makeHttpCall(){
        axios.post('http://localhost:8080/jeremy', {
            jsonFileObject:'smal String'
        }, 'Access-Control-Allow-Origin')
            .then(function (response) {
                console.log(response);
            })
    }
};

JsonRoot.propTypes = {};

JsonRoot.defaultProps = {};

export default JsonRoot;
