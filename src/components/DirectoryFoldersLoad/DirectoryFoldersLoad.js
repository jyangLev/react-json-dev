import React, {useState} from 'react';
import styles from './DirectoryFoldersLoad.module.css';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";
import {useDispatch, useSelector} from "react-redux";
import {updateSelectedEventItem} from "../../redux/selectedEventItem";
import {updateSelectedItem} from "../../redux/selectedItem";
import {retrieveFileContent} from "../../common/HttpUtils";


const DirectoryFoldersLoad = (props) => {

    // let isExpanded = false;
    const [isExpanded, setIsExpanded] = useState(false);

    const {selectedEventItem} = useSelector((state) => state.selectedEventItem);
    const dispatch = useDispatch();

    if (props.files != null && props.files.type === 'folder') {
        return (
            <div
                className={`content-container folder ${styles.folderTitle} ${styles.container} ${styles.jeremyBtn}`}>
                <div id={props.files.id} className='content type_folder' onClick={(event) => onClickAction(event)}
                     onDoubleClick={(event) => toggleExpand(!isExpanded)}>
                    {isExpanded
                        ? <ChevronDown className={styles.iconGap} color="black" size={14}/>
                        : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>
                    }
                    <Folder className={`broken_folder ${styles.iconGap}`} color="orange" size={14}/>
                    {props.files.name}
                </div>

                {
                    isExpanded && props.files.items.map((item, index) => <DirectoryFoldersLoad files={item}
                        // highlightedEvent={props.highlightedEvent}
                        // setHighlightedEvent={props.setHighlightedEvent}
                                                                                               key={index}
                                                                                               isFirstElement={false}
                    />)
                }
            </div>
        )
    } else if (props.files != null && props.files.type === 'file') {
        return (
            <>
                <div
                    className={`content-container file ${styles.container} ${styles.jeremyBtn} ${styles.fileContainer}`}
                    onClick={(event) => onClickAction(event)}>
                    <div id={props.files.id} className='content type_file'>
                        <FileText className={styles.iconGap} color="orange" size={14}/>
                        {props.files.name}
                    </div>
                </div>
            </>
        )
    }

    function toggleExpand(value) {
        setIsExpanded(value);
    }

    function onClickAction(event) {
        event.stopPropagation()
        addHighlight(event)

        if (event.target.classList.contains('file')) {
            console.log("A File was Selected!")
        }
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
        if (selectedEventItem != null) {
            selectedEventItem.style.background = '';
        }
    }

    function updateNewHighlight(target) {
        target.style.background = 'gray';
        dispatch(updateSelectedEventItem(target));
        if (target.classList.contains('type_file')) {
            // Update id and type
            let obj = {
                id: target.id,
                type: 'file',
                content: null
            }
            dispatch(updateSelectedItem(obj))

            // Update Content
            let reqObj = {
                url: process.env.REACT_APP_RETRIEVE_FILE_CONTENT,
                reqBody: {
                    id: target.id
                }
            }
            dispatch(retrieveFileContent(reqObj))
            console.log('Finished Dispatching')
        }
    }


};


export default DirectoryFoldersLoad;
