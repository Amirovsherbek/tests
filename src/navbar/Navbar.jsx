import {NavLink} from 'react-router-dom'
import './navbar.css'
import Logotip from '../image/logotip.png'
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
function Navbar() {
  const [hamburger,setHamburger]=useState(false)
  return (
      <div className='navbar' >
        <div className="navbar_logotip">
          <img src={Logotip} alt="error" />
        </div>
      <div className="navbar_link ">
      <NavLink to={'/kurslarimiz'} className={'nav_link'}> Kurslarimiz</NavLink>
      <NavLink to={'/haqimizda'} className={'nav_link'}> Biz haqimizda</NavLink>
      <NavLink to={'kirish'} className={'nav_link btnx btn_nav_link'} > Kirish</NavLink>
      </div>
      <div className="hamburger">
          <button type={'button'} className={'btnx btn-yellow btn_hamburger'}
           onClick={()=>setHamburger(prev=>!prev)}>
            <GiHamburgerMenu/></button>
         <div className={hamburger ? 'navbar_bar':'no_hamburger'}>
            <NavLink to={'/kurslarimiz'} className={'nav_link'}> Kurslarimiz</NavLink>
            <NavLink to={'/haqimizda'} className={'nav_link'}> Biz haqimizda</NavLink>
            <NavLink to={'kirish'} className={'nav_link btnx btn_nav_link'} > Kirish</NavLink>
         </div>
      </div>
      
      </div>
    );
  }
  export default Navbar;