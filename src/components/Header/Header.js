import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../images/user.png'
import "./Header.scss"

export default function Header() {
  return (
    <div className='header'>
      <Link to="/">
      
      <div className='logo'>Movie App</div>
      </Link>
      <div className='user-image'>
        <img src={Logo} alt="user"/>
      </div>
      
    </div>
  )
}
