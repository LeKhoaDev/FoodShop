/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import '../AppDownload/AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Exprience Download <br /> ToyShop App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload
