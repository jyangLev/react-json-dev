import React from 'react';
import styles from './Editor.module.css';
import TextEditor from "../TextEditor/TextEditor";
import FileTabs from "../FileTabs/FileTabs";

const Editor = () => {
    return (
        <div className={styles.Editor}>
            <FileTabs/>
            <TextEditor/>

        </div>
    )
};

Editor.propTypes = {};

Editor.defaultProps = {};

export default Editor;
