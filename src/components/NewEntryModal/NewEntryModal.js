import React from 'react';
import styles from './NewEntryModal.module.css';

const NewEntryModal = () => {
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
                            <input type="text" className={`form-control ${styles.inputField}`} id="newEntryModal" placeholder="Name"/>
                        </div>
                        <div className={`modal-footer ${styles.modalFooter}`}>
                            {/*<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                            <button type="button" className={`btn btn-primary ${styles.btnPrimary}`}>Save</button>
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
