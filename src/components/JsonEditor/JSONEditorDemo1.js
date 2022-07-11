import React, {useEffect, useRef} from "react";

import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.css";
import "./JSONEditorDemo.css";


const JSONEditorDemo1 = (props) => {
    const containerRef = useRef(null);
    const editorRef = useRef(null);

    // const options = {
    //     mode: 'code',
    //     // onChangeJSON: props.jsonBody,
    //     mainMenuBar: true,
    //     statusBar: false,
    //     onTextSelectionChange(start, end) {
    //         // console.log(start)
    //         // console.log(end)
    //     },
    //     colorPicker: true,
    //     onBlur() {
    //         // console.log("BLURRR");
    //         // console.log(editorRef.current.getText());
    //         // let currJsonBody =   editorRef.current.getText();
    //         // let body = {
    //         //     'hello':'goodMorning',
    //         //     'jeremy':false
    //         // }
    //
    //
    //         // USE THIS TO UPDATE JSON
    //         // props.onChangeJSON(currJsonBody);
    //
    //         // var formattedString = JSON.stringify(body);
    //         // editorRef.current.setText(formattedString);
    //
    //     }
    // };

    useEffect(() => {
        // const options = { ...props };
        const options = {
            mode: 'code',
            // onChangeJSON: props.jsonBody,
            mainMenuBar: true,
            statusBar: false,
            onTextSelectionChange(start, end) {
                // console.log(start)
                // console.log(end)
            },
            colorPicker: true,
            onBlur() {
                // console.log("BLURRR");
                // console.log(editorRef.current.getText());
                // let currJsonBody =   editorRef.current.getText();
                // let body = {
                //     'hello':'goodMorning',
                //     'jeremy':false
                // }


                // USE THIS TO UPDATE JSON
                // props.onChangeJSON(currJsonBody);

                // var formattedString = JSON.stringify(body);
                // editorRef.current.setText(formattedString);

            }
        };

        if (containerRef.current) {
            editorRef.current = new JSONEditor(containerRef.current, options);
            editorRef.current.set(props.jsonBody);
        }

        return () => {
            if (editorRef.current) {
                editorRef.current.destroy();
            }
        };
    }, [containerRef, props.jsonBody, props]);

    return <div ref={containerRef}/>;
};

export default JSONEditorDemo1;
