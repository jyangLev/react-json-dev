
/**
 Returns epoch time in Milliseconds
 Only Generate when a new file is created
 **/
export function generateUniqueId() {

    return Math.round(Date.now() / 100);
}

export function iterateJsonArray(jsonArray, selectedId, entryObj) {
    if(!selectedId){
        // when entry is added at root level of structure
        jsonArray.push(entryObj);
        return;
    }
    for (let i = 0; i < jsonArray.length; i++) {
        iterateJsonObject(jsonArray[i], selectedId, entryObj, jsonArray)
    }
}

export function iterateJsonObject(jsonObj, selectedId, entryObj, jsonArray) {

    if (jsonObj.id == selectedId) {
        // TODO need to find a way to break recursion when ID is found
        console.log("SUCESSS FOUND MATCHING ID !!!!!!!!!!")
        if (jsonObj.type == 'folder') {
            // TODO below is how to manually add after last file
            jsonObj.items.push(entryObj)

        } else if (jsonObj.type == 'file') {
            jsonArray.push(entryObj)

        }

    } else if (jsonObj.items) {
        // JsonObj is a folder
        iterateJsonArray(jsonObj.items, selectedId, entryObj)
    }
    // Do Nothing if JsonObj is a file and has no match

}
