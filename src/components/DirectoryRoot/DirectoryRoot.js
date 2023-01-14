import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './DirectoryRoot.module.css';
import Directory from "../Directory/Directory";


const DirectoryRoot = () => {
    const initialContextMenu = {
        show: false,
        x: 0,
        y: 0
    }
    const [contextMenu, setContextMenu] = useState(initialContextMenu)

    function closeContextMenu() {
        if (contextMenu.show === true) {
            setContextMenu(initialContextMenu)
        } else {
            console.log("context is already closed")
        }
    }

    return (
        <div className={styles.DirectoryRoot} onClick={closeContextMenu}>
            <Directory contextMenu={contextMenu}
                       setContextMenu={setContextMenu}/>

        </div>

    )
};

DirectoryRoot.propTypes = {};

DirectoryRoot.defaultProps = {};

export default DirectoryRoot;
