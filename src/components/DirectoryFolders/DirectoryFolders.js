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

    if (props.files != '') {
        return (
            <>
                <DirectoryAddFolder files={props.files} setFiles={props.setFiles} counter={props.counter}
                                    setCounter={props.setCounter}/>
                <div className={styles.directoryLoadFoldersClass} onContextMenu={(e) => handleContextMenu(e)}>

                    <DirectoryLoadFolders files={props.files} selectedItem={selectedItem}
                                          setSelectedItem={setSelectedItem}
                                          selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>

                    {props.contextMenu.show && <ContextMenu x={props.contextMenu.x} y={props.contextMenu.y}
                                                            setContextMenu={props.setContextMenu} files={props.files}
                                                            setFiles={props.setFiles} target={target}/>}
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