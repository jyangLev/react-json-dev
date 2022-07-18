import React, {useState} from 'react';
import {FileText, Folder} from "react-feather";
import styles from "../Collections/Collections.module.css";



const Directory = ({ files }) => {
    const [isExpanded, toggleExpanded] = useState(false);

    if (files.type === 'folder') {
        {/*
                {`collapse collapse5 ${styles.jeremyBtn}`}
        */}
        return (
            // <div className="folder">
            <div className={`folder ${styles.jeremyBtn}`}>
            {/*<FileText color="red" size={14}/>*/}


                <div className="folder-title" onClick={() => toggleExpanded(!isExpanded)}>
                    <Folder color="red" size={14}/>

                    {files.name}
                </div>
                {
                    isExpanded && files.items.map((item) => <Directory files={item} />)
                }
            </div>
        )
    }
    return (
        <>
            {/*<div className="file-name">*/}
            <div className={`file-name ${styles.jeremyBtn}`}>

            <FileText color="red" size={14}/>
                {files.name}</div>
        </>
    )
}


export default Directory;
