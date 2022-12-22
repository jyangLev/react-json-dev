import React, {useState} from 'react';
// import styles from "../Recursion/Directory.module.css";
import styles from "../FileManager/FileManager.module.css"

// import Directory from "../Recursion/Directory";
import files from "../../files.json";
import {useEffect, useRef} from "react";
import {v4 as uuid} from 'uuid';
import {ChevronDown, ChevronRight, FileText, Folder} from "react-feather";
import axios from "axios";


const FileManager = () => {


    const [fileState, setFileState] = useState(files);

    const ref = useRef(null);
    const [chosen, setChosen] = useState();
    let highlightedFolder = null;

    useEffect(() => {
        console.log("Starting File Manager Component!!!")
    }, []);

    console.log(files.name)


    return (
        <div ref={ref} className={styles.FileManager}>
            <Jeremy files={files}/>

            <br/>
            <br/>
            <br/>
            <button onClick={addNewFolder} type="button" className="btn btn-primary">Primary</button>
        </div>
    )

    function Jeremy({files, itemName, active}) {
        const [isExpanded, toggleExpanded] = useState(false);

        if (files.type === 'folder') {

            return (
                <div id={"folderContainer_" + uuid().slice(0, 8)}
                     className={`folderContainer ${styles.jeremyBtn} `}>


                    <div id={"folderTitle_" + uuid().slice(0, 8)}
                         className={`folderTitle ${active ? styles.active : ''}`}
                         onClick={(event) => helperOnClick(event, !isExpanded)}>

                        {isExpanded
                            ? <ChevronDown className={styles.iconGap} color="red" size={14}/>
                            : <ChevronRight className={`${styles.iconGap}`} color="red" size={14}/>
                        }
                        <Folder className={styles.iconGap} color="blue" size={14}/>
                        {files.name}

                    </div>
                    {

                        isExpanded && files.items.map(
                            (item, index) => <Jeremy files={item}
                                                     itemName={item.name}
                                                     active={item.name === chosen}
                                                     onClick={() => setChosen(item.name)}
                                                     key={index}
                            />
                        )


                    }

                </div>
            )
        }
        return (
            <>
                <div id={"fileName_" + uuid().slice(0, 8)}
                     className={`fileName ${styles.jeremyBtn} ${active ? styles.active : ''}`}
                     onClick={(event) => helperOnClick(event, !isExpanded)}>
                    <FileText className={styles.iconGap} color="blue" size={14}/>
                    {files.name}</div>
            </>
        )

        function helperOnClick(event, isExpanded) {
            toggleExpanded(isExpanded)
            addHighlight(event)
        }

        function addHighlight(event) {
            // let highlightEvent = event.target;
            // highlightEvent.style.background = 'gray';


            let highlightEvent = event.target;
            if (!highlightEvent.classList.contains('folderTitle') && !highlightEvent.classList.contains('fileName')) {
                highlightEvent = highlightEvent.parentNode;
            }
            // Apply Background Color
            highlightEvent.style.background = 'gray';


            if (highlightedFolder == null) {
                highlightedFolder = highlightEvent
            } else if (highlightedFolder.id !== highlightEvent.id) {
                removeHighlightFolder(highlightedFolder)
                highlightedFolder = highlightEvent
            }
        }

        function removeHighlightFolder(highlightedFolder) {
            highlightedFolder.style.background = '';
        }
    }


    function addNewFolder() {

        fetchFileStructure();

        // files.items.push('test')


        if (!localStorage.getItem('react_json')) {
            localStorage.setItem('react_json', JSON.stringify({files}))
        } else {


            const localJsonString = localStorage.getItem('react_json');

            let jsonObj = JSON.parse(localJsonString);


            let addedObj = {
                "name": "new-folder",
                "type": "folder",
                "items": [

                    {
                        "name": "new-sub-folder",
                        "type": "folder",
                        "item": []
                    },
                    {
                        "name": "new-sub-folder2",
                        "type": "folder",
                        "item": []
                    }


                ]
            }


            // jsonObj.files.items.push(addedObj);

            fileState.items.push(addedObj);
            setFileState(fileState)
            // files.items.push(addedObj);

            console.log('started');

            // console.log( files.name);
            // console.log( {files});


            console.log('completed');


            // return <Jeremy files={fileState}   />


            /// Set it with new local Storage

        }
        // alert(files.items[0].name)
    }


    function fetchFileStructure() {

        const options = {

            headers: {
                'Access-Control-Allow-Origin': true
            }
        };

        axios.post('http://localhost:8080/post', {
            firstName: 'Finn',
            lastName: 'Williams'
        }, options)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }


}


export default FileManager;
