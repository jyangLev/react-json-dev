import React, {useState} from 'react';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";
// import styles from "../Collections/Collections.module.css";
import styles from "../Recursion/Directory.module.css";

const Directory = ({files, itemName, onClick, active}) => {

    console.log("Active: " + active)
    console.log("itemName: " + itemName)
    console.log("++++++++++++++++++++")


    const [chosen, setChosen] = useState();

    const [isExpanded, toggleExpanded] = useState(false);

    // const isActive = active ? 'active' : styles.nonActive;


    if (files.type === 'folder') {
        return (
            // <div className={`folder ${styles.jeremyBtn} ${active ? styles.active : styles.nonActive}`}>
            <div  className={`folder ${styles.jeremyBtn} `}>


                {/*<div className={`folderTitle ${active ? styles.active : styles.nonActive}`} onClick={() => helperOnClick(!isExpanded, onClick)}>*/}
                <div className={`folderTitle ${active ? styles.active : ''}`} onClick={() => helperOnClick(!isExpanded, onClick)}>


                {isExpanded
                        ? <ChevronDown className={styles.iconGap} color="black" size={14}/>
                        : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>
                    }
                    <Folder className={styles.iconGap} color="blue" size={14}/>
                    {files.name}
                </div>
                {

                    isExpanded && files.items.map(
                        (item) => <Directory files={item}
                                             itemName={item.name}
                                             active={item.name === chosen}
                                             onClick={() => setChosen(item.name)}
                        />
                    )


                }

            </div>
        )
    }
    return (
        <>
            <div className={`file-name ${styles.jeremyBtn} ${active ? styles.active : ''}`}>
                <FileText className={styles.iconGap} color="blue" size={14}/>
                {files.name}</div>
        </>
    )

    function helperOnClick(isExpanded, onClick) {
        toggleExpanded(isExpanded)
        onClick();
    }
}


export default Directory;
