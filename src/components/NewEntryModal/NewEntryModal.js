import React, {useState} from 'react';
import styles from './NewEntryModal.module.css';
import {generateUniqueId, iterateJsonArray} from "../../common/utils";

const NewEntryModal = (props) => {

    const[localName, setLocalName] = useState('');


    function handleChange(e) {
        setLocalName(e.target.value)
    }

    function saveNewEntry() {

        let tempEntryObj = Object.assign({}, props.entryObj);
        tempEntryObj.name = localName;
        tempEntryObj.id = generateUniqueId();
        if(tempEntryObj.type == 'folder'){
            tempEntryObj.items = [];
        }
        props.setEntryObj(tempEntryObj);

        iterateJsonArray(props.files, props.targetVal.id, tempEntryObj)

    }

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className={`modal-header ${styles.modalHeader}`}>
                            <h5 className="modal-title" id="exampleModalLabel">New File</h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className={`modal-body ${styles.modalBody}`}>
                            <input type="text" className={`form-control ${styles.inputField}`} id="entryInputField"
                                   placeholder="Name" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className={`modal-footer ${styles.modalFooter}`}>
                            {/*<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                            <button type="button" className={`btn btn-primary ${styles.btnPrimary}`}
                                    data-bs-dismiss="modal"
                                    onClick={saveNewEntry}>Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

NewEntryModal.propTypes = {};

NewEntryModal.defaultProps = {};

export default NewEntryModal;
