import React, {useState} from 'react';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";
import styles from "./DirectoryFolders.module.css";
import DirectoryLoadFolders from "../DirectoryLoadFolders/DirectoryLoadFolders";
import DirectoryAddFolder from "../DirectoryAddFolder/DirectoryAddFolder";

const DirectoryFolders = (props) => {

    const [selectedItem, setSelectedItem] = useState();  // Should this contain the UUID? So that we can reference it?
    const [selectedEvent, setSelectedEvent] = useState();


    if (props.files != '') {
        return (
            <>
                <DirectoryAddFolder files={props.files} setFiles={props.setFiles} counter={props.counter}
                                    setCounter={props.setCounter}/>
                <div className={styles.directoryLoadFoldersClass}>

                    <DirectoryLoadFolders files={props.files} selectedItem={selectedItem}
                                          setSelectedItem={setSelectedItem}
                                          selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>
                </div>

            </>
        )
    }
    return <DirectoryAddFolder files={props.files} setFiles={props.setFiles} counter={props.counter}
                               setCounter={props.setCounter}/>


};

DirectoryFolders.propTypes = {};

DirectoryFolders.defaultProps = {};

export default DirectoryFolders;


//files={item}
//                                                      itemName={item.name}
//                                                      active={item.name === chosen}
//                                                      onClick={() => setChosen(item.name)}
//                                                      key={index}