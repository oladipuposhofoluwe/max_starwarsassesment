import React from 'react'
import { NotificationsNone, Forum } from '@material-ui/icons';
// import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import "./topbar.css"

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    {/* <span><img className="logo" src="/image/logo.png" alt=""/></span> */}
                </div>
                <div className="topbarRigth">
                    
                <div className="topbariconscontainer">
                        <Forum className="icons"/>
                    </div>
                    
                    <div className="topbariconscontainer">
                        <NotificationsNone className="icons"/>
                        <div className="topiconbadge"></div>
                    </div>

                    <img src="/image/logo.png" alt="" className="avatar"/>

                </div>
            </div>
        </div>
    )
}

export default Topbar;
