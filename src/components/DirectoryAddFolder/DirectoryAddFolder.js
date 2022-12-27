import React from 'react';
import PropTypes from 'prop-types';
import styles from './DirectoryAddFolder.module.css';
import Test from "../Test/Test";

function addNewFolder(file, stateChanger, counter, setCounter) {
    console.log();
    let val = counter+1;
    setCounter(val)
    file.items[0].items[0].name = val ;


    //stateChanger(file);  // Not sure if i need this

    // TODO need this to reload the folder structure again but keep proper folders open
}


const DirectoryAddFolder = (props) => (
  <div className={styles.DirectoryAddFolder}>
    DirectoryAddFolder Component
      <button type="button" className="btn btn-primary" onClick={event => addNewFolder(props.files, props.filesStateChanger, props.counter, props.setCounter)}>Update Folder</button>
        {/*<Test/>*/}
  </div>
);

DirectoryAddFolder.propTypes = {};

DirectoryAddFolder.defaultProps = {};

export default DirectoryAddFolder;
