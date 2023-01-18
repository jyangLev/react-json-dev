import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './DirectoryFoldersLoad.module.css';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";


const DirectoryFoldersLoad = (props) => {

    let isExpanded = true;

    if (props.files != null && props.files.type === 'folder') {
        return (
            <div className={styles.container}>
                {props.isFirstElement
                    ? <div id={props.files.id} className={`folder-title first ${styles.folderTitle}`}
                           onClick={(event) => helperOnclick(event)}
                           onDoubleClick={(event) => toggleExpand(event)}>
                        <div className={`folder ${styles.jeremyBtn}`}>


                            {isExpanded
                                ? <ChevronDown className={styles.iconGap} color="black" size={14}/>
                                : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>
                            }
                            <Folder className={styles.iconGap} color="orange" size={14}/>
                             {props.files.name}


                        </div>
                    </div>
                    : <div id={props.files.id} className={`folder-title second ${styles.folderTitle}`}
                           onClick={(event) => helperOnclick(event)}
                           onDoubleClick={(event) => toggleExpand(event)}>
                        <div className={`folder ${styles.jeremyBtn}`}>


                            {isExpanded
                                ? <ChevronDown className={styles.iconGap} color="black" size={14}/>
                                : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>
                            }
                            <Folder className={styles.iconGap} color="orange" size={14}/>
                             {props.files.name}


                        </div>
                    </div>
                }
                {/*<div className={`folder ${styles.jeremyBtn}`}>*/}


                {/*    {isExpanded*/}
                {/*        ? <ChevronDown className={styles.iconGap} color="black" size={14}/>*/}
                {/*        : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>*/}
                {/*    }*/}
                {/*    <Folder className={styles.iconGap} color="orange" size={14}/>*/}
                {/*     {props.files.name}*/}


                {/*</div>*/}
                {
                    isExpanded && props.files.items.map((item, index) => <DirectoryFoldersLoad files={item}
                                                                                               itemName={item.name}
                                                                                               active={item.name === props.selectedItem}
                                                                                               onClick={() => props.setSelectedItem(item.name)}
                                                                                               key={index}
                                                                                               selectedItem={props.selectedItem}
                                                                                               setSelectedItem={props.setSelectedItem}
                                                                                               selectedEvent={props.selectedEvent}
                                                                                               setSelectedEvent={props.setSelectedEvent}
                                                                                               isFirstElement={false}

                    />)
                }
            </div>
        )
    } else if (props.files != null && props.files.type === 'file') {
        return (
            <>
                <div id={props.files.id} className={`${styles.container} file file-name onclick ${styles.jeremyBtn} ${styles.fileContainer}      `}
                     onClick={(event) => helperOnclick(event, !isExpanded, true)}>
                    <FileText className={styles.iconGap} color="orange" size={14}/>
                    {props.files.name}</div>
            </>
        )
    }

    function toggleExpand(e) {
        // get e.target and display:none or display:block
        isExpanded = !isExpanded;
    }

    function helperOnclick(event) {
        addHighlight(event)
        //TODO display file into editor using state????
        if (event.target.classList.contains('file')) {
            console.log("A File was Selected!")

        }
        isExpanded = !isExpanded;

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


export default DirectoryFoldersLoad;
