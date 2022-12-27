import React, {useState} from 'react';
import DirectoryFolders from "../DirectoryFolders/DirectoryFolders";
import DirectoryAddFolder from "../DirectoryAddFolder/DirectoryAddFolder";

const Directory = (props) => {

    return (

        <div>
            <DirectoryAddFolder files={props.files} setFiles={props.setFiles} counter={props.counter} setCounter={props.setCounter}/>
            <DirectoryFolders files={props.files} setFiles={props.setFiles} />
            {/*<button type="button" className="btn btn-secondary" onClick={event => props.setCounter(props.counter + 1)}>Increment</button>*/}

        </div>



    )
}


export default Directory;
