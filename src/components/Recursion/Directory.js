import React, {useState} from 'react';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";
// import styles from "../Collections/Collections.module.css";
import styles from "../Recursion/Directory.module.css";

const Directory = ({files}) => {
    const [isExpanded, toggleExpanded] = useState(false);
    if (files.type === 'folder') {
        return (
            <div className={`folder ${styles.jeremyBtn}`}>
                <div className="folder-title" onClick={() => toggleExpanded(!isExpanded)}>
                    {isExpanded
                        ? <ChevronDown className={styles.iconGap} color="black" size={14}/>
                        : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>
                    }
                    <Folder className={styles.iconGap} color="blue" size={14}/>
                    {files.name}
                </div>
                {
                    isExpanded && files.items.map((item) => <Directory files={item}/>)
                }
            </div>
        )
    }
    return (
        <>
            <div className={`file-name ${styles.jeremyBtn} `}>
                <FileText className={styles.iconGap} color="blue" size={14}/>
                {files.name}</div>
        </>
    )
}


export default Directory;
