import React, {useState} from 'react';
import DirectoryFolders from "../DirectoryFolders/DirectoryFolders";
import DirectoryAddFolder from "../DirectoryAddFolder/DirectoryAddFolder";
import Test from "../Test/Test";
import DirectoryLoadFolders from "../DirectoryLoadFolders/DirectoryLoadFolders";

const Directory = (props) => {

    return (

        <div>
            <DirectoryFolders files={props.files} setFiles={props.setFiles} counter={props.counter}
                              setCounter={props.setCounter}
                              contextMenu={props.contextMenu} setContextMenu={props.setContextMenu}/>
        </div>


    )
}


export default Directory;
