import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './DirectoryAddFolder.module.css';
import Test from "../Test/Test";



const DirectoryAddFolder = (props) => {
    const [num, setNum] = useState(0);

    function addNewFolder(files, setFiles) {
        let tempFile = Object.assign({}, files);
        tempFile.items[0].items[0].items[0].items[0] = JSON.parse('{"name":"someFolder123","type":"folder","items":[]}')
        setFiles(tempFile)

        // TODO ThIS WILL NOT ADD MORE THAN ONE SINCE ITS HARD CODED, need to dynamically add folder/file to specific folder
    }

    function removeFolder(files, setFiles) {
        let tempFile = Object.assign({}, files);

        tempFile.items[0].items[0].items[0].items.pop();
        setFiles(tempFile);
        console.log("test")

    }

    return (
  <div className={styles.DirectoryAddFolder}>
      <button type="button" className="btn btn-secondary" onClick={event => addNewFolder(props.files, props.setFiles)}>New Folder</button>
      <button type="button" className="btn btn-danger" onClick={event => removeFolder(props.files, props.setFiles)}>Remove Folder</button>
  </div>
)};

DirectoryAddFolder.propTypes = {};

DirectoryAddFolder.defaultProps = {};

export default DirectoryAddFolder;
