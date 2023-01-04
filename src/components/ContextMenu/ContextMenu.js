import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContextMenu.module.css';

const ContextMenu = ({x,y, setContextMenu}) => (
  <div className={styles.ContextMenu} style={{top:`${y}px`, left:`${x}px`}} onClick={()=> setContextMenu(false)}>
      <ul className="list-group">
          <li className="list-group-item disabled" aria-disabled="true">A disabled item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
      </ul>  </div>
);

ContextMenu.propTypes = {};

ContextMenu.defaultProps = {};

export default ContextMenu;
