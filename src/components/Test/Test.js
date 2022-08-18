import React, {useState} from 'react';
import styles from './Test.module.css';
import {ChevronDown, ChevronRight, Folder} from "react-feather";


const Test = ({files, itemName, onClick, active}) => {
    const [chosen, setChosen] = useState();

    const [isExpanded, toggleExpanded] = useState(false);

    if (files.type === 'folder') {

        return (
            <div className={styles.Test}>

                {/*<div className={styles.parentContainer}> Parent Container*/}
                {/*    <div style={{position: "relative"}}>*/}
                {/*        <div className={styles.childContainer}> Child Container*/}
                {/*            <div style={{position: "relative"}}>*/}
                {/*                <div className={styles.subChildContainer}> Sub Child Container</div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={`folderContainer ${styles.folderContainer} `}>
                    <div style={{position: "relative"}}>
                        <div className={`folderChild ${active ? styles.active : ''}`}
                             onClick={() => helperOnClick(!isExpanded, onClick)}>
                            {isExpanded
                                ? <ChevronDown className={styles.iconGap} color="black" size={14}/>
                                : <ChevronRight className={`${styles.iconGap}`} color="black" size={14}/>
                            }
                            <Folder className={styles.iconGap} color="blue" size={14}/>
                            {files.name}
                        </div>
                        {/*<div style={{position: "absolute"}}> JEREMY!@#*/}


                        {/*</div>*/}
                        {

                            isExpanded && files.items.map(
                                (item) => <Test files={item}
                                                     itemName={item.name}
                                                     active={item.name === chosen}
                                                     onClick={() => setChosen(item.name)}
                                />
                            )


                        }

                    </div>

                </div>

            </div>
        );
    }

    function helperOnClick(isExpanded, onClick) {
        toggleExpanded(isExpanded)
        onClick();
    }

}


export default Test;
