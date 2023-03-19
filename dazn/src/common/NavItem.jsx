import React from 'react'
import { NavLink } from 'react-router-dom';
import ArrowIcon from "../styles/assets/Arrow-Icon.svg"

function NavItem(props) {
    let arrowIcon = false;
    if(props.type === "ListButton"){
        arrowIcon = true;
    }
  return (
    <NavLink exact={true} to={props.href} activeClassName="active" className='NavButton'>
              {props.text}
              { arrowIcon ? <img className='NavArrowIcon' src={ArrowIcon} alt="Arrow-Icon" /> : <></> }
   </NavLink>
  )
}

export default NavItem