import React from 'react';
import styles from './CollectionsV2.module.css';
import {jsonBody} from "../Test/Test";
import {FileText, Folder} from 'react-feather';


const CollectionsV2 = () => {
    let folderIcon = React.createElement('div', {}, <FileText color="red" size={14}/>)

    // TODO THIS WORKS BROOOO
    let parentElement = React.createElement('div', {
        className: 'test',
        'data-bs-toggle': 'collapse',
        'data-bs-target': '.collapse5'
    }, 'PARENT BUTTON')

    let childElement = React.createElement('div', {className: 'collapse collapse5'}, 'Child Folder')

    let nodes = parseChildren(jsonBody.collections);
    return (

        <div>
            {/*-----Start 1------*/}
            {/*{parentElement}*/}
            {/*{childElement}*/}
            {/*{folderIcon}*/}
            {/*------End 1------*/}

            *******START******

            {nodes}


        </div>
    );
}

// Parse the Root Folders
function parseChildren(nodes) {
    let list = [];
    for (let i = 0; i < nodes.length; i++) {
        list.push(parseChild(nodes[i]))
    }

    // Create Root Div
    return React.createElement('div', {className: `${styles.jeremyBtn}`}, list);

}

function parseChild(node) {

    let childElement
    let list = [];
    if (node.children) {


        ////// REDO

        let contentList = [];
        contentList.push(<Folder color="blue" size={14}/>);
        contentList.push(node.name)

        let parentContent = React.createElement('div', {}, contentList)
        // let parentFolderContainer = React.createElement('div', {
        //     className: `${styles.jeremyBtn}`,
        //     'data-bs-toggle': 'collapse',
        //     'data-bs-target': '.collapse5'  // TODO Hard Coded, need to make the Target a Dynamic Value
        // }, parentContent);
        let parentFolderContainer = React.createElement('div', {
            className: ` ${styles.jeremyBtn}`,
            'data-bs-toggle': 'collapse',
            'data-bs-target': '.collapse5'
        }, parentContent);

        list.push(parentFolderContainer);


        // TODO CHILD CONTAINER
        // Create  Child Folder Container
        let childFolderContainer = parseChildren(node.children);

        // Push Child Folder Container
        list.push(childFolderContainer);

        return React.createElement('div', {}, list);

    } else {

        // TODO Still need to work on ELSE Statemenet
        // If this is a File

        let contentList = [];
        contentList.push(<FileText color="blue" size={14}/>);
        contentList.push(node.name)


        childElement = React.createElement('div', {className: `${styles.jeremyBtn}`}, contentList);
    }
    return childElement;

}

export default CollectionsV2;
