import React, {useState} from 'react';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";
import styles from "./DirectoryFolders.module.css";
import DirectoryLoadFolders from "../DirectoryLoadFolders/DirectoryLoadFolders";
import DirectoryAddFolder from "../DirectoryAddFolder/DirectoryAddFolder";
import ContextMenu from "../ContextMenu/ContextMenu";

const DirectoryFolders = (props) => {

    const [selectedItem, setSelectedItem] = useState();  // Should this contain the UUID? So that we can reference it?
    const [selectedEvent, setSelectedEvent] = useState();
    const initialContextMenu = {
        show: false,
        x: 0,
        y: 0
    }
    let target = null;

    function handleContextMenu(e) {
        e.preventDefault();
        console.log(e.target)
        const {pageX, pageY} = e
        props.setContextMenu({show: true, x: pageX, y: pageY})
        target = e.target;
    }

    if (props.files && props.files.length > 0) {
        return (

            props.files.map((item, index) =>
                <>
                    <div className={styles.directoryLoadFoldersClass} onContextMenu={(e) => handleContextMenu(e)}>

                        <DirectoryLoadFolders files={item} selectedItem={selectedItem}
                                              setSelectedItem={setSelectedItem}
                                              selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>

                        {props.contextMenu.show && <ContextMenu x={props.contextMenu.x} y={props.contextMenu.y}
                                                                setContextMenu={props.setContextMenu}
                                                                files={item}
                                                                setFiles={props.setFiles} target={target}/>}
                    </div>

                </>
            )

        )
    }


};

DirectoryFolders.propTypes = {};

DirectoryFolders.defaultProps = {};

export default DirectoryFolders;
