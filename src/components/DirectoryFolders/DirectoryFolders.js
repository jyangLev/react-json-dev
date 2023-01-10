import React, {useState} from 'react';
import styles from "./DirectoryFolders.module.css";
import DirectoryLoadFolders from "../DirectoryLoadFolders/DirectoryLoadFolders";
import ContextMenu from "../ContextMenu/ContextMenu";

const DirectoryFolders = (props) => {

    const [selectedItem, setSelectedItem] = useState();  // Should this contain the UUID? So that we can reference it?
    const [selectedEvent, setSelectedEvent] = useState();
    const [isNewEntryModalOpen, setIsNewEntryModalOpen] = useState();


    function handleContextMenu(e) {
        e.preventDefault();
        console.log(e.target)
        const {pageX, pageY} = e
        props.setContextMenu({show: true, x: pageX, y: pageY})
        props.setTargetVal(e.target)
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
                                                                files={props.files}
                                                                setFiles={props.setFiles}
                                                                selectedItem={props.targetVal}
                                                                setIsNewEntryModalOpen={setIsNewEntryModalOpen}
                                                                entryObj={props.entryObj}
                                                                setEntryObj={props.setEntryObj}
                        />}
                    </div>
                </>
            )

        )
    }


};

DirectoryFolders.propTypes = {};

DirectoryFolders.defaultProps = {};

export default DirectoryFolders;
