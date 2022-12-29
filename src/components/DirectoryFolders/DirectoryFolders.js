import React, {useState} from 'react';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";
import styles from "./DirectoryFolders.module.css";
import DirectoryLoadFolders from "../DirectoryLoadFolders/DirectoryLoadFolders";

const DirectoryFolders = (props) => {

    const [selectedItem, setSelectedItem] = useState();
    const [selectedEvent, setSelectedEvent] = useState();


    return(
    <>
        <DirectoryLoadFolders  files={props.files} selectedItem = {selectedItem} setSelectedItem={setSelectedItem} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} />

    </>
)


};

DirectoryFolders.propTypes = {};

DirectoryFolders.defaultProps = {};

export default DirectoryFolders;


//files={item}
//                                                      itemName={item.name}
//                                                      active={item.name === chosen}
//                                                      onClick={() => setChosen(item.name)}
//                                                      key={index}