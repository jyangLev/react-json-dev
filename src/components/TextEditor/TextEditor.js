import React, {useEffect, useRef} from "react";
import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.css";
import "./TextEditor.css";
import AceEditor from "react-ace";

const TextEditor = (props) => {
    function onChange(newValue) {
        console.log("change", newValue);
    }

    function onLoad(newValue) {

    }

    return (<AceEditor
        placeholder="Placeholder Text"
        mode="java"
        theme="xcode"
        name="blah2"
        onLoad={onLoad}
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
        setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
        }}/>)
};

TextEditor.propTypes = {};

TextEditor.defaultProps = {};

export default TextEditor;
