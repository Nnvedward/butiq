import React from 'react'
import './topbar.css'
import { Language, NotificationsNone, Settings } from "@mui/icons-material"

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>BUTIQ.</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <img src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt="User" className='topAvatar' border="0"/>
                </div>
            </div>
        </div>
    )
}

export default Topbar