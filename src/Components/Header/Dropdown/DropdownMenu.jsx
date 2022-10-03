import React from 'react'
import { NavLink } from "react-router-dom";
import "../header.css"


function DropdownMenu(props) {
    return (props.trigger) ? (
        <div className='monDropdown'>
            <div className="button-drop">
                <button><NavLink activeClassName="active" className='link-btn' to="/panier">VIEW PANIER</NavLink></button>
            </div>
            {props.children}
        </div>
    ) : "";
}

export default DropdownMenu