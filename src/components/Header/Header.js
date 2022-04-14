import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../images/user.png'
import "./Header.scss"
import { CustomSelect } from '../Select/CustomSelect'

export default function Header() {
  return (
    <div className='header'>
      <Link to="/">
      
      <div className='logo'>Movie App</div>
      </Link>
      <CustomSelect />
      <div className='user-image'>
        <img src={Logo} alt="user"/>
      </div>
      
    </div>
  )
}
