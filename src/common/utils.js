import ContextMenu from "../components/ContextMenu/ContextMenu";

/**
 Returns epoch time in Milliseconds
 Only Generate when a new file is created
 **/
export function createNewFile(e) {
    // console.log('Creating new File')
    // console.log(selectedItem.id)
    // iterateJsonArray(files, selectedItem.id)
}

export function createNewFolder(e) {
    // console.log('Created New Folder')
    generateUniqueId();

}

export function generateUniqueId() {

    return Math.round(Date.now() / 100);
}

// Starting POINT
export function iterateJsonArray(jsonArray, selectedId, entryObj) {
    for (let i = 0; i < jsonArray.length; i++) {
        // Go into each json object
        iterateJsonObject(jsonArray[i], selectedId, entryObj)
    }
}

export function iterateJsonObject(jsonObj, selectedId, entryObj) {
    if (jsonObj.id === selectedId) {
        // TODO need to find a way to break recursion when ID is found
        console.log("SUCESSS FOUND MATCHING ID !!!!!!!!!!")

        if (jsonObj.type === 'folder') {
            // TODO below is how to manually add after last file
            jsonObj.items.push(entryObj)

        } else {
            // This is when a file is selected
        }

    } else if (jsonObj.items) {
        // JsonObj is a folder
        iterateJsonArray(jsonObj.items, selectedId, entryObj)
    }
    // Do Nothing if JsonObj is a file and has no match

}
