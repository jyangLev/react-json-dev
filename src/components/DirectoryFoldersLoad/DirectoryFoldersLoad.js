import React, {useState} from 'react';
import styles from './DirectoryFoldersLoad.module.css';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";
import {useDispatch, useSelector} from "react-redux";
import {update, updateSelectedItem} from "../../redux/selectedItem";


const DirectoryFoldersLoad = (props) => {

    let isExpanded = true;
    const {selectedItem} = useSelector((state) => state.selectedItem);
    const dispatch = useDispatch();

    if (props.files != null && props.files.type === 'folder') {
        return (
            <div className={`sub-container ${styles.container}`}>
                <div id={props.files.id} className={`folder-title second ${styles.folderTitle}`}
                     onClick={(event) => onClickAction(event)}
                     onDoubleClick={(event) => toggleExpand(event)}>
                    <div className={`folder ${styles.jeremyBtn}`}>
                        <div className='content'>
                            {isExpanded
                                ? <ChevronDown className={styles.iconGap} color="black" size={14}/>
                                : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>
                            }
                            <Folder className={styles.iconGap} color="orange" size={14}/>
                            {props.files.name}
                        </div>

                        {
                            isExpanded && props.files.items.map((item, index) => <DirectoryFoldersLoad files={item}
                                                                                                       highlightedEvent={props.highlightedEvent}
                                                                                                       setHighlightedEvent={props.setHighlightedEvent}
                                // itemName={item.name}
                                // active={item.name === props.selectedItem}
                                // onClick={() => props.setSelectedItem(item.name)}
                                                                                                       key={index}
                                // selectedItem={props.selectedItem}
                                // setSelectedItem={props.setSelectedItem}
                                // selectedEvent={props.selectedEvent}
                                // setSelectedEvent={props.setSelectedEvent}
                                                                                                       isFirstElement={false}

                            />)
                        }

                    </div>
                </div>

            </div>
        )
    } else if (props.files != null && props.files.type === 'file') {
        return (
            <>
                <div className={`sub-container ${styles.container}`}>
                    <div id={props.files.id}
                         className={`${styles.container} file file-name onclick ${styles.jeremyBtn} ${styles.fileContainer}      `}
                         onClick={(event) => onClickAction(event)}>
                        <FileText className={styles.iconGap} color="orange" size={14}/>
                        {props.files.name}</div>
                </div>
            </>
        )
    }

    function toggleExpand(e) {
        // get e.target and display:none or display:block
        isExpanded = !isExpanded;
    }

    function onClickAction(event) {
        // console.log(name)
        addHighlight(event)
        //TODO display file into editor using state????
        if (event.target.classList.contains('file')) {
            console.log("A File was Selected!")

        }
        isExpanded = !isExpanded;

    }


    function addHighlight(event) {


        //remove old highlight
        removePreviousHighlight();

        // Update new Highlight
        updateNewHighlight(event);

        // This logic checks if you click on Chevron instead of the folder/file
        // if (!highlightEvent.classList.contains('folder-title') && !highlightEvent.classList.contains('file-name')) {
        //     highlightEvent = highlightEvent.parentNode;
        // }

        // Apply Background Color
    }

    function removePreviousHighlight() {
        if (selectedItem != null) {
            selectedItem.target.style.background = '';
        }
    }

    function updateNewHighlight(event) {
        let highlightEvent = event.target;
        highlightEvent.style.background = 'gray';
        dispatch(updateSelectedItem(event));
    }


};


export default DirectoryFoldersLoad;
