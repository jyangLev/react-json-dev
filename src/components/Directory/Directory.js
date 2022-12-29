import React, {useState} from 'react';
import DirectoryFolders from "../DirectoryFolders/DirectoryFolders";
import DirectoryAddFolder from "../DirectoryAddFolder/DirectoryAddFolder";
import Test from "../Test/Test";
import DirectoryLoadFolders from "../DirectoryLoadFolders/DirectoryLoadFolders";

const Directory = (props) => {

    return (

        <div>
            <DirectoryAddFolder files={props.files} setFiles={props.setFiles} counter={props.counter} setCounter={props.setCounter}/>
            {/*<DirectoryLoadFolders  files={props.files} setFiles={props.setFiles} />*/}

            <DirectoryFolders files={props.files} setFiles={props.setFiles} />
            {/*<Test/>*/}
        </div>



    )
}


export default Directory;
