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
    const [contextMenu, setContextMenu] = useState(initialContextMenu)

    function handleContextMenu(e) {
        e.preventDefault();
        const {pageX, pageY} = e
        setContextMenu({show: true, x: pageX, y: pageY})
    }

    function closeContextMenu(){
        setContextMenu(initialContextMenu);
    }


    if (props.files != '') {
        return (
            <>
                <DirectoryAddFolder files={props.files} setFiles={props.setFiles} counter={props.counter}
                                    setCounter={props.setCounter}/>
                <div className={styles.directoryLoadFoldersClass} onClick={closeContextMenu}  onContextMenu={(e) => handleContextMenu(e)}>

                    <DirectoryLoadFolders files={props.files} selectedItem={selectedItem}
                                          setSelectedItem={setSelectedItem}
                                          selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>
                    {contextMenu.show && <ContextMenu x={contextMenu.x} y={contextMenu.y} setContextMenu={setContextMenu}/>}
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