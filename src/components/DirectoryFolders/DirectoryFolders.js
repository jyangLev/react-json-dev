import React, {useState} from 'react';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";
import styles from "./DirectoryFolders.module.css";



const DirectoryFolders = (props) => {
    const [isExpanded, toggleExpanded] = useState(false);


    if (props.files.type === 'folder') {
        return (
            <div className={`folder ${styles.jeremyBtn}`}>

                <div className="folder-title onclick" onClick={() => helperOnclick(!isExpanded, true)}>

                    {isExpanded
                        ? <ChevronDown className={styles.iconGap} color="black" size={14}/>
                        : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>
                    }
                    <Folder className={styles.iconGap} color="blue" size={14}/>
                    {props.files.name}
                </div>
                {
                    isExpanded && props.files.items.map((item) => <DirectoryFolders files={item}/>)
                }
            </div>
        )
    }
    return (
        <>
            <div className={`file-name onclick ${styles.jeremyBtn} `}>
                <FileText className={styles.iconGap} color="blue" size={14}/>
                {props.files.name}</div>
        </>
    )


    function helperOnclick(isExpanded, isHighlighted) {
        toggleExpanded(isExpanded)

    }
};

DirectoryFolders.propTypes = {};

DirectoryFolders.defaultProps = {};

export default DirectoryFolders;
