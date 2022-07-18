import React, {useState} from 'react';



const Directory = ({ files }) => {
    const [isExpanded, toggleExpanded] = useState(false);

    if (files.type === 'folder') {
        return (
            <div className="folder">
                <div className="folder-title" onClick={() => toggleExpanded(!isExpanded)}>{files.name}</div>
                {
                    isExpanded && files.items.map((item) => <Directory files={item} />)
                }
            </div>
        )
    }
    return (
        <>
            <div className="file-name">{files.name}</div>
        </>
    )
}


export default Directory;
