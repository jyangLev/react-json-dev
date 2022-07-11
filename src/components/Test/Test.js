import React from 'react';
import styles from './Test.module.css';


export let jsonBody = {
    "collections": [
        {
            "path": "summer",
            "name": "summer",
            "type": "directory",
            "children": [
                {
                    "path": "summer/june",
                    "name": "june",
                    "type": "directory",
                    "children": [
                        {
                            "path": "summer/june/windsurf.json",
                            "name": "windsurf.json",
                            "type": "file",
                            "extension": ".json"
                        }
                    ]
                }
            ]
        },
        {
            "path": "winter",
            "name": "winter",
            "type": "directory",
            "children": [
                {
                    "path": "winter/january",
                    "name": "january",
                    "type": "directory",
                    "children": [
                        {
                            "path": "winter/january/ski.png",
                            "name": "ski.png",
                            "type": "file",
                            "extension": ".png"
                        },
                        {
                            "path": "winter/january/snowboard.json",
                            "name": "snowboard.json",
                            "type": "file",
                            "extension": ".json"
                        }
                    ]
                }
            ]
        },
        {
            "path": "spring",
            "name": "spring",
            "type": "directory",
            "children": [
                {
                    "path": "spring/april",
                    "name": "april",
                    "type": "directory",
                    "children": [
                        {
                            "path": "spring/april/grass.png",
                            "name": "grass.png",
                            "type": "file",
                            "extension": ".png"
                        },
                        {
                            "path": "spring/april/tennis.json",
                            "name": "tennis.json",
                            "type": "file",
                            "extension": ".json"
                        }
                    ]
                }
            ]
        }

    ]
};


const Test = () => {

    iterateJson(jsonBody.collections);
    let nodes = parseChildren(jsonBody.collections);
    return (

        <div className={styles.Test}>
            ------START------

            {nodes}

            -----END-------


        </div>
    );
}


function parseChildren(nodes) {
    let list = [];
    for (let i = 0; i < nodes.length; i++) {
        // create a list of each children objects, and then pass it to the parent React Create Element Obj?
        // Create a list of File/Folders aka (Nested Folders)
        list.push(parseChild(nodes[i]))
    }
    return React.createElement('ul', {className: `${styles.jeremyUl}`}, list);

}

function parseChild(node) {
    let childElement
    if (node.children) {
        // If this is a Folder
        //  childElement= React.createElement('ul',{},React.createElement('li', {className: node.name}, node.name, parseChildren(node.children)))
        childElement = React.createElement('li', {className: `${styles.jeremyLi}`}, node.name, parseChildren(node.children));
    } else {
        // If this is a File
        childElement = React.createElement('li', {className: `${styles.jeremyLi}`}, node.name);
    }
    return childElement;

}

function iterateJson(children) { // It's an array
    for (let child of children) {
        // File or Folder
        if (child.children === undefined) {
            // console.log('children Undefined');
            console.log('---file OR folder');
            console.log('Path : ' + child.path)
            // set boolean
            return;
        } else {
            // Always Folder
            console.log('---folder');
            console.log('Path : ' + child.path)

            iterateJson(child.children)
        }
    }
}


export default Test;
