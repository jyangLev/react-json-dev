/**
 Returns epoch time in Milliseconds
 Only Generate when a new file is created
 **/
export function generateUniqueId() {

    return Math.round(Date.now() / 100);
}

export function iterateJsonArray(jsonArray, selectedId, entryObj) {
    if (!selectedId) {
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
        // JsonObj is a folderF
        iterateJsonArray(jsonObj.items, selectedId, entryObj)
    }
    // Do Nothing if JsonObj is a file and has no match
}

export function getMatchingJsonObj(targetVal, jsonArray) {
    return iterateJsonArray2(targetVal, jsonArray, '');
}

export function iterateJsonArray2(targetVal, jsonArray, parent) {
    for (let i = 0; i < jsonArray.length; i++) {
        let val = iterateJsonObject2(jsonArray[i], targetVal, jsonArray);
        if (val != null) {
            return val;
        }
    }
}

function iterateJsonObject2(jsonObj, targetVal, parent) {
    if (jsonObj.id == targetVal) {
        // TODO need to find a way to break recursion when ID is found
        return parent;
    } else if (jsonObj.items) {
        return iterateJsonArray2(targetVal, jsonObj.items, parent)
    }
    return null;
}

