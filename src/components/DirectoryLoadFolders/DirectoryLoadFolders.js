import React, {useState} from 'react';
import styles from './DirectoryLoadFolders.module.css';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";


const DirectoryLoadFolders = (props) => {
    const [isExpanded, toggleExpanded] = useState(false);

    if (props.files != null && props.files.type === 'folder') {
        return (
            <div className={`folder ${styles.jeremyBtn}`}>
                <div id={props.files.id} className="folder-title" onClick={(event) => helperOnclick(event)}
                     onDoubleClick={(event) => toggleExpanded(!isExpanded)}>

                    {isExpanded
                        ? <ChevronDown className={styles.iconGap} color="black" size={14}/>
                        : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>
                    }
                    <Folder className={styles.iconGap} color="orange" size={14}/>
                    {props.files.name}


                </div>
                {
                    isExpanded && props.files.items.map((item, index) => <DirectoryLoadFolders files={item}
                                                                                               itemName={item.name}
                                                                                               active={item.name === props.selectedItem}
                                                                                               onClick={() => props.setSelectedItem(item.name)}
                                                                                               key={index}
                                                                                               selectedItem={props.selectedItem}
                                                                                               setSelectedItem={props.setSelectedItem}
                                                                                               selectedEvent={props.selectedEvent}
                                                                                               setSelectedEvent={props.setSelectedEvent}
                    />)
                }
            </div>
        )
    } else if (props.files != null && props.files.type === 'file') {
        return (
            <>
                <div id={props.files.id} className={`file file-name onclick ${styles.jeremyBtn}  `}
                     onClick={(event) => helperOnclick(event, !isExpanded, true)}>
                    <FileText className={styles.iconGap} color="orange" size={14}/>
                    {props.files.name}</div>
            </>
        )
    }


    function helperOnclick(event) {
        addHighlight(event)
        //TODO display file into editor using state????
        if (event.target.classList.contains('file')) {
            console.log("A File was Selected!")

        }
    }


    function addHighlight(event) {

        let highlightEvent = event.target;

        // This logic checks if you click on Chevron instead of the folder/file
        if (!highlightEvent.classList.contains('folder-title') && !highlightEvent.classList.contains('file-name')) {
            highlightEvent = highlightEvent.parentNode;
        }


        if (props.selectedEvent == null) {
            props.setSelectedEvent(highlightEvent);
        } else {
            removeHighlightFolder(props.selectedEvent)
            props.setSelectedEvent(highlightEvent);
        }

        // Apply Background Color
        highlightEvent.style.background = 'gray';
    }

    function removeHighlightFolder(selectedEvent) {
        selectedEvent.style.background = '';
    }
};

DirectoryLoadFolders.propTypes = {};

DirectoryLoadFolders.defaultProps = {};

export default DirectoryLoadFolders;
