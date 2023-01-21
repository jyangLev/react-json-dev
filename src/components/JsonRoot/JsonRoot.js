import React, {useState} from 'react';
import styles from './JsonRoot.module.css';
import Directory from "../Directory/Directory";
import JsonEditor from "../JsonEditor/JsonEditor";
import DirectoryRoot from "../DirectoryRoot/DirectoryRoot";
import Test_RTK from "../Test_RTK/Test_RTK";


const JsonRoot = () => {
    return (

        <div className={styles.JsonRoot}>
            <div>
                <div className="container-fluid">

                    <div className="row ">
                        <div className='p-2 col background '>
                            <DirectoryRoot/>
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
