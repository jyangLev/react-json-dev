import React, {useState} from 'react';
import styles from './JsonRoot.module.css';
import Directory from "../Directory/Directory";
import JsonEditor from "../JsonEditor/JsonEditor";


const JsonRoot = () => {


    let [counter, setCounter] = useState(0);
    const initialContextMenu = {
        show: false,
        x: 0,
        y: 0
    }
    const [contextMenu, setContextMenu] = useState(initialContextMenu)

    function closeContextMenu(){
        if(contextMenu.show === true){
            setContextMenu(initialContextMenu)
        } else{
            console.log("context is already closed")
        }
    }

    return (

        <div className={styles.JsonRoot}>
            <div>
                <div className="container-fluid" onClick={closeContextMenu}>
                    <div className="row ">
                        <div className='p-2 col background '>
                            {counter}
                            <Directory counter={counter} setCounter={setCounter} contextMenu={contextMenu} setContextMenu={setContextMenu} />
                        </div>
                        <div className="p-2 col-10 background">
                            <div className="mb-3">
                                <JsonEditor></JsonEditor>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

JsonRoot.propTypes = {};

JsonRoot.defaultProps = {};

export default JsonRoot;
