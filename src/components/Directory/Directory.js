import React, {useState} from 'react';
import DirectoryFolders from "../DirectoryFolders/DirectoryFolders";
import DirectoryAddFolder from "../DirectoryAddFolder/DirectoryAddFolder";

const Directory = ({files}) => {

    return (

        <div>

            <DirectoryFolders files={files} />
            <DirectoryAddFolder files={files}/>

        </div>



    )
}


export default Directory;
