import React, {useState} from 'react';
// import styles from "../Recursion/Directory.module.css";
import styles from "../FileManager/FileManager.module.css"

// import Directory from "../Recursion/Directory";
import files from "../../files.json";
import {useEffect, useRef} from "react";
import {v4 as uuid} from 'uuid';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";


const FileManager = () => {

    const ref = useRef(null);
    const [chosen, setChosen] = useState();
    let highlightedFolder = null;

    useEffect(() => {
        console.log("Starting File Manager Component!!!")
    }, []);

    console.log(files.name)
    return (
        <div ref={ref} className={styles.FileManager}>
            <Jeremy files={files}/>
        </div>
    )

    function Jeremy({files, itemName, active}) {
        const [isExpanded, toggleExpanded] = useState(false);

        if (files.type === 'folder') {

            return (
                <div id={"folderContainer_" + uuid().slice(0, 8)}
                     className={`folderContainer ${styles.jeremyBtn} `}>


                    <div id={"folderTitle_" + uuid().slice(0, 8)}
                         className={`folderTitle ${active ? styles.active : ''}`}
                         onClick={(event) => helperOnClick(event, !isExpanded)}>

                        {isExpanded
                            ? <ChevronDown className={styles.iconGap} color="red" size={14}/>
                            : <ChevronRight className={`${styles.iconGap}`} color="red" size={14}/>
                        }
                        <Folder className={styles.iconGap} color="blue" size={14}/>
                        {files.name}

                    </div>
                    {

                        isExpanded && files.items.map(
                            (item, index) => <Jeremy files={item}
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
                <div id={"fileName_" + uuid().slice(0, 8)}
                     className={`file-name ${styles.jeremyBtn} ${active ? styles.active : ''}`}>
                    <FileText className={styles.iconGap} color="blue" size={14}/>
                    {files.name}</div>
            </>
        )

        function helperOnClick(event, isExpanded, folder) {
            toggleExpanded(isExpanded)
            addHighlight(event, folder)
        }

        function addHighlight(event){
            let highlightEvent = event.target;
            highlightEvent.style.background = 'gray';

            if(highlightedFolder == null){
                highlightedFolder = highlightEvent
            } else if (highlightedFolder.id !== highlightEvent.id) {
                removeHighlightFolder(highlightedFolder)
                highlightedFolder = highlightEvent
            }
        }

        function removeHighlightFolder(highlightedFolder){
            highlightedFolder.style.background = '';
        }
    }

}


export default FileManager;
