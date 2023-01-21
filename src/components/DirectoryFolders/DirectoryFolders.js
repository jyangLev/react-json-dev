import React, {useState} from 'react';
import styles from "./DirectoryFolders.module.css";
import DirectoryLoadFolders from "../DirectoryLoadFolders/DirectoryLoadFolders";
import DirectoryFoldersLoad from "../DirectoryFoldersLoad/DirectoryFoldersLoad";

const DirectoryFolders = (props) => {

    let initHighlightedEvent = {
        event: null
    }

    const[highlightedEvent, setHighlightedEvent] = useState(initHighlightedEvent);

    const [selectedItem, setSelectedItem] = useState();  // Should this contain the UUID? So that we can reference it?
    const [selectedEvent, setSelectedEvent] = useState();



    if (props.files && props.files.length > 0) {
        return (

            props.files.map((item) =>
                <>
                    {/*<div className={styles.directoryLoadFoldersClass} onContextMenu={(e) => handleContextMenu(e)}>*/}
                    <div className={styles.directoryLoadFoldersClass}>

                        {/*<DirectoryLoadFolders files={item} selectedItem={selectedItem}*/}
                        {/*                      setSelectedItem={setSelectedItem}*/}
                        {/*                      selectedEvent={selectedEvent}*/}
                        {/*                      setSelectedEvent={setSelectedEvent}*/}
                        {/*                      isFirstElement={true}*/}

                        {/*/>*/}
                        
                        <DirectoryFoldersLoad files={item} selectedItem={selectedItem}
                                              highlightedEvent={highlightedEvent}
                                              setHighlightedEvent={setHighlightedEvent}
                                              setSelectedItem={setSelectedItem}
                                              selectedEvent={selectedEvent}
                                              setSelectedEvent={setSelectedEvent}
                                              isFirstElement={true}

                        />

                    </div>
                </>
            )

        )
    }


};

DirectoryFolders.propTypes = {};

DirectoryFolders.defaultProps = {};

export default DirectoryFolders;
