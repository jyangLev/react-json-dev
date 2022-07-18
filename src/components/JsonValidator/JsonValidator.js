// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './JsonValidator.module.css';
//
// const JsonValidator = () => (
//   <div className={styles.JsonValidator}>
//     JsonValidator Component
//   </div>
// );
//
// JsonValidator.propTypes = {};
//
// JsonValidator.defaultProps = {};
//
// export default JsonValidator;


import React from 'react';
import styles from './JsonValidator.module.css';
import './JsonValidator.css';
import Collections from "../Collections/Collections";
import JsonEditor from "../JsonEditor/JsonEditor";
import Test from "../Test/Test";
import Directory from "../Recursion/Directory";
import files from "../../files.json";


function JsonValidator() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row ">
                    <div className='p-2 col background '>
                        <Collections />
                        <Directory files={files} />
                    </div>
                    <div className="p-2 col-6 background">
                        <div className="mb-3">
                            <JsonEditor></JsonEditor>
                        </div>
                    </div>
                    <div className="p-2 col background ">
                        Column
                    </div>
                </div>


            </div>
        </div>
    )
};

// const examineForm = () => (
//
//     console.log("Test123")
// )


export default JsonValidator;
