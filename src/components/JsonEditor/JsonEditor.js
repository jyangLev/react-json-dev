import {useState} from "react";
import JSONEditorDemo1 from "./JSONEditorDemo1";
import "./JSONEditorDemo.css";
import Test from "../Test/Test";
import CollectionsV2 from "../CollectionsV2/CollectionsV2";

export default function JsonEditor() {

    var jsonBodyString = {
        'array': [5, 2, 3],
        'boolean': true,
        'null': null,
        'number': 123,
        'object': {'a': 'b', 'c': 'd'},
        'string': 'Hello World'
    };

    const [jsonBody, setJSON] = useState({jsonBodyString});
    return (
        <div className="Jeremy-Editor">
            <JSONEditorDemo1
                jsonBody={jsonBody}
                onChangeJSON={(json) => {
                    setJSON(json);
                }}
            />
            Collection V2

            <Test></Test>

            <CollectionsV2/>


        </div>
    );
}
