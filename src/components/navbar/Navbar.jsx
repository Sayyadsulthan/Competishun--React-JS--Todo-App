import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className='navWrapper' style={{display:'flex', border:'1px solid'}}>

        <div className="navContainer">

          <div className="navLeft">
            <img src="" alt="Logo" />
          </div>

          <div className="navRight">
            
            <div className="navBtns">
              <img src="" alt="SignUpBtn" />
              <img src="" alt="SignInBtn" />
              {/* If Valid User */}
              <img src="" alt="LogOutBtn" />
            </div>
          </div>
        </div>
    </div>
    <Outlet />
    </>
  )
}
