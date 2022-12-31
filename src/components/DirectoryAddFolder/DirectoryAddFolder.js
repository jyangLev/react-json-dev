import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './DirectoryAddFolder.module.css';
import Test from "../Test/Test";



const DirectoryAddFolder = (props) => {
    const [num, setNum] = useState(0);

    function updateFolder(file, stateChanger, counter, setCounter) {
        let val = counter+1;
        setCounter(val)
        //file.items[0].items[0].name = val ;
    }


    function addNewFolder(file, stateChanger, counter, setCounter) {
        setCounter(counter+1)

        file.items[0].items[0].items[0].items[num] = JSON.parse('{"name":"someFolder123","type":"folder","items":[]}')
        setNum(num+1)
    }

    function removeFolder(files, setFiles, counter, setCounter) {
        let tempFile = Object.assign({}, files);

        tempFile.items[0].items[0].items[0].items.pop();
        setFiles(tempFile);
        console.log("test")

    }

    return (
  <div className={styles.DirectoryAddFolder}>
      {/*<button type="button" className="btn btn-primary" onClick={event => updateFolder(props.files, props.setFiles, props.counter, props.setCounter)}>Update Folder</button>*/}
      <button type="button" className="btn btn-secondary" onClick={event => addNewFolder(props.files, props.setFiles, props.counter, props.setCounter)}>New Folder</button>
      <button type="button" className="btn btn-danger" onClick={event => removeFolder(props.files, props.setFiles, props.counter, props.setCounter)}>Remove Folder</button>
  </div>
)};

DirectoryAddFolder.propTypes = {};

DirectoryAddFolder.defaultProps = {};

export default DirectoryAddFolder;
