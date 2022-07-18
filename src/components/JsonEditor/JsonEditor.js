import {useState} from "react";
import JSONEditorDemo1 from "./JSONEditorDemo1";
import "./JSONEditorDemo.css";
import Test from "../Test/Test";
import CollectionsV2 from "../CollectionsV2/CollectionsV2";
import Directory from "../Recursion/Directory";

import files from '../../files.json';


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
            ** JSONEditorDemo1 START **
            <JSONEditorDemo1
                jsonBody={jsonBody}
                onChangeJSON={(json) => {
                    setJSON(json);
                }}
            />
            ** JSONEditorDemo1 END **
            <br/>
            ---------------------------------
            <br/>
            ** TEST START **
            <Test></Test>
            ** TEST END **


            <br/>
            ---------------------------------
            <br/>
            ** CollectionsV2 START **
            <CollectionsV2/>
            ** CollectionsV2 END **

            <Directory files={files} />


        </div>
    );
}
