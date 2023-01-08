import React from 'react';
import styles from './ContextMenu.module.css';

const ContextMenu = ({x, y, setContextMenu, files, setFiles, selectedItem}) => {


    function onHover(e) {
        e.target.style.backgroundColor = '#cecece';
    }

    function onLeave(e) {
        e.target.style.backgroundColor = '';
    }

    function createNewFile(e) {
        console.log('Creating new File')
        console.log(selectedItem.id)
        // console.log(generateUniqueId());
        iterateJsonArray(files)
    }

    function iterateJsonArray(jsonArray) {
        for (let i = 0; i < jsonArray.length; i++) {
            // Go into each json object
            iterateJsonObject(jsonArray[i])
        }
    }

    function iterateJsonObject(jsonObj) {
        if (jsonObj.id === selectedItem.id) {
            // TODO need to find a way to break recursion when ID is found
            console.log("SUCESSS FOUND MATCHING ID !!!!!!!!!!")

            if (jsonObj.type == 'folder') {
                let obj = generateFileObj();
                jsonObj.items[jsonObj.items.length] = obj;
            }

        } else if (jsonObj.items) {
            // JsonObj is a folder
            iterateJsonArray(jsonObj.items)
        }
        // Do Nothing if JsonObj is a file and has no match

    }

    function generateFileObj() {
        let obj = {
            "name": "file999.css",
            "type": "file",
            "id": generateUniqueId()
        }

        return obj;
    }

    function createNewFolder(e) {
        console.log('Created New Folder')
        console.log(generateUniqueId());

    }

    function deleteItem(e) {
        console.log('Deleted Item')
    }

    function generateUniqueId() {
        /**
         // Returns epoch time in Milliseconds
         // Only Generate when a new file is created
         **/

        return Math.round(Date.now() / 100);

    }

    return (
        <div className={styles.ContextMenu} style={{top: `${y}px`, left: `${x}px`}}
             onClick={() => setContextMenu(false)}>
            <ul className="list-group">
                <li className={`list-group-item ${styles.ContextMenuItem}`} onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={(e) => onLeave(e)} onClick={(e) => createNewFile(e)}>New File
                </li>
                <li className={`list-group-item ${styles.ContextMenuItem}`} onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={(e) => onLeave(e)} onClick={(e) => createNewFolder(e)}>New Folder
                </li>
                <li className={`list-group-item ${styles.ContextMenuItem}`} onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={(e) => onLeave(e)} onClick={(e) => deleteItem(e)}>Delete
                </li>
            </ul>
        </div>
    )
};

ContextMenu.propTypes = {};

ContextMenu.defaultProps = {};

export default ContextMenu;


