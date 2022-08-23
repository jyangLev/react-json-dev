import React, {useEffect, useState} from 'react';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";
// import styles from "../Collections/Collections.module.css";
import files from "../../files.json";

import styles from "../Recursion/Directory.module.css";
import {useRef} from "react";
import {v4 as uuid} from 'uuid';


const Directory = ({files, itemName, active}) => {

    const ref = useRef(null);
    const [chosen, setChosen] = useState();
    const [isExpanded, toggleExpanded] = useState(false);

    if (files.type === 'folder') {
        debugger;
        return (
            <div id={"folderContainer_" + uuid().slice(0, 8)} ref={ref}
                 className={`folderContainer ${styles.jeremyBtn} `}>


                <div id={"folderTitle_" + uuid().slice(0, 8)} className={`folderTitle ${active ? styles.active : ''}`}
                     onClick={(event) => helperOnClick(event, !isExpanded)}>

                    {isExpanded
                        ? <ChevronDown className={styles.iconGap} color="black" size={14}/>
                        : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>
                    }
                    <Folder className={styles.iconGap} color="blue" size={14}/>
                    {files.name}
                </div>
                {

                    isExpanded && files.items.map(
                        (item, index) => <Directory files={item}
                                                    itemName={item.name}
                                                    active={item.name === chosen}
                                                    onClick={() => setChosen(item.name)}
                                                    key={index}
                        />
                    )


                }

            </div>
        )
    }
    return (
        <>
            <div id={"fileName_" + uuid().slice(0, 8)} ref={ref}
                 className={`file-name ${styles.jeremyBtn} ${active ? styles.active : ''}`}>
                <FileText className={styles.iconGap} color="blue" size={14}/>
                {files.name}</div>
        </>
    )


    function helperOnClick(event, isExpanded) {
        toggleExpanded(isExpanded)
    }
}


export default Directory;
