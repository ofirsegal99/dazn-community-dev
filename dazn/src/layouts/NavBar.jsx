import React from 'react'
// import DAZNIcon from 'styles/assets/Dazn-Icon.svg';
import DAZNIcon from '../styles/assets/Dazn-Icon.svg';
// import NavItem from 'common/NavItem';
import NavItem from '../common/NavItem';
function NavBar() {
  return (
    <div className='NavBar'>
        <div className='HalfNavBar'>
        <button className='DAZNNavButton'><img src={DAZNIcon} alt="dazn-symbol" /></button>
        <NavItem href="/Home" type="Button" text="HOME"/>
        <NavItem href="/Schedule" type="Button" text="SCHEDULE"/>
        <NavItem href="/Sports" type="ListButton" text="SPORTS"/>
        <NavItem href="/Community" type="Button" text="COMMUNITY"/>
        </div>
        <div className='HalfNavBar SecondHalfNavBar'>
        <NavItem href="/Menu" type="ListButton" text="MENU"/>
        </div>
    </div>
  )
}

export default NavBar;