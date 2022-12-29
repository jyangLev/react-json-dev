import React from 'react';
import styles from './Test.module.css';
import {formatDollars} from "../../common/utils";


const Test = () => {
    document.onclick = hideMenu;
    document.oncontextmenu = rightClick;

    function hideMenu() {
        document.getElementById(
            "contextMenu").style.display = "none"
    }

    function rightClick(e) {
        e.preventDefault();

        if (document.getElementById(
            "contextMenu").style.display == "block")
            hideMenu();
        else {
            var menu = document
                .getElementById("contextMenu")

            menu.style.display = 'block';
            menu.style.left = e.pageX + "px";
            menu.style.top = e.pageY + "px";
        }
    }

    return (
        <div>
            <div id="contextMenu" className="context-menu"
                 style={{display:"none"}}>
                <ul>
                    <li><a href="#">Element-1</a></li>
                    <li><a href="#">Element-2</a></li>
                    <li><a href="#">Element-3</a></li>
                    <li><a href="#">Element-4</a></li>
                    <li><a href="#">Element-5</a></li>
                    <li><a href="#">Element-6</a></li>
                    <li><a href="#">Element-7</a></li>
                </ul>
            </div>
        </div>
    );
}


export default Test;
