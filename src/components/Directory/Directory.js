import React, {useState} from 'react';
import DirectoryFolders from "../DirectoryFolders/DirectoryFolders";
import DirectoryAddFolder from "../DirectoryAddFolder/DirectoryAddFolder";

const Directory = (props) => {

    return (

        <div>

            <DirectoryFolders files={props.files} filesStateChanger={props.fileStateChanger} />
            <DirectoryAddFolder files={props.files} filesStateChanger={props.fileStateChanger} counter={props.counter} setCounter={props.setCounter}/>
            <button type="button" className="btn btn-secondary" onClick={event => props.setCounter(props.counter + 1)}>Increment</button>

        </div>



    )
}


export default Directory;
