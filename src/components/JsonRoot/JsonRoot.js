import React from 'react';
import PropTypes from 'prop-types';
import styles from './JsonRoot.module.css';
import Directory from "../Recursion/Directory";
import files from "../../files.json";
import JsonEditor from "../JsonEditor/JsonEditor";
import Test from "../Test/Test";

const JsonRoot = () => (

  <div className={styles.JsonRoot}>
      <div>
          <div className="container-fluid">
              <div className="row ">
                  <div className='p-2 col background ' style={{position:"relative"}}>
                      {/*<Collections />*/}
                      <Directory files={files} />
                  </div>
                  <div className="p-2 col-10 background">
                      <div className="mb-3">
                          <JsonEditor></JsonEditor>
                          {/*<Test jeremyState={setJeremyState}/>*/}
                      </div>
                  </div>
                  {/*<div className="p-2 col background ">*/}
                  {/*    Column*/}
                  {/*</div>*/}
              </div>


          </div>
      </div>  </div>
);

JsonRoot.propTypes = {};

JsonRoot.defaultProps = {};

export default JsonRoot;
