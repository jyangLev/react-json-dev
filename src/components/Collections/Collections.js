import React from 'react';
import styles from './Collections.module.css';
import {FileText, Folder} from 'react-feather';


// `${styles.jeremyBtn}`
function Collections() {
    return (
        //TODO Root
        <div className={` ${styles.jeremyBtn}`}>
            {/* TODO Root Container*/}
            <div className='root-container'>
                <div className={styles.jeremyBtn} data-bs-toggle="collapse"
                     data-bs-target=".collapse5">
                    <Folder color="red" size={14}/>
                    Parent Btn
                </div>
                {/* TODO Child Container*/}
                <div className={`collapse collapse5 ${styles.jeremyBtn}`}>
                    <div className={styles.jeremyBtn} data-bs-toggle="collapse"
                         data-bs-target=".collapse6">
                        <Folder color="red" size={14}/>
                        Child Btn 1
                    </div>
                    <div className={`collapse collapse6 ${styles.jeremyBtn}`}>
                        <div className={styles.jeremyBtn} data-bs-toggle="collapse"
                             data-bs-target=".collapse7">
                            <Folder color="red" size={14}/>
                            Child btn 2
                        </div>
                        <div className={`collapse collapse5 ${styles.jeremyBtn}`}>
                            <div className={`collapse collapse7 ${styles.jeremyBtn}`}>
                                <FileText color="red" size={14}/>
                                Inside Item 4
                            </div>
                            <div className={`collapse collapse7 ${styles.jeremyBtn}`}>
                                <FileText color="red" size={14}/>
                                Inside Item 5
                            </div>
                        </div>
                    </div>
                    <div className={`collapse collapse6 ${styles.jeremyBtn}`}>
                        <div className={styles.jeremyBtn} data-bs-toggle="collapse"
                             data-bs-target=".collapse7">
                            <FileText color="red" size={14}/>
                            Inside Item 6
                        </div>
                    </div>
                </div>
            </div>
        </div>)
};


export default Collections;
