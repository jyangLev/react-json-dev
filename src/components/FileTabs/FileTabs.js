import React from 'react';
import styles from './FileTabs.module.css';
import {useSelector} from "react-redux";

const FileTabs = () => {
    const id = useSelector((state) => state.selectedItem.id);
    const type = useSelector((state) => state.selectedItem.type);
    const content = useSelector((state) => state.selectedItem.content);

    return(
  <div className={styles.FileTabs}>
      <ul>
          <li>{id}</li>
          <li>{type}</li>
          <li>{content}</li>
      </ul>

    FileTabs Component
  </div>
)};

FileTabs.propTypes = {};

FileTabs.defaultProps = {};

export default FileTabs;
