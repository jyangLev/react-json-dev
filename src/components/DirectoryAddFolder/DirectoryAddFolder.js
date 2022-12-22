import React from 'react';
import PropTypes from 'prop-types';
import styles from './DirectoryAddFolder.module.css';

function addNewFolder(file) {
    console.log();
    file.items[0].items[0].name = 'jeremy-folder'

    // TODO need this to reload the folder structure again but keep proper folders open
}

const DirectoryAddFolder = ({files}) => (
  <div className={styles.DirectoryAddFolder}>
    DirectoryAddFolder Component
      <button type="button" className="btn btn-primary" onClick={event => addNewFolder(files)}>Add New Folder</button>
  </div>
);

DirectoryAddFolder.propTypes = {};

DirectoryAddFolder.defaultProps = {};

export default DirectoryAddFolder;
