import React, {useState} from 'react';
import styles from './JsonRoot.module.css';
import DirectoryRoot from "../DirectoryRoot/DirectoryRoot";


import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import Editor from "../Editor/Editor";


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
                                <Editor/>
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
