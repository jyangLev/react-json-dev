import React from 'react';
import styles from './ContextMenu.module.css';
import {getMatchingJsonObj} from "../../common/utils";

const ContextMenu = ({
                         x,
                         y,
                         files,
                         setContextMenu,
                         entryObj,
                         setEntryObj,
                         targetVal
                     }) => {

    function onHover(e) {
        e.target.style.backgroundColor = '#cecece';
    }

    function onLeave(e) {
        e.target.style.backgroundColor = '';
    }

    function selectEntryType(e) {
        console.log("Creating new Entry")
        if (e.target.id === 'newFile') {
            let tempObj = Object.assign({}, entryObj);
            tempObj.type = 'file';
            setEntryObj(tempObj);
        } else if (e.target.id === 'newFolder') {
            let tempObj = Object.assign({}, entryObj);
            tempObj.type = 'folder';
            setEntryObj(tempObj);
        } else {
            console.error('Delete was selected!!!')
        }
    }

    function deleteEntry(e) {
        console.log('Deleted Item')
        let parent = getMatchingJsonObj(targetVal.id, files)

        if (parent) {
            for (const index in parent) {
                if (parent[index].id === targetVal.id) {
                    parent.splice(index, 1)
                    // TODO Save To DB after removing element
                }
            }
        } else {
            console.error('Did not find any matching value for Deletion')
        }
    }

    return (
        <div>
            <div className={styles.ContextMenu} style={{top: `${y}px`, left: `${x}px`}}
                 onClick={() => setContextMenu(false)}>
                <ul className="list-group">
                    <li className={`list-group-item ${styles.ContextMenuItem}`} id='newFile'
                        onMouseEnter={(e) => onHover(e)}
                        onMouseLeave={(e) => onLeave(e)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={(e) => selectEntryType(e)}>New File
                    </li>
                    <li className={`list-group-item ${styles.ContextMenuItem}`} id='newFolder'
                        onMouseEnter={(e) => onHover(e)}
                        onMouseLeave={(e) => onLeave(e)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={(e) => selectEntryType(e)}>New Folder
                    </li>
                    <li className={`list-group-item ${styles.ContextMenuItem}`} onMouseEnter={(e) => onHover(e)}
                        onMouseLeave={(e) => onLeave(e)} onClick={(e) => deleteEntry(e)}>Delete
                    </li>
                </ul>
            </div>
        </div>

    )
};

ContextMenu.propTypes = {};

ContextMenu.defaultProps = {};

export default ContextMenu;


