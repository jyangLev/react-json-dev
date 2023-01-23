import React from 'react';
import styles from './DirectoryFoldersLoad.module.css';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";
import {useDispatch, useSelector} from "react-redux";
import {updateSelectedItem} from "../../redux/selectedItem";


const DirectoryFoldersLoad = (props) => {

    let isExpanded = true;
    const {selectedItem} = useSelector((state) => state.selectedItem);
    const dispatch = useDispatch();

    if (props.files != null && props.files.type === 'folder') {
        return (
            <div id={props.files.id}
                 className={`content-container folder ${styles.folderTitle} ${styles.container} ${styles.jeremyBtn}`}>
                <div className='content' onClick={(event) => onClickAction(event)}
                     onDoubleClick={(event) => toggleExpand(event)}>
                    {isExpanded
                        ? <ChevronDown className={styles.iconGap} color="black" size={14}/>
                        : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>
                    }
                    <Folder className={`broken_folder ${styles.iconGap}`} color="orange" size={14}/>
                    {props.files.name}
                </div>

                {
                    isExpanded && props.files.items.map((item, index) => <DirectoryFoldersLoad files={item}
                                                                                               highlightedEvent={props.highlightedEvent}
                                                                                               setHighlightedEvent={props.setHighlightedEvent}
                                                                                               key={index}
                                                                                               isFirstElement={false}
                    />)
                }
            </div>
        )
    } else if (props.files != null && props.files.type === 'file') {
        return (
            <>
                <div id={props.files.id}
                     className={`content-container file ${styles.container} ${styles.jeremyBtn} ${styles.fileContainer}`}
                     onClick={(event) => onClickAction(event)}>
                    <div className='content'>

                        <FileText className={styles.iconGap} color="orange" size={14}/>
                        {props.files.name}
                    </div>
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
        event.stopPropagation()
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

        let target = event.target;

        if (!target.classList.contains('content')) {
            // if icons are selected, find its parent content class
            target = findParentContentClass(target);
        }

        updateNewHighlight(target);
    }

    function findParentContentClass(target) {
        if (target.classList.contains('content')) {
            return target;
        }
        return findParentContentClass(target.parentElement);
    }

    function removePreviousHighlight() {
        if (selectedItem != null) {
            selectedItem.style.background = '';
        }
    }

    function updateNewHighlight(target) {
        target.style.background = 'gray';
        dispatch(updateSelectedItem(target));
    }


};


export default DirectoryFoldersLoad;
