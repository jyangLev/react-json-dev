import React, {useState} from 'react';
import styles from './JsonRoot.module.css';
import Directory from "../Directory/Directory";
import filesOriginal from "../../files.json";
import JsonEditor from "../JsonEditor/JsonEditor";

const JsonRoot = () => {

    let [files, setFiles] = useState(filesOriginal)

    let [counter, setCounter] = useState(0);

    return (
        <div className={styles.JsonRoot}>
            <div>
                <div className="container-fluid">
                    <div className="row ">
                        <div className='p-2 col background '>
                            {counter}
                            <Directory files={files} setFiles={setFiles} counter={counter} setCounter = {setCounter}/>
                            {/*<button type="button" className="btn btn-secondary" onClick={event => checkFolderStructure()}>Check File Structure</button>*/}
                            {/*<button type="button" className="btn btn-secondary" onClick={event => updateFolderStructure()}>Update File Structure</button>*/}
                            {/*<button type="button" className="btn btn-danger" onClick={event => updateFolderStructure()}>Update Name</button>*/}

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
};

JsonRoot.propTypes = {};

JsonRoot.defaultProps = {};

export default JsonRoot;
