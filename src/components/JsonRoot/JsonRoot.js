import React from 'react';
import PropTypes from 'prop-types';
import styles from './JsonRoot.module.css';
import Directory from "../Recursion/Directory";
import files from "../../files.json";
import JsonEditor from "../JsonEditor/JsonEditor";
import Test from "../Test/Test";
import FileManager from "../FileManager/FileManager";

const JsonRoot = () => (

  <div className={styles.JsonRoot}>
      <div>
          <div className="container-fluid">
              <div className="row ">
                  <div className='p-2 col background ' style={{position:"relative"}}>
                      {/*<Directory files={files} />*/}
                      <FileManager files={files}/>
                  </div>
                  <div className="p-2 col-10 background">
                      <div className="mb-3">
                          <JsonEditor></JsonEditor>
                      </div>
                  </div>
                  {/*<div className="p-2 col background ">*/}
                  {/*    Column*/}
                  {/*</div>*/}
              </div>


          </div>
      </div>  </div>
);

export default JsonRoot;
