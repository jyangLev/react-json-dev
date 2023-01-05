import React from 'react';
import styles from './ContextMenu.module.css';

const ContextMenu = ({x, y, setContextMenu, files, setFiles, target}) => {


    function onHover(e) {
        e.target.style.backgroundColor = '#cecece';
    }
    function onLeave(e) {
        e.target.style.backgroundColor = '';
    }

    function createNewFile(e){
        console.log('Creating new File')
        console.log(e.target)
        console.log(generateUniqueId());

    }
    function createNewFolder(e){
        console.log('Created New Folder')
    }
    function deleteItem(e){
        console.log('Deleted Item')
    }

    function generateUniqueId(){
        // Returns epoch time in Milliseconds
        return Math.round(Date.now() / 100);

    }

    return (
        <div className={styles.ContextMenu} style={{top: `${y}px`, left: `${x}px`}}
             onClick={() => setContextMenu(false)}>
            <ul className="list-group">
                <li className={`list-group-item ${styles.ContextMenuItem}`} onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={(e) => onLeave(e)} onClick={(e)=> createNewFile(e)}>New File
                </li>
                <li className={`list-group-item ${styles.ContextMenuItem}`} onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={(e) => onLeave(e)} onClick={(e)=> createNewFolder(e)}>New Folder
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


