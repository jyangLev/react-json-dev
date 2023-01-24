import React, {useState} from 'react';
import styles from "./DirectoryFolders.module.css";
import DirectoryLoadFolders from "../DirectoryLoadFolders/DirectoryLoadFolders";
import DirectoryFoldersLoad from "../DirectoryFoldersLoad/DirectoryFoldersLoad";

const DirectoryFolders = (props) => {

    let initHighlightedEvent = {
        event: null
    }

    const [highlightedEvent, setHighlightedEvent] = useState(initHighlightedEvent);

    const [selectedItem, setSelectedItem] = useState();  // Should this contain the UUID? So that we can reference it?
    const [selectedEvent, setSelectedEvent] = useState();


    if (props.files && props.files.length > 0) {
        return (

            props.files.map((item, index) =>
                <div key={index}>
                    <div className={styles.directoryLoadFoldersClass}>
                        <DirectoryFoldersLoad files={item} selectedItem={selectedItem}
                                              highlightedEvent={highlightedEvent}
                                              // setHighlightedEvent={setHighlightedEvent}
                                              // setSelectedItem={setSelectedItem}
                                              selectedEvent={selectedEvent}
                                              setSelectedEvent={setSelectedEvent}
                                              isFirstElement={true}
                                              key={index}
                        />
                    </div>
                </div>
            )

        )
    }


};

DirectoryFolders.propTypes = {};

DirectoryFolders.defaultProps = {};

export default DirectoryFolders;
